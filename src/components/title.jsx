import React, {useContext} from "react";
import { FormContext } from "../contexts/formContext";

const Hello = () => {
    const {name, email, adress, number} = useContext(FormContext)
    return  <h2>Informações: <br></br>Nome: {name} <br></br> E-mail: {email}<br></br>Endereço: {adress} <br></br> Telefone: {number} </h2>
}

export default Hello;