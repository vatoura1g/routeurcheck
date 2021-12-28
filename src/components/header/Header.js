import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./Header.css"

const Header = ({handleChange,ratingChanged}) => {
  
  
  return (
    <div >
      <Navbar className='nav'>
  <Container fluid>
    <Navbar.Brand href="#" style={{color:"red"}}><strong>EL ret3i TV</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" style={{color : "black"}} ><strong>Home</strong></Nav.Link>
        <Nav.Link href="#action2" style={{color : "black"}} ><strong>Log In</strong></Nav.Link>
        <NavDropdown title={<strong style={{color:"black"}}>Type Of Movies</strong> }  className="title" id="navbarScrollingDropdown"bg="dark" variant="dark" >
         <div className="list">
         <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Romantic</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Animation</NavDropdown.Item>
          <NavDropdown.Item href="#action4">History</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Family</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Fiction</NavDropdown.Item>
          <NavDropdown.Item href="#action4">imagination</NavDropdown.Item>
          <NavDropdown.Item href="#action4">vagueness</NavDropdown.Item>
          <NavDropdown.Item href="#action4">CV</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Music</NavDropdown.Item>
          <NavDropdown.Item href="#action4">War</NavDropdown.Item>
          <NavDropdown.Item href="#action4">crime</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Documentary</NavDropdown.Item>
         </div>
        </NavDropdown>
        <Nav.Link href="#action1" style={{color : "red"}} ><strong>Series</strong></Nav.Link>
        <Nav.Link href="#action1" style={{color : "red"}} className='mov'><strong>Movies</strong></Nav.Link>
        
       
      </Nav>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
          

        />

        
      </Form>
      <Button style={{color : "black"}}>Sing In</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
