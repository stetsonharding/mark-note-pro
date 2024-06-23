import { Tag } from "../models/model";
import { Badge, Stack, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type markDownNoteProps = {
  title: string;
  id: number;
  tags: Tag[];
};

const MarkdownNote = ({ title, id, tags }: markDownNoteProps) => {
  return (
    <Link to={`/${id}`}>
      <Card style={{ width: "20rem", height: "15rem", cursor: 'pointer' }} className="mt-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Stack gap={1} direction="horizontal" className="flex-wrap justify-content-center">
            {tags.map((tag) => (
              <Badge className="text-truncate" key={tag.id}>
                {tag.label}
              </Badge>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MarkdownNote;
