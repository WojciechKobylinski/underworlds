import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (<div className="App-header"><h2>Pick boards</h2></div>);
}

const BOARDS = [
  'chamber-of-genesis',
  'hall-of-sublimination',
  'moltscape',
  'oblivions-pillars'
];

function BoardsView() {
  return (<div className="Left-pane">
    {BOARDS.map(boardName => {
      let path = `/board/${boardName}.jpg`;
      return (<div className="board-selector">
        <img className="board-mini" src={path} alt={boardName}></img>
        </div>);
    })}
  </div>)
}

function RightPane({children}) {
  return (<div className="Right-pane">
    {children}
  </div>)
}

function App() {
  return (
    <div className="App">
      <Header/>
      <BoardsView/>
      <RightPane>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </RightPane>
      
    </div>
  );
}

export default App;
