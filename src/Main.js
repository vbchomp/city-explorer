import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      showLatLong: false,
      showMap: false,
      cityName: 0,
      lat: 0,
      lon: 0,
    }
  }

  handleChange = (e) => {
    this.setState({city: e.target.value})
  }  

  findCity = async (e) => {
    e.preventDefault();
    let cityInfo = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
    this.setState({
      showLatLong: true,
      cityName: cityInfo.data[0].display_name,
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
    })
  }

  render() {
    return (
      <main>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Select a City Name</Form.Label>
              <Form.Control onChange={this.handleChange}>
              </Form.Control>
              <Button onClick={this.findCity}>Explore!</Button>
            </Form.Group>
          </Form>
          {this.state.showLatLong ? <h3>City Name: {this.state.display_name}, Latitude: {this.state.lat}, Longitude: {this.state.lon}</h3> : ''}
        </Container>
      </main>
    )
  }
}

export default Main;
