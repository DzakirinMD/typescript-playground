import React from 'react';
import logo from './logo.svg';
import './App.css';

// import module
import { Vector2, Vector3 } from './modules/Vectors';
import { StringArray } from './modules/StringArray'

function App() {
  
  // Hello World
  var message = 'Hello World';
  console.log(message);

  // Variable Assignment
    // Implicit Type
  var ball = 'soccer';
  var num = 4 ;
    // Explict Type
  var num2: number = 10;

  function addTogether(a:number, b:number){
    var result = a + 2;
    var resultString = 'The sum of the result is : ' + result;

    console.log(resultString);
  }

  addTogether(num2,num);

  // Using imported modules:
  const vec2a = new Vector2(1, 2);
  const vec2b = new Vector2(2, 1);

  console.log('Output from Vector 2 is : ');
  console.log(vec2a.add(vec2b));

  const vec3a = new Vector3(1, 2, 3);
  const vec3b = new Vector3(3, 2, 1);

  console.log('Output from Vector 3 is : ');
  console.log(vec3a.add(vec3b));

  console.log('Calling StringArray module below ');
  const arrayOfString = new StringArray();
  console.log(arrayOfString.stringArrayFunction());
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Open developer tools(Press F12) to see the output. </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
