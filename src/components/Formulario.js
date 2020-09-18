import React from 'react'; 

const Formulario = () => {
    return (  
        <form>
            <div className="input-field col s12">
            <label htmlFor="ciudad">Ciudad: </label>
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />                
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                >
                    <option value="">-- Seleccione un pais --</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
        </form>
    );
}
 
export default Formulario;