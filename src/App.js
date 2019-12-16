import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/router";

function App() {
  return (
      <BrowserRouter >
        <div className="App big-content">
          <Routes />
        </div>
      </BrowserRouter>
  );
}

export default App;
