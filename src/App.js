import React from 'react';
import './App'
import Forecast from './Components/Forecast';

function App() {
  const styling = {
    color: "honeydew",
    textAlign: "center",
    fontFamily: "Times New Roman, Times, serif",
    marginBottom: "5%"
  }
  const footerStyling = {
    color:"honeydew",
    textAlign: "end",
    position: "fixed",
    bottom: "2%",
    right: "3%",
    border: "hidden",
    backgroundColor: "light",
    padding: "1%",
    fontFamily: "Times New Roman, Times, serif"
  }
  let newDate = new Date();
  let copyDate = newDate.getFullYear();


  return (
    <>
    <h1 style={styling}>Current Weather App</h1>
    <Forecast />
    <footer style={footerStyling}><span>{'\u00a9'}Copyright {copyDate} | Tinashe Muchineripi</span><br />
    <span>All rights reserved.</span></footer>
    </>     
  );
}

export default App;
