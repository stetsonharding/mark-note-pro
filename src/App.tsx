import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import NewNote from "./components/NewNote";
import Dashboard from "./Dashboard";

import { Note } from "./models/model";

function App() {

  //State to hold all created notes.
  const [notes, setNotes] = useState<Note[]>([])

  console.log(notes)
  
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/newNote" element={<NewNote setNotes={setNotes} />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
