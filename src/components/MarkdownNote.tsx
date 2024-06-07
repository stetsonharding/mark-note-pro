import Card from "react-bootstrap/Card";
import { Tag } from "../models/model";
import MarkdownTag from "./MarkdownTag";

type markDownNoteProps = {
  title: string;
  id: number;
  tags: Tag[];
};

const MarkdownNote = ({ title, id, tags }: markDownNoteProps) => {
  return (
    <Card key={id} style={{ width: "20rem", height: "15rem" }} className="mt-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex">
          {tags.map((tag) => (
            <MarkdownTag name={tag.label} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};
//Title
//Tags
export default MarkdownNote;
