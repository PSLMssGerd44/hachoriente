import Link from 'next/link';
import Head from 'next/head';

export default function OcioVocacion() {
  return (
    <>
    <Head>
      <title>Salud</title>
    </Head>
    <div style={styles.container}>
      <h1 style={styles.heading}>Salud</h1>
      <h4 style={styles.goBack}>
        <Link href="/">← Menú principal</Link>
      </h4>
      <h3 style={styles.subheading}>EPS</h3>
      <p style={styles.paragraph}>
        De tu salud depende tu vida, por eso asegúrate de estar afiliado. Conoce las distintas empresas prestadoras de servicio disponibles para tu región y condición, sus términos y condiciones y más.{' '}
        <Link href="https://www.mintrabajo.gov.co/lista-de-eps">Lista de EPSs del país, </Link>
        <Link href="https://acemi.org.co/prensa/estas-son-las-mejores-eps-del-pais/">Artículo comparativo</Link>
      </p>
      <h3 style={styles.subheading}>IPS</h3>
      <p style={styles.paragraph}>
        Conoce a cuales instituciones prestadoras de servicio puedes acceder dependiendo de tu ubicación y EPS.{' '}
        <Link href="https://www.datos.gov.co/Salud-y-Protecci-n-Social/Listado-de-IPS-en-Colombia-seg-n-su-nivel-de-compl/ugc5-acjp">Lista de IPSs en el país</Link>
      </p>
      <h3 style={styles.subheading}>ARL</h3>
      <p style={styles.paragraph}>
        Si eres trabajador, debes estar afiliado a alguna administradora de riesgos laborales. Usualmente tu empleador tendrá una determinada, sin embargo, infórmate para que estés siempre protegido.{' '}
        <Link href="https://www.fasecolda.com/ramos/riesgos-laborales/companias-autorizadas/">ARLs y sus coberturas </Link>
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