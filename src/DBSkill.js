import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import { CSSTransition } from 'react-transition-group';


class DBSkill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appearHome: true,
        }
    }

render () {

    const { appearHome } = this.state;

    return (

    <div className="DBSkill">

    <CSSTransition
    in={appearHome}
    appear={true}
    timeout={3000}
    classNames="fade">

    <Card style={{ width: '18rem', marginLeft: '0.75rem', marginTop: '0.5rem' }} className="card-dbskill">
        <Card.Body>
        <Card.Title>{this.props.tech.skill}</Card.Title>
        {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
        <Card.Text>
        {this.props.tech.desc}
        </Card.Text>
        {/*<Card.Link href="">Card Link</Card.Link>*/}
       <Card.Link href={this.props.tech.github}>Test {this.props.tech.skill}</Card.Link>
       </Card.Body>
    </Card>

    </CSSTransition>

    </div>

    );
}




}

export default DBSkill;
