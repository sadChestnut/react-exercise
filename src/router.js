import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import Login from './page/login';
import Admin from './admin'
export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        {/*<Route path="/home/:time" component={Home}/>*/}
                        <Route path="/admin/:time" render={()=>
                            <Admin>

                            </Admin>}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}