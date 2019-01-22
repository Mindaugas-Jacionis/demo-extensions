import { DISPATCH_TYPE, STATE_TYPE, BROWSER } from '../../constants';

class Store {
  constructor({ portName, state = {} }) {
    if (!portName) {
      throw new Error('portName is required');
    }

    this.port = BROWSER.runtime.connect({ name: portName });
    this.listeners = [];
    this.state = state;

    this.port.onMessage.addListener(message => {
      if (message.type === STATE_TYPE) {
        this.replaceState(message.payload);
      }
    });
  }

  subscribe = newListener => {
    this.listeners.push(newListener);

    return () => {
      this.listeners = this.listeners.filter(
        listener => listener !== newListener
      );
    };
  };

  replaceState = state => {
    this.state = state;

    this.listeners.forEach(listener => listener());
  };

  getState = () => this.state;

  dispatch = action => {
    BROWSER.runtime.sendMessage({
      type: DISPATCH_TYPE,
      port: this.port.name,
      action,
    });
  };
}

export default Store;
