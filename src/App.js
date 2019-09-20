import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'reactstrap';
import './App.css';
import Pool from './Pool'


class App extends React.Component {
    constructor(props){
    super(props);
    this.state={
      unassigned:9,   
      assigned:0
    } 
  }
  

  assignTask=()=>{
    if(!this.state.unassigned){
      alert('No more agents left to assign');
      return;
    }
    this.setState({
      unassigned:this.state.unassigned-1,
      assigned:this.state.assigned+1
    });
  }
  
  revokeTask=()=>{
    if(!this.state.assigned){
      alert('No more agents left to revoke');
      return;
    }
    this.setState({
      unassigned:this.state.unassigned+1,      
      assigned:this.state.assigned-1
    })
  }
  
  render(){
    return (
      <Container>
          <Row>
            <Col xs="12" sm= "4" md="4" id="pool1" ><Pool agents={this.state.unassigned} /></Col>
            <Col xs="12" sm= "4" md="4">
            <Button outline color="primary"  className="button btn" id="assign-button" onClick={this.assignTask}>Assign &rarr;</Button>
            <br/>
            <Button outline color="success" className="button btn" id= "unassign-button" onClick={this.revokeTask}>&larr; Revoke</Button>
            </Col>
            <Col xs="12" sm= "4" md="4" id="pool2"><Pool agents={this.state.assigned} /></Col>
        </Row>
      </Container>
    )
  }
}

export default App;
