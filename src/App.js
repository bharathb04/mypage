import React, { Component } from 'react';
import './App.css';
import Skills from './Skills';
import DBSkill from './DBSkill';
import Intro from './Intro';

class App extends Component {
  
  render(){
  
  const skill1 = {
    skill: 'ReactJS',
    desc: 'This webpage is created using React.',
    github: 'https://github.com/bharathb04/mypage',
    link: '#home'
  }

  const skill2 = {
    skill: 'Python',
    desc: 'Below link shows source of a python script.',
    github: 'https://github.com/bharathb04/Automation',
    link: '#home'
  }

  const skill3 = {
    skill: 'Docker',
    desc: 'This React application was deployed using Docker.',
    github: 'https://github.com/bharathb04/mypage',
    link: '#home'
  }

  const skill4 = {
    skill: 'PostgreSQL',
    desc: 'Click Below Link to interact with SQL DB.',
    github: '/test',
    link: '#home'
  }

  const skill5 = {
    skill: 'AWS EC2',
    desc: 'This webpage is hosted in AWS EC2 instance.',
    github: 'https://aws.amazon.com/console/',
    link: '#home'
  }

  const skill6 = {
    skill: 'Nodejs API',
    desc: 'Webpage interacts with Nodejs API.',
    github: 'https://github.com/bharathb04/pg-api',
    link: '#home'
  }

  const skill7 = {
    skill: 'AWS Route53',
    desc: 'The web page is hosted using AWS.',
    github: 'https://aws.amazon.com/console/',
    link: '#home'
  }

  const skill8 = {
    skill: 'AWS CodeDeploy',
    desc: 'The deployment is fully automated - CI/CD.',
    github: 'https://aws.amazon.com/console/',
    link: '#home'
  }

  const skill9 = {
    skill: 'AWS RDS',
    desc: 'The PostgreSQL database is hosted in RDS instance.',
    github: 'https://aws.amazon.com/console/',
    link: '#home'
  }

  return (

    <div className="App">
      <Intro />
      <div className="board-row">
      <Skills tech={skill5}/> <Skills tech={skill7}/> <Skills tech={skill8}/> <Skills tech={skill9}/> 
      </div> 
      <div className="board-row">
      <Skills tech={skill1}/> <Skills tech={skill2}/> <Skills tech={skill3}/> <Skills tech={skill6}/>
      </div>
      <div>
      <DBSkill tech={skill4}/> 
      </div>


      <div className="bb8-fun">
          <img src='/bb8.jpg' alt='BB8_Image' height='150' width='115'></img>
      </div>
    </div>

  
  );
  }
}

export default App;
