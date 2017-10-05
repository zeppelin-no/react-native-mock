import React from 'react';
import PropTypes from 'prop-types';
import createMockComponent from './createMockComponent';

class Picker extends React.Component {
  propTypes = {
    children: PropTypes.node
  }

  statics = {
    Item: createMockComponent('Picker.Item')
  }

  render() {
    return null;
  }
}

module.exports = Picker;
