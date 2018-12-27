import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos:{}
  }

  // agregar uel metodo de agrrgar nuevo gasto
  agregarGasto = gasto => {
    // tomar una copia del state actual 
    const gastos =  {...this.state.gastos}

    

    // agrega el gasto  al objeto 

    gastos[`gasto${Date.now()}`] = gasto

    //console.log(gastos);
    

    // poner el state

    this.setState({
      gastos:gastos
    })
  }

  render() {
    return (
        <div className="App container">
          <Header 
             titulo = 'Gasto Semanal'
          />
          <div className="contenido-principal contenido">
             <div className="row">
               <div className="one-alf column">
                  <Formulario
                         agregarGasto = {this.agregarGasto} 
                     />
               </div>
               <div className="one-alf column">

               </div>
             </div>
          </div>
        </div>
    );
  }
}

export default App;
