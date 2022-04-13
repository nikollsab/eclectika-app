import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, pagina, producto }) => {
    return (
        <div>
            <Head>
                <title>Eclectika - {pagina}</title>
                <meta name="description" content="Sitio web que simula un sistema de venta de joyas" />
            </Head>

            <Header producto={producto}/>
            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    producto: null
}

export default Layout