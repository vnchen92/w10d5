import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

const Root = () => {
  const tabs = [
    { title: '1', content: '', idx: 0 },
    { title: '2', content: '', idx: 1 },
    { title: '3', content: '', idx: 2 },
  ];
  return (
    <div className="widgets">
      <div className="clock">
        <Clock />
      </div>
      <div className="tabs">
        {/* {tabs.map((tab) => (
          <Tab title={tab.title} content={tab.content} key={tab.idx} />
        ))} */}
      </div>
    </div>
  );
};
