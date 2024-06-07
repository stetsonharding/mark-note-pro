import { Note } from "./models/model";
import Search from "./components/Search";

import CreateBtn from "./components/CreateBtn";
import MarkdownNotesContainer from "./components/MarkdownNotesContainer";


type dashboardProps = {
  notes: Note[];
};

const Dashboard = ({ notes }: dashboardProps) => {
  return (
    <div>
      <h2>Markdown Notes</h2>
      <CreateBtn btnName="Create Note" />
      <Search />
    

     <MarkdownNotesContainer notes={notes} />
     
    </div>
  );
};

export default Dashboard;
