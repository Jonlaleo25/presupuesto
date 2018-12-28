import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
import Listado from './Listado/Listado';
import ControlPresupuesto from './ControlPresupuesto/ControlPresuuesto';
import {validarPresupuesto} from '../helper';


class App extends Component {

  // Se crea el state
  state = {
    presupuesto: '',
    restante: '',
    gastos:{}
  }

  componentDidMount(){

   this.obtenerPresupuesto();
    
  }

  obtenerPresupuesto = () =>{

    let presupuesto = prompt('Cual es el presupuesto ? ');

    let resultado = validarPresupuesto(presupuesto);

    if(resultado ){
      //console.log('Valido');
      this.setState({
        presupuesto: presupuesto,
        restante : presupuesto
      })
      
    }else{
      this.obtenerPresupuesto();
      
    }

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


      // restar presupuesto 
      console.log(gasto);
      this.restarPresupuesto(gasto.cantidadGasto)
      
    // poner el state

    this.setState({
      gastos:gastos
    })

  }

  // restar del presupuesto cuando un gasto se crea 
  restarPresupuesto = cantidad =>{
    // leer el gasto 

    console.log('El gasto agregado ' + cantidad);
   // convirtes string a valor numerico
    let restar = Number(cantidad);

    // tomar una copia del state
    let restante  = this.state.restante;

     // lo restamos 
      restante-= restar 
       console.log("restante : ", restante);
      

    //agregamos el nuevo state
       this.setState({
         restante
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
                  <ControlPresupuesto 

                    presupuesto = {this.state.presupuesto}
                    restante    = {this.state.restante}
                  
                  />
               </div>
             </div>
          </div>
        </div>
    );
  }
}

export default App;
