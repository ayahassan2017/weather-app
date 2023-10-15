import React ,{Component} from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "8c22296316ae0db2f72d23fdc1484c88";


class App extends Component {

  state ={
    temperature : "",
    city : "",
    country : "",
    humidity : "",
    description : "",
    error : ""
  }

  getWeather = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data);
    if (city && country){
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ""
      })
    } else {
      this.setState({
        temperature : "",
        city : "",
        country : "",
        humidity : "",
        description : "",
        error : "please enter city and country"
      })
    }

  
  } 

  render() {
    return(
      <div className='wrapper'>
        <div className='container'>
       <Form getWeather={this.getWeather} />
       <Weather
       temperature = {this.state.temperature}
       city = {this.state.city}
       country = {this.state.country}
       humidity = {this.state.humidity}
       description = {this.state.description}
       error = {this.state.error}
       />
       </div>
      </div>
    )
  }
}
export default App;