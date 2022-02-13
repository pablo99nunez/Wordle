
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Board from './Components/Board/Board'

function App () {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="game">
        <Board></Board>
      </div>
    </div>
  )
}

export default App
