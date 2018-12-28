import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
 import Listado from './Listado/Listado';

class App extends Component {

  // Se crea el state
  state = {
    presupuesto: '',
    restante: '',
    gastos:{}
  }

  // agregar uel metodo de agrrgar nuevo gasto
  agregarGasto = gasto => {
    console.log("Recibe por parte del padre ", gasto)
    // tomar una copia del state actual 
    // this is spread operator
    // lo que hace es hacer una copia del state y lo almacena en gastos
    const gastos = {...this.state.gastos};
    console.log('Se agrego el gasto' , gasto);
    
    console.log(gastos);
    
    // agrega el gasto  al objeto 
      gastos[`gasto${Date.now()}`] = gasto

      console.log("Gasto al objeto : ", gastos);
      
    // poner el state

    this.setState({
      gastos
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
               <div className="one-half column">
                 <Formulario
                    agregarGasto = {this.agregarGasto} 
                  />
               </div>
               <div className="one-half column">
                  <Listado 

                    gastos = {this.state.gastos}
                  />
               </div>
             </div>
          </div>
        </div>
    );
  }
}

export default App;
