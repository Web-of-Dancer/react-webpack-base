import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是应用的关于我们'
    }
  }
  render() {
    return(
      <div>{this.state.message}</div>
    )
  }
}