import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
const reactElement = {
  type: 'a',
  props: {
    href: 'https://example.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
};
const anotherElement = (
  <a href="https://example.com" target='_blank'>Visit Us</a>
);
const anotherUser = "Dev7083";
const reactElementnew = React.createElement(
  'a', {
  href: 'https://example.com',
  target: '_blank'
},
  'Click Me broo',
  anotherUser);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  anotherElement
  // </React.StrictMode>,
);
