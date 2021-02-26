import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const userName = [
    {name: 'Mahabub Hasan Sany', job: 'React Developer'},
    {name: 'Meher Afroz Shabrina', job: 'House Wife'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <InfoAbout userName={userName[0]}></InfoAbout>
        <InfoAbout userName={userName[1]}></InfoAbout>
        <Counter></Counter>
      </header>
    </div>
  );
}
function InfoAbout(props){
  return (
    <div style={{border: '1px solid gold', padding: '10px', margin: '5px 0'}}>
      <h1>Name: {props.userName.name}</h1>
      <p><strong>Work:</strong> {props.userName.job}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


export default App;
