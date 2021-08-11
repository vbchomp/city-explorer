import React from 'react';
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMovieData: false,
    }
  }

  render() {

    return (
      <div>
        <Container>
            {this.props.movies.map(movie => {
              return <div key={movie.title}>
                <p>{movie.title}</p>
                {/* <p>{movie.src}</p> */}
                <img 
                src={movie.src} 
                alt={this.state.city} 
              />
              </div>
            })}
        </Container>
      </div>
    )
  }
};

export default Movies;
