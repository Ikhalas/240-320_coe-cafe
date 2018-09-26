import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import App from './App';



ReactDOM.render(
    <Routes history={browserHistory}>
      <App />
    </Routes>,
    document.getElementById('root')
   
    
);
registerServiceWorker();
