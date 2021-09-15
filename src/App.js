import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/userlist';

const Hello = () => {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Hello;
