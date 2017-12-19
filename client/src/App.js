import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Login } from 'components/Login';
import ProtectedContainer from 'components/Protected/ProtectedContainer';
import HomeContainer from 'components/Home/HomeContainer';
import 'App.css';

export const App = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/protected">Protected</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={HomeContainer}/>
        <Route path="/login" component={Login}/>
        <Route path="/protected" component={ProtectedContainer}/>
      </div>
    </Router>    
)