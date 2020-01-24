import React from 'react';
import './App.css';
import backgroundImage from './img/backgroundImage.jpeg'

function App() {
  return (
    <div className="App">

      {/*    URL To Webpage:    */}
      {/*    http://ec2-3-91-230-44.compute-1.amazonaws.com/cloud-computing-a2/could-computing-a2/build/    */}
     
      <h1>My IP address: 3.91.230.44</h1>
      <img className="body" src={backgroundImage} alt=""/>



    </div>
  );
}

export default App;
