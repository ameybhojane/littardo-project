import React from 'react'
import { NavbarBrand, Navbar, NavItem, Nav, Input, InputGroup, Button,NavLink, Container, Row, Col } from 'reactstrap'


function NavigationSection() {
  return (
    <div>
    <Container className='fluid'>
        <Row className='small'>
            <Col className="border-end border-1 padding padding-3">Groceries</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Mobile Phone</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Personal Care</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Books</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Appliances</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Electronics</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Furniture</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Home</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Beauty and Wellness</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Baby Care and Toys</Col>
            <Col className="border border-top-0 border-bottom-0 border-1 padding padding-1">Furniture</Col>
            <Col className="border-start border-1 padding padding-3">Deals and Offer</Col>
        </Row>
    </Container>
    </div>
  )
}

export default NavigationSection