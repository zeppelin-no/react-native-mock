import React from 'react';
import PropTypes from 'prop-types';
import createMockComponent from './createMockComponent';

class TabBarIOS extends React.Component {
  propTypes = {
    children: PropTypes.node
  }

  statics = {
    Item: createMockComponent('TabBarIOS.Item')
  }

  render() {
    return null;
  }
}

module.exports = TabBarIOS;
