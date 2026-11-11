import{useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
    const form=useRef();
    const [estado,setEstado]= useState('')

    const sendEmail=(e) => {
        e.preventDefault();
        setEstado('enviando')

        emailjs
        .sendForm('','', form.current,{
         publicKey: '',   
        })

        .then(
            () =>{
             console.log('SUCCES!');
             setEstado('ok');
             form.current.reset();   
            },
            (error) => {
              console.log('FAILED', error.text);
              setEstado('error');  
            },
        );
    };

return(
    <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="nombre"/>
        <label>Email</label>
        <input type="email" name="email"/>
        <label>Mensaje</label>
        <textarea name="mensaje"/>
        <button type="submit" className="boton" disabled={estado==='enviando'}>
            {estado==='enviando' ? 'Enviando...': 'Enviar'}
        </button>
        {estado==='ok' && <p className="exito"> Gracias! Recibimos tu mensaje.</p>}
        {estado==='error' && <p className="error">Hubo un error al enviar el mensaje, probá de nuevo.</p>}
    </form>
);

}

export default Formulario