import React from 'react';
import logo from './logo.svg';
import './App.css';

// import module
import { Vector2, Vector3 } from './modules/Vectors';
import { StringArray } from './modules/StringArray'
import { ArrowFunctionAndClass } from './modules/ArrowFunctionAndClass';
import { Boot, Shoe } from './modules/InheritanceClass';
import { Cuboid } from './modules/ImplementAndInterface';

function App() {
  
  // Hello World
  var message = 'Hello World';
  console.log(message);

  // Variable Assignment
    // Implicit Type
  var ball = 'soccer';
  var num = 5 ;
    // Explict Type
  var num2: number = 10;

  function addTogether(paramA: number, paramB: number, paramC?: number){
    // paramC is optional parameter. it have the '?' symbol. to check if paramC is null we use 'undefined'
    var result;
    if (paramC !== undefined){
      result = paramA + paramB + paramC;
    } else {
      result = paramA + paramB;
    }
    
    var resultString = 'The sum of the result is : ' + result;

    console.log(resultString);
  }

  addTogether(num2,num,5);

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

  // var cuboid =  new ArrowFunction(5,5,5);
  console.log('The output of normalFunction() is : ' + new ArrowFunctionAndClass(5,5,5).normalFunction());
  console.log('The output of ArrowFunction() is : ' + new ArrowFunctionAndClass(5,5,5).volume());

  console.log('The output of Shoe() is : ' + new Shoe('Shoesss',5,true).displayInfoShoe());
  console.log('The output of Boot() is : ' + new Boot('Boots',10,false,true).displayInfoBoot());
  console.log('The output of Cuboid().volume() is : ' + new Cuboid(10,10,10).volume());
  console.log('The output of Cuboid().area() is : ' + new Cuboid(10,10,10).area());
  
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
