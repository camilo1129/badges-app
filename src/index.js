import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App.js';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root')
ReactDOM.render(<App/>, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
