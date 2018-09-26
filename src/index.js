import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import App from './App';
import home from './home';



ReactDOM.render(
    <Routes history={browserHistory}>
      <App />
    </Routes>,
    document.getElementById('root')
   
    
);
registerServiceWorker();
