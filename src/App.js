import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row, NavDropdown } from 'react-bootstrap';
import { Link, Redirect, Route, Switch, useHistory , useLocation} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Mars from './Mars';
import Home from './Home';
function App() {
  return (
    <>
    <Navbar expand="lg" style={{marginBottom: "12px", backgroundColor:"#011936", color:"white", marginTop: "0px"}}>
  <Navbar.Brand href="#home" style={{color:"#F4FFFD"}}>Nasa Image Gallery</Navbar.Brand>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/home" style={{color:"#F4FFFD"}}>
      <Nav.Link >Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/mars" style={{color:"#F4FFFD"}}>
      <Nav.Link>Mars 2020</Nav.Link>
      </LinkContainer>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search By Keyword" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    <Container>
        
        <Switch>
          <Route exact path="/" render={()=>(<Redirect to="/home" />)}></Route>
          <Route exact path="/home" render={(props)=>(<Home/>)}></Route>
          <Route path="/mars" render={(props) => (<Mars/>)} />
          
          {/* <NotFound></NotFound> */}
        </Switch>

    </Container>
    <br />
    </>
  );
}

export default App;
