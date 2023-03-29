import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import DevPage from '../DevPage';
import RoomsPage from '../RoomsPage';

export default function MainPage(): JSX.Element {
  return (
    <Container className="mt-5" >
      <Col>
        <RoomsPage />
      </Col>
      <Col>
        <Row>
          <DevPage />
        </Row>
      </Col>
    </Container>
  );
}

