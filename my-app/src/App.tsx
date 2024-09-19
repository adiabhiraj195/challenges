import React, { useState } from 'react';
import './App.css';


type PointType = {
  x: number;
  y: number;
}

function App() {
  const [points, setPoints] = useState<PointType[]>([]);
  const [redoPoints, setRedoPoints] = useState<PointType[]>([]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoints([...points, {
      x: clientX,
      y: clientY
    }])
  }

  function handleUndo() {
    const undoPoints: PointType[] = [...points];
    const popedPoint = undoPoints.pop();
    if (!popedPoint) return;
    setPoints(undoPoints);
    setRedoPoints([...redoPoints, popedPoint])
    // console.log(undoPoints);
  }

  function handleRedo() {
    const dummyRedo = [...redoPoints];
    const redoPopedPoint = dummyRedo.pop();
    if (!redoPopedPoint) return;
    setRedoPoints(dummyRedo);
    setPoints([...points, redoPopedPoint]);
  }
  return (
    <>
      <button disabled={points.length === 0} className='undo' onClick={handleUndo}>Undo</button>
      <button disabled={redoPoints.length === 0} className='undo' onClick={handleRedo}>Redo</button>
      <div className="App" onClick={handleClick}>
        {points.map((point, index) => (
          <div
            key={index}
            className='point'
            style={{
              left: point.x - 5 + "px",
              top: point.y - 10 + "px"
            }}
          >
            o
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
