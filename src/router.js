import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './page/Home';
import Login from './page/login';
import TableDetail from './page/Table/tableDetail';
import TableModify from './page/Table/tableModify';
import Editor from './page/Editor';
export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/table/detail" component={TableDetail}/>
                                <Route path="/admin/table/modify" component={TableModify}/>
                                <Route path="/admin/editor" component={Editor}/>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}