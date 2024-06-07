import { Row, Col, Container } from "react-bootstrap";

type tagProps = {
  name: string;
};

const MarkdownTag = ({ name }: tagProps) => {
  return (
    <Container>
      <Row>
        <Col className="m-1 p-1 text-center" style={{ backgroundColor: "red", borderRadius: '5px' }}>
         <span style={{color: 'white'}}>{name}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownTag;
