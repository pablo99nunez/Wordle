import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Board/Board";
import { Route, Routes } from "react-router-dom";
import HowTo from "./Components/HowTo/HowTo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar></Navbar>
              <div className="game">
                <Board></Board>
              </div>
            </>
          }
        ></Route>
        <Route path="/howToPlay" element={<HowTo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
