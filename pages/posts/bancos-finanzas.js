import Link from 'next/link';
import Head from 'next/head';

export default function OcioVocacion() {
  return (
    <>
    <Head>
      <title>Bancos y finanzas</title>
    </Head>
    <div style={styles.container}>
      <h1 style={styles.heading}>Bancos y finanzas</h1>
      <h4 style={styles.goBack}>
        <Link href="/">← Menú principal</Link>
      </h4>
      <h3 style={styles.subheading}>Bancos</h3>
      <p style={styles.paragraph}>
        Todos en algún momento necesitamos administrar nuestro dinero. Entérate de los bancos que hay a tu disposición, los planes y opciones crediticias que te ofrecen cada uno de ellos, además, encuentra una rtículo comparativo para que escojas de la mejor manera.{' '}
        <Link href="https://www.banrep.gov.co/es/sistemas-pago/cenit/entidades-autorizadas">Todos los bancos autorizados,  </Link>, 
        <Link href="https://lanotaeconomica.com.co/movidas-empresarial/conozca-los-10-mejores-bancos-del-pais-segun-sus-clientes/">Artículo comparativo,  </Link>
        <Link href="https://www.bancolombia.com/personas">Bancolombia,  </Link>
        <Link href="https://www.davivienda.com/wps/portal/personas/nuevo">Davivienda</Link>
      </p>
      <h3 style={styles.subheading}>Tributaciones</h3>
      <p style={styles.paragraph}>
        Como colombiano, estás en el deber de rendirle cuentas al estado, ya seas persona natural, jurídica, independiente o asalariado. Visita la página oficial del RUT para conocer tus deberes.{' '}
        <Link href="https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/RUT.aspx">RUT</Link>
      </p>
    </div>
  </>

  );
}
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '32px',
        marginBottom: '10px',
        color: '#EBE19A',
    },
    subheading: {
        fontSize: '24px',
        marginTop: '20px',
        color: '#FFFFE4',
    },
    goBack: {
        marginBottom: '20px',
        color: '#777',
    },
    paragraph: {
        fontSize: '18px',
        marginBottom: '20px',
        color: 'white',
        lineHeight: '1.5',
    },
};