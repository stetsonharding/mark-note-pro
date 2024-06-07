import NewNoteForm from './NewNoteForm'
import { Note } from '../models/model'

type NewNoteProps ={
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NewNote = ({setNotes}: NewNoteProps) => {

  return (
    <>
    <h2 className="mb-5 mt-5">New Note</h2>
    <NewNoteForm setNotes={setNotes} />
    </>
  )
}

export default NewNote