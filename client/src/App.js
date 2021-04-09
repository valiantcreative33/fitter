import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleUser from "./components/SingleUser";
import Nav from "./components/Nav";

import './App.css';

function App() {

  const client = new ApolloClient({
      request: operation => {
          const token = localStorage.getItem('id_token');

          operation.setContext({
              headers: {
                  authorization: token ? `Bearer ${token}` : ''
              }
          });
      },
      uri: '/graphql'
  });

  return (
    <ApolloProvider client={client}>
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/user/:id' component={SingleUser} />
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </Router>
    </ApolloProvider>
  );
}

export default App;
