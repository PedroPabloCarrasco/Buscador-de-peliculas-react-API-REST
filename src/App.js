import React, {Component} from 'react';

class App extends Component {

  state = {
    movie: {},
    isFetching: false
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState( {isFetching: true})

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4d5298cf'
    fetch(url + '&t=' + title)
    .then(res => res.json())
    .then(movie => this.setState({movie, isFetching: false}))

  }

  render() {
    const {movie, isFetching } = this.state
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
        { movie.Title && !isFetching }


        <div>
          <h1>{this.state.movie.Title}</h1>
          <p>{this.state.movie.Plot}</p>
          <img 
          src={movie.Poster} 
          alt='Poster'
          style={{
            width: '150px'
          }}
          />
        </div>
      </div>
    );
  }
}

export default App;
