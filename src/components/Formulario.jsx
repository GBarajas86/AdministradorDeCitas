import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({crearCita}) => {
    
    const [cita, setCita] = React.useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = React.useState(false)

    const actualizarState = e => {
        setCita({
           ...cita,
           [e.target.name]: e.target.value 
        })
    }
    
    const {mascota, propietario, fecha, hora, sintomas} = cita


    const submitCita = e => {
        e.preventDefault()
        // Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return
        }

        setError(false)
        // Asignar un ID
        cita.id = uuidv4()
        console.log(cita)
        // crear cita
        crearCita(cita)
        //Reiniciar el formulario
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {
                error
                    ? <p className="alerta-error">
                        Todos los Campos son Obligatorios
                    </p>
                    : null
            }

            <form 
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
