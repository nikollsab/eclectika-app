import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({joyas}) => {

    return (

        <Layout pagina='Tienda Virtual' >
           <main className='contenedor'>
               <h1 className='heading'> Nuestra Colección</h1>
               <Listado joyas={joyas} />
           </main>
        </Layout>
    )
}

export async function getServerSideProps(){
    const url = `${process.env.API_URL}/joyas`
    const respuesta = await fetch(url)
    const joyas = await respuesta.json()

    return {
        props: {
            joyas
        }
    }

}

export default Tienda;