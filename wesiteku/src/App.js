import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from '@material-ui/core';
import { 
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Stuff from '../src/components/Stuff';
import Contact from '../src/components/Contact';
import Navbar from '../src/components/Navbar';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:"uhuy"
    }
  }
  render() {
    return (
      <HashRouter>
        <div>          
          <Navbar/>
            <div className="content">
              <Route exact path="/" render={(props) => (<Home/>)}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;
