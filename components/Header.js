
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router"


const Header = ({producto}) => {
  

  const router = useRouter();
  return (
    <header className={styles.header}>

      <div className="contenedor">
        <div className={styles.barra}>
          <Link href='/'>
            <a>
            <Image width={200} height={100} src='/img/logo.svg' alt="Imagen de logo" />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito' >
              <div className={styles.navegacion_imagen}>
              <a >
                <Image  layout='fixed' width={30} height={25} src="/img/carrito.png" alt="Imagen carrito"/>
              </a>
              </div>
            </Link>
          </nav>
        </div>

        { producto && (
          <div className={styles.modelo}>
            <h2> {producto.nombre} </h2>
            <p className={styles.precio}> S/. {producto.precio} </p>
            <Link href={`/joyas/${producto.url}`}>
              <a className={styles.enlace}>
                Ver Producto
              </a>
            </Link>
          </div>
        )}


      </div>

      {
        router.pathname === '/' && (
          <div className={styles.joya} >
             <Image layout="fixed" 
              width={700}
              height={700}
              src="/img/header_joyero.png"/>
          </div>
        )
      }

    </header>
  )
}

export default Header