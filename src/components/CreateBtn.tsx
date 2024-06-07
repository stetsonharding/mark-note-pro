import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

type buttonProps = {
  btnName: string;
};
const CreateBtn = ({ btnName }: buttonProps) => {
  return (
    <Container>
      <Row>
         <Col xs={12} md={8} lg={12}  className=" d-flex justify-content-end mb-4 mt-4">
         <Link to="/newNote">
          <Button>{btnName}</Button>
         </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateBtn;
