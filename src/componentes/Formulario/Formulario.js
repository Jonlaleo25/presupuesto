import React from 'react'

class Formulario extends React.Component{

    // resf para los camops de los formulario 

    nombreGastoRef = React.createRef();
    cantidaGastodRef    = React.createRef(); 

    crearGasto = (e) =>{

        // prevenir el default
        e.preventDefault();

        // crear el objeto con los datos
        const gasto = {

            nombreGasto : this.nombreGastoRef.current.value,
            cantidadGasto : this.cantidaGastodRef.current.value,
        }
        console.log(gasto);
        

        // agregarlo con props this.props.

        this.props.agregarGasto(gasto);

        // regresar el formulario opcional
        e.currentTarget.reset();




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