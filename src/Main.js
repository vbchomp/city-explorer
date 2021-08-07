import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import Weather from './Weather.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      showLatLong: false,
      showMap: false,
      cityName: '',
      lat: 0,
      lon: 0,
      weather: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleErrors = (error) => {
    let errMsg = 'You might have misspelled a city name. Please try again.';
    if (error) {
      return errMsg;
    }
  }

  findCity = async (e) => {
    e.preventDefault();
    // console.log('I am here');
    try {
      let cityInfo = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      console.log(cityInfo.data[0]);
      let searchQuery = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/weather?lat=${cityInfo.data[0].lat}&lon=${cityInfo.data[0].lon}&searchQuery=${this.state.city}`);
      console.log(searchQuery);
      this.setState({
        showLatLong: true,
        cityName: cityInfo.data[0].display_name,
        lat: cityInfo.data[0].lat,
        lon: cityInfo.data[0].lon,
        showMap: true,
        weather: searchQuery.data,
      })
    }
    catch (error) {
      this.handleErrors();
    }
  }

  render() {
    // console.log(this.state);
    return (
      <main>
        <Container>
          <Form onSubmit={this.findCity}>
            <Form.Group controlId="cityName">
              <Form.Label id="formLabel">Select a City To See the Next 3 Days of Weather and a Map</Form.Label>{' '}
              <Form.Control id="formControl" type="text" onChange={this.handleChange} />
            </Form.Group>
            <Button id="exploreBtn" type="submit" variant="secondary" block>Explore!</Button>
          </Form>
          {this.state.showLatLong ? <Jumbotron id="showLatLong">
            <h1>{this.state.cityName}</h1>
            <h3>Latitude: {this.state.lat}, Longitude: {this.state.lon}</h3>
          </Jumbotron> : ''}
          <Weather
            weather={this.state.weather}
          />
          {this.state.showMap ? <Jumbotron id="showMap" fluid>
            <Container>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`} alt={this.state.city} />
            </Container>
          </Jumbotron> : ''}
        </Container>
      </main>
    )
  }
}

export default Main;
