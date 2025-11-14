import React from 'react'
import './App.css'
import First from './first'
import Division from './components/division'
import Chessboard from './components/Chessboard'

function App() {

  return (
    <>
      <div style={{padding:20}}>
        <h2>Chessboard</h2>
        <Chessboard size={8} squareSize={60} />
      </div>
    </>
  )
}

export default App
