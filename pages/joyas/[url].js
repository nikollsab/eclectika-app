import { useState } from 'react'

import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Joya.module.css'
import Sidenav from '../../components/Sidenav'

const Producto = ({ joya, agregarCarrito , carrito, actualizarCantidad, eliminarProducto}) => {
    const [cantidad, setCantidad] = useState(1);
    const [mostrarSidenav, setMostrarSidenav] = useState(false);

    const { descripcion, imagen, nombre, precio, id } = joya[0]
    const handleSubmit = e => {
        e.preventDefault();

        if (cantidad < 1) {
            alert('Cantidad no válida');
            setCantidad(0);
        }

        //Agregarlo al carrito
        const joyaSeleccionada = {
            id,
            imagen: imagen[0].url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(joyaSeleccionada)
        setMostrarSidenav(true);
    }


    return (
        <Layout
            pagina={`Joya ${nombre}`}
        >
            <div className={styles.joya}>
                <Image layout='responsive'
                    width={700}
                    height={700}
                    src={imagen[0].url}
                    alt={`Imagen Joya ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.precio} >S/. {precio}</p>
                    <p className={styles.descripcion}>{descripcion}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad: </label>
                        <div className={styles.cantidad_botones}>
                            <button type='button' onClick={() => { setCantidad(cantidad - 1) }}>-</button>
                            <p className={styles.cantidad_label}>{cantidad}</p>
                            <button type='button' onClick={() => { setCantidad(cantidad + 1) }}>+</button>
                        </div>

                        <input
                            type='submit'
                            value='Añadir al carrito'

                        />
                    </form>
                </div>
            </div>

            {
                mostrarSidenav && (
                    <aside>
                        <Sidenav 
                            setMostrarSidenav={setMostrarSidenav} 
                            productosCarrito={carrito} 
                            actualizarCantidad={actualizarCantidad}
                            eliminarProducto={eliminarProducto}/>
                    </aside>
                )
            }


        </Layout>
    )
}

export async function getServerSideProps({ params: { url } }) {

    const urlJoya = `${process.env.API_URL}/joyas?url=${url}`
    const respuesta = await fetch(urlJoya)
    const joya = await respuesta.json()

    return {
        props: {
            joya
        }
    }

}

export default Producto