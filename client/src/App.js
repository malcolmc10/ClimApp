import React from 'react';
import "./App.css";
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


// This is the API call and the API Key
const API_KEY = "301e0540a08ce911fce61d66e1e610f5";

getWeather = async () => {
  const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=imperial`);



};

class App extends React.Component {
  render() {
    return (
      <div>
      
        <Title />
        <Form />
        <Weather />
        
      </div>
    );
  }
}

export default App