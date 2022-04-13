import React from 'react'
import styles from '../styles/Evento.module.css'
import {formatearFecha} from '../helpers'

const Evento = ({ evento }) => {

    const {titulo, contenido, imagen, fecha} = evento
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h4>{formatearFecha(fecha)}</h4>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>

            <style jsx>{
                `
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.65), rgb( 255 255 255 / .35)), url(${imagen.url});
                    background-size: cover;
                    background-position: 50%;
                }
                `
            } </style>
        </section>
    )
}

export default Evento