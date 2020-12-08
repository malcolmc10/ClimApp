import React from 'react';
import "./App.css";
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


// This is the API Key
const API_KEY = "301e0540a08ce911fce61d66e1e610f5";



class App extends React.Component {


    // This is the API call to openweathermap API
  getWeather = async (e) => {

    // prevents an auto refresh when the onSubmit is initiated.

    e.preventDefault();

    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=imperial`);
  
    const data = await api_call.json();
  
    console.log(data);

  };

  render() {
    return (
      <div>
      
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
        
      </div>
    );
  }
}

export default App