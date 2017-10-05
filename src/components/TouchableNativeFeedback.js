import React from 'react';
import PropTypes from 'prop-types';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

class TouchableNativeFeedback extends React.Component {
  propTypes = {
    ...TouchableWithoutFeedback.propTypes,

    background: PropTypes.object
  }

  statics = {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  }

  render() {
    return null;
  }
}

module.exports = TouchableNativeFeedback;
