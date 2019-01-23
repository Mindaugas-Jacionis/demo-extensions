import { bindActionCreators } from 'redux';

import { DISPATCH_TYPE, STATE_TYPE, BROWSER } from '../../constants';
import resolveAction from './utils/resolveAction';

const wrapStore = ({ store, portName } = {}) => {
  if (!portName) {
    throw new Error('portName is required');
  }

  BROWSER.runtime.onMessage.addListener(({ type, port, action = {} }) => {
    if (port !== portName) {
      return;
    }

    if (type === DISPATCH_TYPE) {
      const { alias, payload = {} } = action;
      const { dispatch } = store;

      if (alias) {
        const resolvedAction = resolveAction(alias);
        bindActionCreators(resolvedAction, dispatch)(payload);
      } else {
        dispatch(action);
      }
    }
  });

  BROWSER.runtime.onConnect.addListener(port => {
    if (port.name !== portName) {
      return;
    }

    const sendState = () => {
      port.postMessage({
        type: STATE_TYPE,
        payload: store.getState(),
      });
    };

    const unsubscribe = store.subscribe(sendState);
    port.onDisconnect.addListener(unsubscribe);
    sendState();
  });
};

export default wrapStore;
