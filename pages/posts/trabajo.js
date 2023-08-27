import Link from 'next/link';
import Head from 'next/head';

export default function OcioVocacion() {
  return (
    <>
    <Head>
      <title>Trabajo</title>
    </Head>
    <div style={styles.container}>
      <h1 style={styles.heading}>Trabajo</h1>
      <h4 style={styles.goBack}>
        <Link href="/">← Menú principal</Link>
      </h4>
      <p style={styles.paragraph}>
        Iniciar y abrirse puertas en el munto laboral puede ser retador y frustrante, por eso te traemos los mejores buscadores de empleo, conexiones y oportunidades.{' '}
        <Link href="https://www.linkedin.com">LinkedIn,  </Link>
        <Link href="https://www.magneto365.com/home/">Magneto,  </Link>
        <Link href="https://co.computrabajo.com">Computrabajo,  </Link>
        <Link href="https://www.serviciodeempleo.gov.co/inicio">Servicio público de Empleo</Link>
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