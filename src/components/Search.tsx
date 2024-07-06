import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Note } from "../models/model";

type searchProps ={
  filterNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({filterNotes}:searchProps) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={12}>
          <Form>
            <Form.Control onChange={filterNotes} size="lg" type="search" placeholder="Search Note..." name="Search Titles..." />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
