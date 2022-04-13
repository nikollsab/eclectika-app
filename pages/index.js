import Evento from '../components/Evento'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({ joyas, evento, entradas }) {

  return (
    <Layout 
      pagina='Inicio'
      producto={joyas[3]}
      >

      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado
          joyas={joyas}
        />
      </main>

      <Evento evento={evento} />

      <section className='contenedor'>
        <ListadoBlog entradas={entradas} />
      </section>


    </Layout>
  )
}

export async function getServerSideProps() {

  const urlJoyas = `${process.env.API_URL}/joyas`
  const urlEventos = `${process.env.API_URL}/eventos`
  const urlBlog = `${process.env.API_URL}/blogs?_sort=created_at:desc`

  const [resJoyas, resEventos, resBlog] = await Promise.all([
    fetch(urlJoyas),
    fetch(urlEventos),
    fetch(urlBlog)
  ])

  const [joyas, evento, entradas] = await Promise.all([
    resJoyas.json(),
    resEventos.json(),
    resBlog.json()
  ])

  return {
    props: {
      joyas,
      evento,
      entradas
    }
  }
}

