import Image from 'next/image'
import styles from "../styles/Carrito.module.css"

const ListadoPedido = ({ productosCarrito, actualizarCantidad, eliminarProducto }) => {


    const handleDisminuirCantidad = (cantidad, id) => {
        if (cantidad > 0) {
            actualizarCantidad({
                cantidad: cantidad - 1,
                id: id
            })
        }

    }
    const handleAumentarCantidad = (cantidad, id) => {

        actualizarCantidad({
            cantidad: cantidad + 1,
            id: id
        })
    }

    return (
        productosCarrito.map(producto => (
            <div key={producto._id} className={styles.producto}>
                <div>
                    <Image layout="responsive" width={250} height={250}
                        src={producto.imagen} alt={producto.nombre} />
                </div>
                <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                        <p>
                            Cantidad:
                        </p>
                        <div className={styles.cantidad_botones}>
                            <button onClick={() => { handleDisminuirCantidad(producto.cantidad, producto._id) }}>-</button>
                            <p className={styles.cantidad_label}>{producto.cantidad}</p>
                            <button onClick={() => { handleAumentarCantidad(producto.cantidad, producto._id) }}>+</button>
                        </div>

                    </div>

                    <button type="button" className={styles.eliminar}
                        onClick={() => {
                            eliminarProducto(producto._id)
                        }}>
                        Quitar
                    </button>

                    <p className={styles.precio}>S/. <span>{producto.precio}</span></p>
                    <p className={styles.subtotal}>
                        Subtotal: S/. <span>{producto.precio * producto.cantidad}</span>
                    </p>

                </div>



            </div>
        ))
    )
}

export default ListadoPedido