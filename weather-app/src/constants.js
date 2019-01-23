const isFirefox = !!window.browser;

export const FIREFOX = 'firefox';
export const CHROME = 'chrome';
export const BROWSER_NAME = isFirefox ? FIREFOX : CHROME;
export const BROWSER = isFirefox ? browser : chrome;

// Type of Message for dispatch events from the popup Store to background
export const DISPATCH_TYPE = `${BROWSER_NAME}.extension.dispatch`;
// Type of Message for state update events from background to popup
export const STATE_TYPE = `${BROWSER_NAME}.extension.state`;

export const PORT_NAME = `${BROWSER_NAME}.extension-${process.env.APP_VERSION}`;
