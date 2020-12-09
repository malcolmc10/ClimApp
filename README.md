# Overview
# ClimApp
This is a react application that uses the OpenWeatherMap API to draw weather data for specifc cities and countries. 

## Deployed Site:
http://climappweather.surge.sh/


# MVP

1. Create an application that allows the user to use this tool on desktop. 
2. Create a Ui that is appealing, easy to read and navigate.
3. HAve clear navigation to the creators professional channels.
4. Create a search functionality using an API call.
5. Utilize Bootstrap and CSS commands to create the look of the application
 



# Libraries and Dependencies
```
// React.js
// Bootstrap




 
```
 


# Post-MVP
```
Add leaflet to show percipitation numbers internationally.
Have the search function connect to the leaflet map to have the city selected show on the map.
Add a 5 day weather forcast. (requires another API call)
Add another API call that shows current weather news for that specific area. 
```
# Code Showcase

  
  getWeather = async (e) => {

    

    e.preventDefault();

    

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();

    if (city && country) {

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

    } else {
      this.setState({

        temperature: undefined,
        icon: undefined,
        humidity: undefined,
        temp_min: undefined,
        temp_max: undefined,
        feels_like: undefined,
        description: undefined,
        city: undefined,
        country: undefined,
        error: "Please enter the values"

      });

    }

  };

# Code Issues & Resolutions
Had some trouble getting the card to show properly.


