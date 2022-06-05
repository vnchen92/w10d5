import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        title: this.props.children.title,
        content: this.props.children.content,
        idx: 0,
      },
    ];
  }

  render() {
    return (
      <div className="tabs-container">
        <header></header>
      </div>
    );
  }
}

export default Tab;
