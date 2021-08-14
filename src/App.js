import logo from './logo.svg';
import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
      links: ['Command Line', 'Git', 'HTML', 'CSS', 
          'JavaScript', 'React', 'Node', 'PostgreSQL', 'Massive',
          'Heroku', 'Routing', 'Redux'],
    }
  }

  render(){
    return(
      <div className='App'>
        <Nav links={this.state.links} />
        <main className='main-content'>
          {routes}
        </main>
      </div>
    )
  }
}

export default App;
