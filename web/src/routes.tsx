import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing/index';
import TeacherList from './pages/TeacherList/index';
import TeacherForm from './pages/TeacherForm/index';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/study" component={TeacherList} />
            <Route exact path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;