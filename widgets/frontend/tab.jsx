import React, { Component } from 'react';

class Tab extends Component {
  state = {
    title: this.props.title,
    content: this.props.content,
    idx: 0,
  };

  getTitle = (props) => {
    const title = props.title;
    this.setState({ title });
  };

  getContent = (props) => {
    const content = props.content;
    this.setState({ content });
  };

  render = () => {
    const { title, content, idx } = this.state;
    return (
      <div className="tabs-container">
        <header>
          <h2>{title}</h2>
        </header>
      </div>
    );
  };
}

export default Tab;
