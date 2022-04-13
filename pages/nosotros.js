import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
    return (

        <Layout pagina='Nosotros' >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>

                    <Image layout="responsive" width={600}  height={450}  src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />
                    <div>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu facilisis magna. Praesent eu ligula dignissim, sollicitudin turpis at, varius ante. Sed lacinia sodales velit, a fermentum justo tincidunt pulvinar. Donec nec commodo arcu, quis fringilla mauris. Pellentesque nec aliquam lacus. Cras ex justo, tempus sit amet magna sed, malesuada faucibus tellus. Vestibulum gravida convallis nisl. Praesent semper fringilla erat, nec venenatis sem mollis nec. Nulla ultricies est in finibus mattis. Etiam pharetra mi magna, et volutpat dui auctor id. Vivamus pellentesque scelerisque ante.
                        </p>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu facilisis magna. Praesent eu ligula dignissim, sollicitudin turpis at, varius ante. Sed lacinia sodales velit, a fermentum justo tincidunt pulvinar. Donec nec commodo arcu, quis fringilla mauris. Pellentesque nec aliquam lacus. Cras ex justo, tempus sit amet magna sed, malesuada faucibus tellus. Vestibulum gravida convallis nisl. Praesent semper fringilla erat, nec venenatis sem mollis nec. Nulla ultricies est in finibus mattis. Etiam pharetra mi magna, et volutpat dui auctor id. Vivamus pellentesque scelerisque ante.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}