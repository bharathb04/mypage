import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';

class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }


    render() {

    return(
      <div>
      <header className="App-header">
        

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
      {' Hello! Welcome To My Web Page'}
      </Navbar.Brand>
      </Navbar>
 
      </header>

        <p className="Intro">

          I am Bharath, I have been in IT industry for more than 9 years. 
          <br></br>
          I have full work rights in Australia - I hold Permanent Resident VISA 190. 
          <br></br>
          This webpage lists technologies that I have worked on and their implementations.
        </p>
        
        <p className="Intro">
          Each of the skills listed below makes use of single react component. 
        </p>
        </div>

    );
    }
}

export default Intro;