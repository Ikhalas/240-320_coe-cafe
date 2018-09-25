import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import home from './home';
import {Router,Route,Link,browserHistory} from 'react-router'




ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={home}/>
    </Router>,document.getElementById('root')
   
    
);
registerServiceWorker();
