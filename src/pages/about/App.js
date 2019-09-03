import React from 'react';
import { getNode } from '../../utils';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是应用的关于我们'
    }
  }
  componentDidMount() {
    const node = getNode('div');
  }
  render() {
    return(
      <div>
        <h2>{ this.state.message }</h2>
      </div>
    )
  }
}