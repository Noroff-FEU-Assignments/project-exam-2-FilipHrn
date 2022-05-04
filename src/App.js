import './sass/styles.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './components/pages/Home';
import Accommodation from './components/pages/Accommodation';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import ResidentSpecific from './components/display/ResidentSpecific';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Redirect from './components/pages/Redirect';
import { localGet } from './utils/localStorage';
import Enquiry from './components/pages/Enquiry';
import { useState } from "react";

function App() {
  const tabName = localGet('user')?.user?.username ? 'Profile' : 'Login';
  const [ expanded, setExpanded ] = useState(false);

  return (
    <Router>
      <header>
        <Navbar expanded={expanded} expand="md">
          <Container>
            <NavLink style={{textDecoration: "none", border: "none"}} to="/" exact>
              <Navbar.Brand><i class="fa-solid fa-plane-departure logo"></i>Holidaze</Navbar.Brand>
            </NavLink>

            <Navbar.Toggle onClick={ () => setExpanded(expanded ? false : 'expanded')} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink onClick={ () => setExpanded(false)} activeClassName="active" to="/" exact className="nav-link">Home</NavLink>
                <NavLink onClick={ () => setExpanded(false)} activeClassName="active" to="/accommodation" className="nav-link">Accommodation</NavLink>
                <NavLink onClick={ () => setExpanded(false)} activeClassName="active" to="/contact" className="nav-link">Contact</NavLink>
                <NavLink onClick={ () => setExpanded(false)} activeClassName="active" to="/enquiry" className="nav-link">Enquiry</NavLink>
                <NavLink onClick={ () => setExpanded(false)} activeClassName="active" to={localGet('user')?.user?.username ? "/redirect":"/login"} className="nav-link link--login">{tabName}</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="image__banner"></div>
      </header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accommodation" component={Accommodation} />
        <Route path="/contact" component={Contact} />
        <Route path="/enquiry" component={Enquiry} />
        <Route path="/details/:id" component={ResidentSpecific} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/redirect" component={Redirect} />
      </Switch>
    
      <Footer />
    </Router>
  );
}

export default App;
