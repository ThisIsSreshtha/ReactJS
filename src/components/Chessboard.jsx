import React from 'react';
import './Chessboard.css';

const Chessboard = ({size = 8, squareSize = 60, showCoords = true}) => {
  const files = 'abcdefghijklmnopqrstuvwxyz'.slice(0, size).split('');
  const total = size + 2; // include label rows/cols

  const cells = [];
  for (let r = 0; r < total; r++) {
    for (let c = 0; c < total; c++) {
      const key = `${r}-${c}`;

      // corners
      if ((r === 0 || r === total - 1) && (c === 0 || c === total - 1)) {
        cells.push(
          <div key={key} className="cell corner" />
        );
        continue;
      }

      // top files labels
      if (r === 0 && c > 0 && c < total - 1) {
        const label = files[c - 1];
        cells.push(
          <div key={key} className="cell file top">{label}</div>
        );
        continue;
      }

      // bottom files labels
      if (r === total - 1 && c > 0 && c < total - 1) {
        const label = files[c - 1];
        cells.push(
          <div key={key} className="cell file bottom">{label}</div>
        );
        continue;
      }

      // left rank labels
      if (c === 0 && r > 0 && r < total - 1) {
        const rank = size - (r - 1);
        cells.push(
          <div key={key} className="cell rank left">{rank}</div>
        );
        continue;
      }

      // right rank labels
      if (c === total - 1 && r > 0 && r < total - 1) {
        const rank = size - (r - 1);
        cells.push(
          <div key={key} className="cell rank right">{rank}</div>
        );
        continue;
      }

      // inner squares
      const rr = r - 1;
      const cc = c - 1;
      const isDark = (rr + cc) % 2 === 1;
      cells.push(
        <div
          key={key}
          className={`cell square ${isDark ? 'dark' : 'light'}`}
          data-row={rr}
          data-col={cc}
          aria-label={`row ${rr + 1}, col ${cc + 1}`}
        />
      );
    }
  }

  return (
    <div
      className="board-wrap"
      style={{
        gridTemplateColumns: `auto repeat(${size}, ${squareSize}px) auto`,
        gridTemplateRows: `auto repeat(${size}, ${squareSize}px) auto`,
      }}
    >
      {cells}
    </div>
  );
};

export default Chessboard;
