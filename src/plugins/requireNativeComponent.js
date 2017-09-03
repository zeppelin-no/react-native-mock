/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return class extends React.Component {
    displayName = viewName

    render() {
      return null;
    }

  };
}

module.exports = requireNativeComponent;
