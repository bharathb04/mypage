import React, { Component } from 'react';
import './App.css';
import Skills from './Skills';
import Intro from './Intro';
class App extends Component {
  
  render(){
  
  const skill1 = {
    skill: 'ReactJS',
    desc: 'This webpage is created using React.',
    github: 'https://github.com/bharathb04/project-app',
    link: '#home'
  }

  const skill2 = {
    skill: 'Python',
    desc: 'Below link shows source of a python script.',
    github: 'https://github.com/bharathb04/project-app',
    link: '#home'
  }

  const skill3 = {
    skill: 'Docker',
    desc: 'This React application was deployed using Docker.',
    github: 'https://github.com/bharathb04/project-app',
    link: '#home'
  }


  return (

    <div className="App">
      <Intro />
      <div className="board-row">
      <Skills tech={skill1}/> <Skills tech={skill2}/>
      </div>
      <div className="board-row">
      <Skills tech={skill3}/> 
      </div>

      <div className="bb8-fun">
          <img src='/bb8.jpg' alt='BB8_Image' height='150' width='115'></img>
      </div>
    </div>

  
  );
  }
}

export default App;
