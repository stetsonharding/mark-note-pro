import React from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../models/model';
import { Row, Col, Stack, Button } from 'react-bootstrap';
import RenderTags from './RenderTags';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

type ViewNoteProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const ViewNote = ({ notes, setNotes }: ViewNoteProps) => {
    const { id } = useParams<{ id: string }>();
  

    // Convert the id from useParams to a number
    const noteId = Number(id);
  
    // Find the note with the matching id
    const note = notes.find(note => note.id === noteId);

  if (!note) {
    return <div>Note not found</div>;
  }
 

const deleteNote = () => {
const updatedNotes = notes.filter(note => note.id !== noteId)
setNotes(updatedNotes)
}

  return (
   <>
    <Row>
     <Col>
      <h2>{note.title}</h2>
      <RenderTags tags={note.tags}/>
      </Col>
      <Col xs="auto">
      <Stack gap={1} direction='horizontal'>
      <Link to={`/${noteId}/edit`}><Button variant='primary'>Edit</Button></Link>
      <Link to="/"><Button variant='outline-danger' onClick={deleteNote}>Delete</Button></Link>
      <Link to="/"><Button variant='light'>Back</Button></Link>
      </Stack>
      </Col>
    </Row>
    <ReactMarkdown>{note.markdown}</ReactMarkdown>
   </>
  );
};

export default ViewNote;
