import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import MobileGame from "./pages/MobileGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/publishwithus" element={<Publish />} />
          <Route exact path="/mobilegames" element={<MobileGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
