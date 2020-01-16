import React, { Component } from "react";
import Buscador from "./Componentes/Buscador";
import Resultado from "./Componentes/Resultado";


class App extends Component {
  state = {
    termino: "",
    imagenes: []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=9484547-0f13969504c499d8ba85c993e&q=${termino}&per_page=52`
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
    console.log(url)
  }
  

  datosBusqueda = (termino) => {
    console.log(termino);

    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }



  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row">
          <Resultado imagenes={this.state.imagenes}/>

        </div>
      </div>
    );
  }
}

export default App;
