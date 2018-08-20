import React,{Component} from 'react';
import {Link } from 'react-router-dom'


class Navbar extends Component {
  render(){

    return (
      <div>
        <nav class="navbar navbar-dark bg-primary">
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
        </nav>
      </div>
        );
  }
}



export default Navbar;
