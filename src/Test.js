import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

class Test extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
            title: 'AWS RDS: PostgreSQL ',
            customers: [],
            loading: false,
            }
          
        }

       

  addCust(event) {
    this.setState({loading: true});
    event.preventDefault();
    let newevent;
    var that = this;
    let data = {

        cust_id: this.refs.cust_id.value,
        cust_name: this.refs.cust_name.value,
        occupation: this.refs.occupation.value
    };

    var request = new Request('http://www.bharathb04.com:3000/api/new-cust', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    });

    fetch(request)
       .then(function(response) {
        response.json()
        .then(function(data){
         console.log(data)
         that.selCust(newevent)
        })
       })
       .catch(function(err) {
        console.log(err)
       })

  }

  delCust(event) {
    this.setState({loading: true});
    event.preventDefault();
    let newevent;
    var that = this;
    let data = {

        cust_id: this.refs.cust_id.value,
    };

    var request = new Request('http://www.bharathb04.com:3000/api/del-cust/' + data.cust_id, {
        method: 'DELETE',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    });

    fetch(request)
       .then(function(response) {
        response.json()
        .then(function(data){
         console.log(data)
         that.selCust(newevent)
        })
       })
       .catch(function(err) {
        console.log(err)
       })


  }

  selCust(event) {
    this.setState({loading: true});  
    //event.preventDefault();
    var that = this;
    
    var request = new Request('http://www.bharathb04.com:3000/api/sel-cust', {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application'}),
    });

    fetch(request)
       .then(function(response) {
        response.json()
        .then( data => {
        console.log(that)
        that.setState ({customers: data, loading: false});
        console.log(that.state.customers)
        })
       })
       .catch(function(err) {
        console.log(err)
       })
  }



  render() {

    let title = this.state.title;
    let customers = this.state.customers;
//    const styles ={
//        pgrender: {
//            opacity: this.state.pgtable,
//        }
//   };

    let spinner;


    if (this.state.loading) {
         spinner = <Spinner animation="border" variant="primary" role="status" style={{marginLeft: '0.5rem', marginTop: '0.5rem'}}
         />
         }
         else
         {
         spinner = '';    
         }

//    const { pgrender } = styles;

    return (
      <div id="test">
        <h1>{title}</h1>
        
        <Form className="Test">
        <Form.Row style={{width: '55rem'}}>
        <Col>
            <Form.Control placeholder="Cust ID" ref="cust_id"/>
        </Col>
        <Col>
            <Form.Control placeholder="Cust Name" ref="cust_name" />
        </Col>
        <Col>
            <Form.Control placeholder="Cust Occupation" ref="occupation"/>
        </Col>
        </Form.Row>
        </Form>
        <div className="board-row">
        <Button type="submit" variant="success" style={{marginLeft: '0.5rem', marginTop: '0.5rem', width: '6rem'}} 
        onClick={this.addCust.bind(this)}
        >Add</Button>
        <Button type="submit" variant="danger" style={{marginLeft: '0.5rem', marginTop: '0.5rem', width: '6rem'}}
        onClick={this.delCust.bind(this)}
        >Delete</Button>
        <div>
        {spinner}
         </div>
        </div>
        
        <div>
          
        <Table striped bordered hover size="sm" style={{marginLeft: '0.5rem', width: '60rem', marginTop: '4rem'}}>
            <thead>
            <tr>
            <th>CustID</th>
            <th>Customer Name</th>
            <th>Occupation</th>
            <th>Creation Date</th>
            </tr>
            </thead>
         <tbody>
           {customers.map((cust) =>   
           <tr key={cust.cust_id}>
            
               <td>{cust.cust_id}</td> 
               <td>{cust.cust_name}</td> 
               <td>{cust.occupation}</td> 
               <td>{cust.created_on}</td> 
             
           </tr>
           )}
           </tbody>
        </Table>
        <Card.Link href="#" onClick={this.selCust.bind(this)} style={{marginLeft: '0.5rem', marginTop: '4rem'}}>Select Rows</Card.Link>
        </div>
        <Card.Link href="/" style={{marginLeft: '0.5rem', marginTop: '4rem'}}>Go Back</Card.Link>
      </div>
    );
  }
}

export default Test;