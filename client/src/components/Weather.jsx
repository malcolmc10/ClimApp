import React from 'react'

    // const Weather = (props) => {
    //     return (
    //             <div>
                    
    //                 {props.city && props.country &&  <p>{ props.city }, { props.country }</p>}
                    
    //                 {props.temperature && <p>Temperature: &nbsp;{ props.temperature }</p>}
    
    //                 {props.temp_max && this.props.temp_min && <p>High:&nbsp;{ props.temp_max }&nbsp;Low:&nbsp;{ props.temp_min }</p>}
                    
    //                 {props.temp_min && <p>L:&nbsp;{ props.temp_min }</p>}
                    
    //                 {props.description && <p>Conditions:&nbsp;{ props.description }</p>}
                    
    //                 {props.humidity && <p>Humidity:&nbsp;{ props.humidity }</p>}
                    
    //                 {props.feels_like && <p>Feels Like:&nbsp;{ props.feels_like }</p>} 
                    
    //                 {props.error && <p>{props.error}</p>}
                    
                    
    //             </div>
    //             );
    // };

    


class Weather extends React.Component {
    render() {
        return(
            <div className="weather__info">

                {/* The code below is the rendering of the props on the page. I made these conditionals so that they would only render if certain conditions were met. */}
                
                <span className="weather__value">{this.props.city && this.props.country &&  <p>{ this.props.city }, { this.props.country }</p>}</span>
                
                <span className="weather__value">{this.props.temperature && <p>Temperature:&nbsp;{ this.props.temperature }</p>}</span>

                <span className="weather__value">{this.props.temp_max && this.props.temp_min && <p>High:&nbsp;{ this.props.temp_max }&nbsp;Low:&nbsp;{ this.props.temp_min }</p>}</span>
                
                <span className="weather__value">{this.props.temp_min && <p>L:&nbsp;{ this.props.temp_min }</p>}</span>
                
                <span className="weather__value">{this.props.description && <p>Conditions:&nbsp;{ this.props.description }</p>}</span>
                
                <span className="weather__value">{this.props.humidity && <p>Humidity:&nbsp;{ this.props.humidity }</p>}</span>
                
                <span className="weather__value">{this.props.feels_like && <p>Feels Like:&nbsp;{ this.props.feels_like }</p>}</span> 
                
                <span className="weather__error">{this.props.error && <p>{this.props.error}</p>}</span>
                
                
            </div>
        );
    }
}

export default Weather;


