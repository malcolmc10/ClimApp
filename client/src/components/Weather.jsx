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
            <div>

                {/* The code below is the rendering of the props on the page. I made these conditionals so that they would only render if certain conditions were met. */}
                
                {this.props.city && this.props.country &&  <p>{ this.props.city }, { this.props.country }</p>}
                
                {this.props.temperature && <p>Temperature:&nbsp;{ this.props.temperature }</p>}

                {this.props.temp_max && this.props.temp_min && <p>High:&nbsp;{ this.props.temp_max }&nbsp;Low:&nbsp;{ this.props.temp_min }</p>}
                
                {this.props.temp_min && <p>L:&nbsp;{ this.props.temp_min }</p>}
                
                {this.props.description && <p>Conditions:&nbsp;{ this.props.description }</p>}
                
                {this.props.humidity && <p>Humidity:&nbsp;{ this.props.humidity }</p>}
                
                {this.props.feels_like && <p>Feels Like:&nbsp;{ this.props.feels_like }</p>} 
                
                {this.props.error && <p>{this.props.error}</p>}
                
                
            </div>
        );
    }
}

export default Weather;


