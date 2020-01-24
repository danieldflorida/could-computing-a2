import React from 'react';
import './App.css';
import backgroundImage from './img/backgroundImage.jpeg'

function App() {
  return (
    <div className="App">

      {/* URL To Webpage: */}
      {/*  ec2-18-232-64-251.compute-1.amazonaws.com  */}
     
      <h1>My IP address: 18.232.64.251</h1>
      <img className="body" src={backgroundImage} alt=""/>



    </div>
  );
}

export default App;
