import React from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../models/model';

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

  return (
    <div>
      <h2>View Note</h2>
      <p>ID: {note.id}</p>
      <p>Title: {note.title}</p>
    
    </div>
  );
};

export default ViewNote;
