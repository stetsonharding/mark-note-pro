import { useParams } from 'react-router-dom'
import NewNoteForm from './NewNoteForm'
import { Note } from '../models/model'

type EditNoteProps = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
  notes: Note[]
}

const EditNote = ({ notes, setNotes }: EditNoteProps) => {
  const { id } = useParams<{ id: string }>()
  const noteId = Number(id);
  const editedNote = notes.find(note => note.id === noteId);

  const handleEditNote = (enote: Note) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === enote.id ? { ...enote } : note
      )
    );
  };

  return (
    <>
      <h2>Edit Note</h2>
      <NewNoteForm editedNote={editedNote} setNotes={setNotes} handleEditNote={handleEditNote} />
    </>
  )
}

export default EditNote;
