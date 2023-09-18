
import React, {useState, useContext} from "react";
import { FormContext } from "../contexts/formContext";


const Forms = () => {
    const {submit} = useContext(FormContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("informações", ( name, email ))
        submit({ name, email, adress, number })
    }

    return(
        <form className="app" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="adress">Endereço</label>
            <input type="text" name="adress" id="adress" value={adress} 
            onChange={(e) => setAdress(e.target.value)}/>

            <label htmlFor="phone">Telefone</label>
            <input type="number" name="phone" id="phone" value={number} 
            onChange={(e) => setNumber(e.target.value)}/>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit">Enviar</button>
        </form>

    )
}

export default Forms
