import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: 0,
      lon: 0,
      showWeatherData: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getSearchQuery = async (e) => {
    e.preventDefault();
    let searchQuery = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.city}`);
    this.setState({
      lat: searchQuery.data.lat,
      lon: searchQuery.data[0].lon,
      city: searchQuery.data[0].city,
      showWeatherData: true,
    })
  };

  render() {
    return (
      <main>
        <Container>
          <h1>City Explorer Weather</h1>
          <Form onSubmit={this.getSearchQuery}>
            <Form.Group controlId="searchQuery">
              <Form.Label id="formLabel">Select a City to See the Next Three Days Forecast</Form.Label>{' '}
              <Form.Control type="text" onChange={this.handleChange} />
            </Form.Group>
            <Button id="weatherBtn" type="submit" variant="secondary" block>Weather Forcast</Button>
          </Form>
        </Container>
      </main>
    )
  }
};

export default Weather;
