
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import NewNote from "./components/NewNote";
import Dashboard from "./Dashboard";

import { Note } from "./models/model";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import { useLocalStorage } from "./useLocalStorage";

function App() {

  //State to hold all created notes.
  // const [notes, setNotes] = useState<Note[]>([])
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', [])


  
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Dashboard notes={notes}/>} />
        <Route path="/newNote" element={<NewNote setNotes={setNotes} />} />
        <Route path="/:id">
          <Route index element={<ViewNote notes={notes} setNotes={setNotes}/>} />
          <Route path="edit" element={<EditNote notes={notes}setNotes={setNotes} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
