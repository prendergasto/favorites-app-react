import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Search from './Search.js';
import Favorites from './Favorites.js';

export default class App extends React.Component {
  state = { user: null }
  render() {
      return(
        <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

