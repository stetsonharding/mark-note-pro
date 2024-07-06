import { Note } from "./models/model";
import Search from "./components/Search";

import CreateBtn from "./components/CreateBtn";
import MarkdownNotesContainer from "./components/MarkdownNotesContainer";
import {  ChangeEvent, useState } from "react";

type dashboardProps = {
  notes: Note[];
};

const Dashboard = ({ notes }: dashboardProps) => {

  const [searchNote, setSearchNote] = useState<string>("")

  const filterNotes = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchNote(searchValue);
    
  };

  const notez = notes.filter(note =>
    note.title.toLowerCase().includes(searchNote.toLowerCase())
  );

  return (
    <div>
      <h2>Markdown Notes</h2>
      <CreateBtn btnName="Create Note" />
      <Search filterNotes={filterNotes} />
      <MarkdownNotesContainer notez={notez} />
    </div>
  );
};

export default Dashboard;
