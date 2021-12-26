import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/detail'} element={<Detail/>}/>
            <Route path={'/'} element={<Home/>}/>
        </Routes>

    </div>
      </BrowserRouter>
  );
}

export default App;
