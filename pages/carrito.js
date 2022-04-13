import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import ListadoPedido from "../components/ListadoPedido"

import styles from "../styles/Carrito.module.css"

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])


    return (
        <Layout pagina={'Carrito de Compras'}>
            <h1 className="heading">Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Artículos</h2>
                    {carrito.length === 0 ? 'Carrito Vacío' : (
                     <ListadoPedido  
                       productosCarrito={carrito} 
                       actualizarCantidad={actualizarCantidad}
                       eliminarProducto={eliminarProducto}/>
                    )}
                </div>
                <div className={styles.resumen}>

                    {total > 0 ? (
                        <>
                            <h3>Resumen del Pedido</h3>
                            <p>Resumen del Pedido</p>
                            <p>Total a Pagar: S/. {total}</p>
                        </>
                    ) : <p>No hay productos</p>

                    }
                </div>
            </main>
        </Layout>
    )
}

export default Carrito