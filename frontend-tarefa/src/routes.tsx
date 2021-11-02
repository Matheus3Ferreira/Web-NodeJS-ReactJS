import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksForm from './pages/Tasks/Form'
import Home from './pages/Home';
import Tasks from './pages/Tasks';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Tasks" exact component={Tasks} />
            <Route path="/NewTask" exact component={TasksForm} />
            <Route path="/NewTask/:id" exact component={TasksForm} />
        </Switch>
    );
}

