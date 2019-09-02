import React from 'react';
import Head from '../../images/head.png';

export default class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是应用的首页'
    }
  }
  componentDidMount() {
    const item = { title: 'ES6扩展运算符 ...' }
    const lists = [...[{ title: 'ES6转换' }],item];
    this.setState({ lists });
  }
  render() {
    const { message, lists } = this.state;
    return(
      <div>
        <h2>{ message }</h2>
        <img src={Head} />
        <ul>
        { 
          lists && lists.map(item => (
          <li>{ item.title }</li>
          )) 
        }
        </ul>
      </div>
    )
  }
}