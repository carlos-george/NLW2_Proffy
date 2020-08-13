import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ProffyIntro from './pages/ProffyIntro';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import NewUser from './pages/NewUser';
import PageSuccess from './pages/PageSuccess';
import Profile from './pages/Profile';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProffyIntro} />
                <Route path="/login" component={Login} />
                <Route path="/forget-pass" component={ForgetPass} />
                <Route path="/new-user" component={NewUser} />
                <Route path="/profile" component={Profile} />
                <Route path="/landing" component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
                <Route path="/page-success" component={PageSuccess} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;