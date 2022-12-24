import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Banner from "./Components/Banner";
import RowPost from "./Components/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
    </div>
  );
}

export default App;
