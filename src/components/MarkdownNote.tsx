import { Tag } from "../models/model";
import { Badge, Stack, Card } from "react-bootstrap"

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
          <Stack gap={1} direction="horizontal" className="flex-wrap">
          {tags.map((tag) => (
              <Badge className="text-truncate" key={tag.id}>
                {tag.label}
              </Badge>
          ))}
          </Stack>
        </div>
      </Card.Body>
    </Card>
  );
};
//Title
//Tags
export default MarkdownNote;
