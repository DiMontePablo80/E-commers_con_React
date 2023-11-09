import { useState } from "react";
import "./interruptor.css";

const Interruptor = () => {

    let [prende,setprende]= useState(false)
    
    function cambiarEstado(){
        setprende(!prende)
    }

    return (
        <div className={`${prende ? "encendido" : "apagado"}`}>
            <button onClick={cambiarEstado}>prende/apaga</button>
            
        </div>
    );
};

export default Interruptor;