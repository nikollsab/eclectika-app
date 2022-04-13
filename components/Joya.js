import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Joya.module.css'

const Joya = ({ joya }) => {

    const { imagen, nombre, precio, url } = joya

    return (
        <div >
            <Image layout='responsive' 
                    width={500} 
                    height={500} 
                    src={imagen[0].url} 
                    alt={`Imagen Joya ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.precio} >S/. {precio}</p>
                <Link href={`joyas/${url}`}>
                    <a className={styles.enlace}>
                    Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Joya