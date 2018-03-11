import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import SongIntro from './songIntro/index'
import './index.css';
import MainPage from './mainpage/index'
import registerServiceWorker from './registerServiceWorker';
import router from './route/route'

ReactDOM.render(
    (
        // <Router>
        //     <Route path='/' component={MainPage}/>
        // </Router>
        <div>
        {router}
        </div>
    ), document.getElementById('root'));
registerServiceWorker();
