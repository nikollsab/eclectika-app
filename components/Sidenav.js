import { useState, useEffect } from 'react'

import Link from 'next/link'

import styles from '../styles/Sidenav.module.css'
import ListadoPedido from './ListadoPedido'

const Sidenav = ({ setMostrarSidenav , productosCarrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = productosCarrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [productosCarrito])

    return (
        <div className={styles.sidenav}>
            <h3>Su pedido</h3>
            <h2>Subtotal S/. {total}</h2>

            <div className={styles.productos_scroller}>
            <ListadoPedido  
                            productosCarrito={productosCarrito} 
                            actualizarCantidad={actualizarCantidad}
                            eliminarProducto={eliminarProducto}/>
            </div>
          
            <div className={styles.botones}>
                <Link href={`/carrito`}>
                    <a className={styles.enlace}> Ir al Carrito </a>
                </Link>
                <button type="button" onClick={() => setMostrarSidenav(false)}> Continuar comprando</button>
            </div>

            <button type="button" className={styles.eliminar}
                        onClick={() => {
                            setMostrarSidenav(false)
                        }}>
                        X
                    </button>

        </div>
    )
}

export default Sidenav