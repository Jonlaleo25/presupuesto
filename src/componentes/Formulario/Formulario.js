import React from 'react'

class Formulario extends React.Component{

    // resf para los camops de los formulario 

    nombreGastoRef = React.createRef();
    cantidaGastodRef    = React.createRef(); 

    crearGasto = (e) =>{

        // prevenir el default

        // crear el objeto con los datos

        // agregarlo con props this.props.

        // regresar el formulario opcional




    }

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input  ref={this.nombreGastoRef}
                           className="u-full-width" 
                           type="text" 
                           placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidaGastodRef} 
                           className="u-full-width" 
                           type="text" 
                           placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}
export default Formulario;