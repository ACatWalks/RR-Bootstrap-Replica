import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function TopBar() {
    return (
        <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{margin: "10px 20px 10px 20px"}} href="#home">
                <img src="https://www.https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="#LogIn" style={{marginRight: "25px", marginTop: "10px"}}>Log In</Nav.Link>
                    <Button variant="success" style={{marginLeft: "25px", marginTop: "10px", borderRadius: "10px", padding: "5px"}}>Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div style={{backgroundImage: "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "300px"}}>
            <h1>Order groceries for delivery or pickup today</h1>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </div>
        </Container>
    )
}

export default TopBar