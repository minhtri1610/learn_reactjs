import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import './index.css';
import App, {Home, About, Contact} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Route path = "/" component = {App}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
        
    </BrowserRouter>
), document.getElementById('root'));
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
