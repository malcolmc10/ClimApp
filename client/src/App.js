import React from 'react';
import "./App.css";
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


// This is the API Key
const API_KEY = "301e0540a08ce911fce61d66e1e610f5";



class App extends React.Component {

  state = {

    icon: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined

  }


    // This is the API call to openweathermap API
  getWeather = async (e) => {

    // prevents an auto refresh when the onSubmit is initiated. e signifys single page applications.

    e.preventDefault();

    // The 2 const below are mapping/sifting through the api to find the information that we need for the form.

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    // The values above are then used within the API call to allow the user to select the city and country of their choice.

    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
  
    const data = await api_call.json();
  
    console.log(data);

    // Below I have set the state by mapping through the api to select specific pieces of data to be rendered on the application.

    this.setState({

      temperature: data.main.temp,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      city: data.name,
      country: data.sys.country,
      error: ""
      
    });

  };

  render() {
    return (
      <div>
      
        <Title />
        <Form getWeather={this.getWeather}/>

        {/* below we are passing the state into the Weather component to allow us to use the data in the component */}
        <Weather 
        temperature={this.state.temperature}
        icon={this.state.icon}
        description={this.state.description}
        humidity={this.state.humidity}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        feels_like={this.state.feels_like}
        city={this.state.city}
        country={this.state.country}
        error={this.state.error}


        
        
        
        
        
        
        />
        
      </div>
    );
  }
}

export default App