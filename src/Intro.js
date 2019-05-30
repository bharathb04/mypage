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

          I am Bharath, I have been in IT industry for almost 9 years. 
          <br></br>
          Please refer my latest resume <a href="https://s3-ap-southeast-2.amazonaws.com/s3bharath1/Bharath_Resume.docx">here</a> from a S3 Bucket.
        </p>

        <p className="Intro">
          Each of the skills listed below make use of single react component. 
        </p>
        </div>

    );
    }
}

export default Intro;