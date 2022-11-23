import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/pokemon/images/001.png" className="App-logo" alt="logo" />
        <p>
          ポケモンの名前当てゲームができる予定
        </p>
        <input type="text" />
        <input type="button" value="送信" />
      </header>
    </div>
  );
}

export default App;
