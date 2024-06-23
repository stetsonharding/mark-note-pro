import React, {ChangeEvent, FormEvent, useState} from 'react'
import { Form, Button, Stack, Row, Col } from "react-bootstrap";

import Creatable from "react-select/creatable";
import { Note, Tag} from '../models/model';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

type NoteFormProps = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NewNoteForm = ({setNotes} : NoteFormProps) => {
const [newNote, setNewNote] = useState<Note>({id: 0, title: "", markdown:"", tags:[]})
const [selectedTags, setSelectedTags] = useState<Tag[]>([])
const navigate = useNavigate();


const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  const { name, value } = e.target;

  setNewNote(prevNotes => ({
    ...prevNotes,
    [name]: value,
    tags: selectedTags,
    id: Date.now()
  }));
  
};

const createNote = (e:FormEvent) => {
  e.preventDefault();
setNotes(prev => [...prev, {...newNote, tags: selectedTags}])
setNewNote({id: 0, title: "", markdown:"", tags:[]})
setSelectedTags([])
navigate("/")
}


  return (
    <Form onSubmit={createNote}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder='Enter Note Title' name="title" onChange={handleOnChange} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Creatable value={selectedTags.map(tag =>{
                return {label: tag.label, value: tag.id}
              })} 
              isMulti 
              onChange={tags => {
                setSelectedTags(tags.map(tag => {
                  return {label: tag.label, id: tag.value}
                }))
              }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={15} name="markdown" onChange={handleOnChange} required />
            </Form.Group>
          </Col>
        </Row>
      </Stack>
      <Row>
        <Col className="d-flex gap-2 mt-2 justify-content-end">
          <Button type="submit">Save</Button>
          <Link to="/">
          <Button variant="light" type='button'>Cancel</Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
}

export default NewNoteForm;
