import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  const [buttonVal, setButtonVal] = useState([""]);
  const [msg, setMsg] = useState<string>("");

  const elm = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E"];

  function generateRandomColor() {
    const color = new Array(6).fill("").map(() => { return elm[Math.floor(Math.random() * elm.length)] }).join("");
    console.log(color);

    return "#" + color;
  }

  function handleButton(val: string) {
    if (val === color) {
      setMsg("You are right!");
      window.location.reload();
    } else {
      setMsg("wrong choice")
    }
  }

  useEffect(() => {
    const generatedColor = generateRandomColor();
    setColor(generatedColor);
    setButtonVal(
      [generatedColor, generateRandomColor(), generateRandomColor()]
        .sort(() => 0.5 - Math.random())
    );

    console.log(color)
  }, []);

  return (
    <div className="App">
      <div className='color-box' style={{
        background: color,
      }}></div>
      <div className='button-wrap'>
        {buttonVal.map((val) => {

          return <button onClick={() => handleButton(val)}>{val}</button>
        })}
      </div>
      <p>{msg}</p>
    </div>
  );
}

export default App;
