import React from 'react'
import {  Container, Row, Col } from 'reactstrap'
import { faBasketShopping ,faMobile, faBook, faChargingStation, faTools, faFirstAid, faFire, faFireExtinguisher, faBandAid, faCocktail, faPersonCircleCheck,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Category() {
  return (
    <div>
      <Container className='fluid'>
        <Row className='small'>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",width: '75px', // Adjust the width and height as needed
            height: '75px',
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faMobile} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faBasketShopping} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faBook} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faChargingStation} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faTools} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faFirstAid} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faFireExtinguisher} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faBandAid} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faCocktail} size="lg" />
            </Col>
          <Col className="d-flex align-items-center justify-content-center rounded-circle" style={{
            background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)",
          }}>
            <FontAwesomeIcon className="fa-xl" icon={faPersonCircleCheck} size="lg" />
            </Col>

        </Row>
    </Container>
    </div>
  )
}


export default Category