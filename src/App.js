import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    movie: {},
    isFetching: false
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isFetching: true });

    const title = event.target[0].value;
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4d5298cf';

    try {
      const response = await axios.get(url, {
        params: {
          t: title
        }
      });
      this.setState({ movie: response.data, isFetching: false });
    } catch (error) {
      console.error('Error fetching the movie data:', error);
      this.setState({ isFetching: false });
    }
  }

  render() {
    const { movie, isFetching } = this.state;
    return (
      <div>
        <h1>
          Ejemplo Http buscador de peliculas
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Nombre de la pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        { isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <img 
              src={movie.Poster} 
              alt='Poster'
              style={{
                width: '150px'
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
