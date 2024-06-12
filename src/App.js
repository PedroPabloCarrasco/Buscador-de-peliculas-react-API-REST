import React, {Component} from 'react';

class App extends Component {

  state = {
    movie: {}
  }

  render() {
    return (
      <div>
        <h1>
          Ejemplo Http buscador de peliculas
        </h1>
        <form>
          <input 
            type='text'
            placeholder='Nombre de la pelicula'
            />

            <button>
              Buscar
            </button>
        </form>
      </div>
    );
  }
}

export default App;
