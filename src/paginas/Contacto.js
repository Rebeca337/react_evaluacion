import Formulario from '../componentes/Formulario.js'

function Contacto() {
    return(
        <div>
            <Formulario/>
            <iframe
              src="https://maps.google.com/maps?q=Embarcacion,Salta&output=embed"
              width="400"
              height="300"
              title="mapa"
            ></iframe>  
        </div>
    )
}

export default Contacto