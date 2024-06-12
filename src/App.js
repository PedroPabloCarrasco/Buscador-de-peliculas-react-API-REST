import React, {Component} from 'react';

class App extends Component {

  state = {
    movie: {}
  }


  handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4d5298cf'
    fetch(url + '&t=' + title)
    .then(res => res.json())
    .then(movie => this.setState({movie}))

  }

  render() {
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

        <div>
          <h1>{this.state.movie.Title}</h1>
          <p>{this.state.movie.Plot}</p>
          <img src={this.state.movie.Poster} alt='Poster'/>
        </div>
      </div>
    );
  }
}

export default App;
