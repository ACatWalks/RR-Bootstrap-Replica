import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

function StoreListing() {
    return (
        <div>
            <h2>Browse stores in San Diego</h2>
            <Container style={{marginTop: "40px", textAlign: "center"}}>
                <Row style={{borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Row>
                        <Col xs="0.5">
                            <Image src="https://www.https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{fontWeight: "bold"}}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs="0.5">
                            <Image src="https://www.https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{fontWeight: "bold"}}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs="0.5">
                            <Image src="https://www.https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/1352/d589b58a-1278-4ca9-8ac6-a42fda734bb5.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{fontWeight: "bold"}}>Northgate Market</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default StoreListing