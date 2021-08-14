import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import HTML from './components/HTML/HTML';
import CSS from './components/CSS/CSS';
import JavaScript from './components/JavaScript/Javascript';
import Node from './components/Node/Node';
import PostgreSQL from './components/PostgreSQL/PostgreSQL';
import ReactJS from './components/ReactJS/ReactJS';
import Redux from './components/Redux/Redux';
import Routing from './components/Routing/Routing';
import Massive from './components/Massive/Massive';
import Heroku from './components/Heroku/Heroku';
import Git from './components/Git/Git';
import CommandLine from './components/CommandLine/commandLine';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/HTML' component={HTML} />
        <Route exact path='/CSS' component={CSS} />
        <Route exact path='/JavaScript' component={JavaScript} />
        <Route exact path='/Node' component={Node} />
        <Route exact path='/PostgreSQL' component={PostgreSQL} />
        <Route exact path='/React' component={ReactJS} />
        <Route exact path='/Redux' component={Redux} />
        <Route exact path='/Routing' component={Routing} />
        <Route exact path='/Massive' component={Massive} />
        <Route exact path='/Heroku' component={Heroku} />
        <Route exact path='/Git' component={Git} />
        <Route exact path='/Command Line' component={CommandLine} />
    </Switch>

)