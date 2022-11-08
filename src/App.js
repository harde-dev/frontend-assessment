import { useState, useEffect } from 'react';
import api from "./Api/Api";
import Ballot from './Components/Ballot/Ballot';
import Result from './Components/Result/Result'

import './App.css';

function App() {
  const [ballot, setBallot] = useState([]);
  const [userBallot, setUserBallot] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.getBallotData().then(data => {
      setBallot(data.items);
      fireUserBallotbox(data.items)
    })
  }, [])


  const fireUserBallotbox = (selections) => {
    let emptyBallotbox = {}
    selections.forEach(categories => emptyBallotbox[categories.id] = '')
    setUserBallot(emptyBallotbox)
  }

  const moveSelections = (selection, categories) => {
    let newUserBallot = { ...userBallot }
    newUserBallot[categories] = selection;
    setUserBallot(newUserBallot)
  }

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
  }

  return (
    <>
      <header className="app__header">
        <h1>Awards 2022</h1>
      </header>
      <div className="app__main">
        <Ballot ballot={ballot} moveSelections={moveSelections} />
      </div>
      <button className='app__submit' onClick={() => toggleModal()}>Submit All Ballots</button>
      {modal && <Result toggleModal={toggleModal} userBallot={userBallot} />}
    </>
  );
}

export default App;
