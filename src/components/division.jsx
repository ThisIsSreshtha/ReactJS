import React from "react";
import '../assets/css/style.css';  // keep existing project styles
import Chessboard from './Chessboard';

const Division = () => {
    return (
        <div style={{padding: 16}}>
            <h3>Chessboard (8×8)</h3>
            <Chessboard size={8} squareSize={60} />
        </div>
    );
};

export default Division;
