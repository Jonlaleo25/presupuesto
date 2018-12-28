import React from 'react';
import Gasto from '../Gasto/Gasto'

class Listado extends React.Component{

    render(){
        return(
            
              <div className="gastos-realizazos">
                 <h2>Listado</h2>
                 { 
                     Object.keys( this.props.gastos).map(key=>(
                        // console.log(key)
                        
                        <Gasto   key={key}
                                 gasto = {this.props.gastos[key]}/>
                  ))}
                 <Gasto />
              </div>
            
        )
    }
}

export default Listado 