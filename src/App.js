import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from './context/GlobalState';
import UserCard from './pages/UserCard';
import Users from './pages/Users';
import './App.css';

const App = () => {

  return (
    <div className='container mt-5'>
      <h1 style={{textAlign: "center"}}>Users</h1>
      <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/UserCard" component={UserCard} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
    </div>
  );
};

export default App;
