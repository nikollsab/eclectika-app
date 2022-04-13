import Joya from "./Joya"
import styles from '../styles/Listado.module.css'

const Listado = ({joyas}) => {
  return (
    <div className={styles.listado}>
        {
            joyas.map( joya => (
                <Joya key={joya.url} 
                joya={joya}/>
            ))
        }
    </div>
  )
}

export default Listado