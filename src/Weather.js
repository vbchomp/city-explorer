import React from 'react';
// import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWeatherData: false,
    }
  }

  // getSearchQuery = async () => {
  //   let searchQuery = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/weather?lat=${this.props.lat}&lon=${this.props.lon}&searchQuery=${this.state.cityName}`);
  //   this.setState({
  //     showWeatherData: true,
  //   })
  //   return searchQuery;
  // };

  render() {
    
    return (
      <div>
        <Container>
          {this.props.weather.map(item => {
            return <div key={item.date}>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          })}
        </Container>
      </div>
    )
  }
};

export default Weather;
