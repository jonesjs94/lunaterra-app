import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Casilla(props) {
  const valor = props.value;
  return (
    <li>
      <input id={valor} name={valor} type={props.type}/>
      <label for={valor}>{valor}</label>
    </li>
  )
}


function Tipo(props) {
  const tipos = props.tipos.map(tipo => 
    <Casilla 
      key={tipo} 
      value={tipo} 
      type="radio" 
    />
  )
  return (
      <ul>
          <h2>Tipo</h2>
          {tipos}
      </ul>
  )
}


function Region(props) {
  const regiones = props.regiones.map(ele => 
      <Casilla key={ele} value={ele} type="checkbox"/>
    )
  return (
    <ul>
      <h2>Region</h2>
      {regiones}
    </ul>
  )
}


class Tablero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        regiones: ["Demacia", "Freljord", "Jonia", "Noxus", "Piltover y Zaun", "Islas de la Sombra"],
        tipos: ["Unidad", "Hechizo"],
        rareza: ["Común", "Rara", "Épica", "Campeón"],
        coste: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  render() {
      return (
          <div>
            <Region regiones={this.state.regiones} />
            <Tipo tipos={this.state.tipos} />
          </div>
      )
  }
}   


// ==================================
ReactDOM.render(
  <Tablero />,
  document.getElementById('root')
)