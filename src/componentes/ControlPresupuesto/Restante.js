import React from 'react'
import {revisarPresupuesto} from '../../helper';

class Restante extends React.Component{

    render(){
      // se crean dos variables 
        const presupuesto = this.props.presupuesto;
        const restante    = this.props.restante;

        return(
            <div className={revisarPresupuesto(presupuesto,restante)}>
            Restante $ {this.props.restante} 
            </div>
        )
    }
}

export default Restante;