import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Search = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={12}>
          <Form>
            <Form.Control size="lg" type="text" placeholder="Search Note..." name="search" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
