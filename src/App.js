import { useState, useEffect } from 'react';
import api from "./Api/Api";
import Ballot from './Components/Ballot/Ballot';

import './App.css';

function App() {
  const [ballot, setBallot] = useState([]);

  const moveSelections = () => {
    
  }
  return (
    <>
      <header className="app__header">
        <h1>Awards 2022</h1>
      </header>
      <div className="app__main">
        <Ballot ballot={ballot} moveSelections={moveSelections} />
      </div>
    </>
  );
}

export default App;
