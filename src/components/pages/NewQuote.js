import React from 'react';
import Container from '../Container';
import Header from '../Header';
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";

function NewQuote(props) {
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.id="q" + Math.floor(Math.random()*90000) + 10000;
        props.onNewQuote(data);
        history.push('/quotes');
    }

    function getClass(inputName){
        if(errors[inputName]) return "invalid";
        return ""
    }
                
    return (
        <React.Fragment>
            <Header></Header>
            <Container>
                <p className="new-quote-header">Escriba una cita</p>
                <form className="new-quote-form" onSubmit={handleSubmit(onSubmit)}> 
                    <label>Autor</label>
                    {errors.author?.type === "required" && <span className="invalid-input-text">Debes poner un autor</span>}
                    <input className={`${getClass("author")}`} {...register("author", { required: true, minLength: { value: 3, message: 'El nombre debe ser de al menos 3 letras.' } })} type="text" placeholder="Escriba aquí su nombre..."></input>
                    <label>Cita</label>
                    {errors.quote?.type === "required" && <span className="invalid-input-text">Debes poner una cita</span>}
                    {errors.quote?.type === "minLength" && <span className="invalid-input-text">La cita debe ser de al menos 20 caracteres</span>}
                    <textarea className={`form-quote-text ${getClass("quote")}`} {...register("quote", { required: true, minLength: { value: 20, message: 'La cita debe tener al menos 20 caracteres' } })} type="textArea" placeholder="Escriba aquí su cita a introducir..."></textarea>
                    <button type="submit" className="addButton">Crear nueva</button>
                </form>

            </Container>
        </React.Fragment>

    );
  }

  export default NewQuote;