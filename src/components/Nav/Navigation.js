import React, { Component } from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import Logo from '../Nav/logo.png'
export class NavMenu extends Component {
  render() {
    return (
        <div>
       <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#05aa57'}}>
       <Navbar.Brand href="#home">
      <img
        alt="" src={Logo} width="40" height="40" className="d-inline-block align-top"
      />
      <span style={{marginBottom:'2em'}}>{'PassSecure'}</span>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"  style={{ color: 'white' }}>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div> 
    )
  }
}
export default NavMenu
