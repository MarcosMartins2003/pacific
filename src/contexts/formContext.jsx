import { useState, createContext } from "react";

export const FormContext = createContext();

export const  FormProvider =({children}) =>{

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [adress, setAdress] = useState()
    const [number, setNumber] = useState()
  
    const handleSubmit = ({name, email, adress, number}) => {
      
      setName(name)
      setEmail(email)
      setAdress(adress)
      setNumber(number)
    }

    return (
        <FormContext.Provider value={{adress, number, name,email, submit: handleSubmit }}>
            {children}
        </FormContext.Provider>
    )
}