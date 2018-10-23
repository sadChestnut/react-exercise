import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import Login from './page/login';
export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/home/:time" component={Home}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}