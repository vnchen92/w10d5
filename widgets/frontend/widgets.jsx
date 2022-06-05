import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

const Root = () => {
  return (
    <div className="widgets">
      <div className="clock">
        <Clock />
      </div>
      <div className="tabs">
        <Tab />
      </div>
    </div>
  );
};