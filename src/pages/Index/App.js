import React from 'react';

export default class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是应用的首页'
    }
  }
  render() {
    return(
      <div>{this.state.message}</div>
    )
  }
}