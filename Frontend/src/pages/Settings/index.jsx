import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { scrollToSectionStart } from '../../utilities/utilities';
import Account from './Account';
import DeleteAccount from './DeleteAccount';
import RoleRequest from './RoleRequest';

const Settings = () => {
    return (
        <Container style={{paddingTop: "80px"}}>
            <Row>
                <Col xs="12" md="3" lg="2">
                    <ListGroup variant="flush" className="position-sticky top-0">
                        <ListGroup.Item as={Link} to="#account" onClick={scrollToSectionStart('account')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}} action>Account</ListGroup.Item>
                        <ListGroup.Item as={Link} to="#role-request" onClick={scrollToSectionStart('role-request')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}} action>Role request</ListGroup.Item>
                        <ListGroup.Item as={Link} to="#delete-account" onClick={scrollToSectionStart('delete-account')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}} action>Delete</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Account />
                    <RoleRequest />
                    <DeleteAccount />
                </Col>
            </Row>
        </Container>
    );
};

export default Settings;