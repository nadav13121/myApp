import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login/Login';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;