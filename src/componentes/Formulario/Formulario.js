import React from 'react';

class Formulario extends React.Component{

    // se crear os refs para que cada campo lea los dato que el usuario este ingresando 
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto= e =>{

        //Prevenir el default 

        e.preventDefault();

        // creal el objeto con los datos 

        const gasto ={
            nombreGasto   : this.nombreGasto.current.value,
            cantidadGasto : this.cantidadGasto.current.value
        }
        console.log("Envia por parte del Hijo", gasto);
        

        // agregar u y enviar con this.props.
        
        this.props.agregarGasto(gasto);

        //resetear el formulario (opcional )
        e.currentTarget.reset();
        
    }

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>

                    <input ref={this.nombreGasto} 
                           className="u-full-width" 
                           type="text" 
                           placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>

                    <input ref={this.cantidadGasto} 
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