import './App.css';
import Ballot from './Components/Ballot/Ballot';

function App() {
  return (

    <>
      <header className="app__header">
        <h1>Awards 2022</h1>
      </header>
      <div className="app__main">
        <Ballot />
      </div>
    </>
  );
}

export default App;
