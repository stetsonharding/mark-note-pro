import React from "react";

import { Form, Button, Stack, Row, Col } from "react-bootstrap";


function NewNoteForm() {
  return (
<Form>
    <Stack gap={4}>
        <Row>
            <Col>
           <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control  required/>
           </Form.Group>
            </Col>
            <Col>
           <Form.Group controlId="tags">
            <Form.Label>tags</Form.Label>
            <Form.Select  required />
           </Form.Group>
            </Col>
        </Row>
    </Stack>
</Form>
  );
}

export default NewNoteForm;
