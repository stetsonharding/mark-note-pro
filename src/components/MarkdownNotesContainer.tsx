
import { Container, Row, Col } from "react-bootstrap";
import MarkdownNote from "./MarkdownNote";
import { Note } from "../models/model";

type markdownContainerProps = {
  notes: Note[];
};

const MarkdownNotesContainer = ({ notes }: markdownContainerProps) => {
  return (
    <Container>
      <Row>
        <Col className="d-flex gap-2 flex-wrap justify-content-start">
          {notes.map((note, index) => {
            return <MarkdownNote title={note.title} id={note.id + index} tags={note.tags} />;
          })}
        </Col> 
      </Row>
    </Container>
  );
};

export default MarkdownNotesContainer;
