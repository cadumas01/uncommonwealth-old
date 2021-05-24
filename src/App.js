import React from 'react'
import './App.css';
import Header from './Header.js';
import MyButton from './components/MyButton.js'
import {Button, Container,Col,Row}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home.js'
import Music from './components/Music.js'
import About from './components/About.js'


function App() {
  return (
    <div className="App">

      <Router>
          <Container className="Container-outer">
            <Row className="Row">  <NavigationBar></NavigationBar></Row>

                  <Switch>
                      <Route exact path ="/" component={Home}/>
                      <Route exact path ="/about" component={About}/>
                      <Route exact path ="/music" component={Music}/>
                  </Switch>

            <Row className="Row">
              <Col><Button variant="success"> A button?</Button></Col>
              <Col> <Button  bsStyle="primary" bsSize="xxl" >
                Button
              </Button>
                <MyButton></MyButton>
                <MyButton></MyButton></Col>
            </Row>
          </Container>
      </Router>
    </div>
  );
}

export default App;
