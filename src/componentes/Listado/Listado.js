import React, {Component} from 'react';
import Gasto from '../Gasto/Gasto';

class Listado extends Component{

    render(){
        return(
           <div className="gastos-realizados">
             <h2>Listado</h2>
             {
                 console.log("Verificar el listado acululado",this.props.gastos)
             }
             {
                 Object.keys( this.props.gastos).map(key =>(
                    
                    // console.log('Key : ',key)
                    
                     <Gasto  key={key}
                            gasto = {this.props.gastos[key]}/>

                 ) ) }
           </div>
        )
    }
}

export default Listado