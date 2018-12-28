import React from 'react'
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends React.Component{

    render(){

        const {presupuesto, restante} =  this.props
       
        

        return(
           <React.Fragment>
             <Presupuesto 
              presupuesto =  {presupuesto}
             />
             <Restante 
            //    restante={this.props.restante}
              presupuesto =  {presupuesto}
              restante = {restante}
             />
           </React.Fragment>
        )
    }
}

export default ControlPresupuesto;