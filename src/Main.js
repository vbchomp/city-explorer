import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
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
    }
  }

  handleChange = (e) => {
    this.setState({ 
      city: e.target.value })
  }

  findCity = async (e) => {
    e.preventDefault();
    // console.log('I am here');
    try {
      let cityInfo = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      // console.log(cityInfo.data[0]);
      this.setState({
        showLatLong: true,
        cityName: cityInfo.data[0].display_name,
        lat: cityInfo.data[0].lat,
        lon: cityInfo.data[0].lon,
        showMap: true,
      })
    }
    catch (error) {
      console.log('404', error.message);
    }
  }

    render() {
      // console.log(this.state);
      return (
        <main>
          <Container>
            <Form onSubmit={this.findCity}>
              <Form.Group controlId="cityName">
                <Form.Label id="formLabel">Select a City Name</Form.Label>{' '}
                <Form.Control type="text" onChange={this.handleChange} />
              </Form.Group>
              <Button id="exploreBtn" type="submit" variant="secondary" block>Explore!</Button>
            </Form>
            {/* {this.state.showLatLong ? <h3>City Name: {this.state.cityName}, Latitude: {this.state.lat}, Longitude: {this.state.lon}</h3> : ''} */}
            {this.state.showLatLong ? <Jumbotron id="showLatLong">
              <h1>City Name: {this.state.cityName}</h1>
              <h3>Latitude: {this.state.lat}</h3>
              <h3>Longitude: {this.state.lon}</h3>
            </Jumbotron> : ''}
            {/* {this.state.showMap ? <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`} alt={this.state.cityName}/> : ''} */}
            {this.state.showMap ? <Jumbotron id="showMap" fluid>
              <Container>
                {/* <h1>{this.state.cityName}</h1> */}
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`} alt={this.state.cityName}/>
              </Container>
            </Jumbotron> : ''}
          </Container>
        </main>
      )
    }
  }

  export default Main;
