import React from 'react';
import { getNode } from '../../utils';
import Head from '../../images/head.png';

export default class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是应用的首页'
    }
  }
  componentDidMount() {
    const node = getNode('div');
    console.log(node)
  }
  render() {
    const { message } = this.state;
    return(
      <div>
        <h2>{ message }</h2>
        <img src={Head} />
      </div>
    )
  }
}