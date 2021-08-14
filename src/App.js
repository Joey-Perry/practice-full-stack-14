import logo from './logo.svg';
import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
    }
  }

  render(){
    return(
      <div className='App'>
        <Nav />
        Hello World
      </div>
    )
  }
}

export default App;
