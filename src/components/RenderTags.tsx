
import { Badge} from "react-bootstrap";
import { Tag } from '../models/model';

type renderTagProps = {
    tags: Tag[]
}

const RenderTags = ({tags}:renderTagProps) => {
  return (
    <>
    {tags.map((tag) => (
        <Badge className="text-truncate m-1" key={tag.id}>
          {tag.label}
        </Badge>
      ))}
    </>
  )
}

export default RenderTags