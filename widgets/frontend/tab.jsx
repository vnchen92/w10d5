import React, { Component } from 'react';

class Tab extends Component {
  state = {
    title: this.props.children.title,
    content: this.props.children.content,
    idx: 0,
  };

  render() {
    return (
      <div className="tabs-container">
        <header></header>
      </div>
    );
  }
}

export default Tab;
