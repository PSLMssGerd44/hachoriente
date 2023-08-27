import Link from 'next/link';
import Head from 'next/head';

export default function OcioVocacion() {
  return (
    <>
    <Head>
      <title>Ocio y vocación</title>
    </Head>
    <div style={styles.container}>
      <h1 style={styles.heading}>Ocio y vocación</h1>
      <h4 style={styles.goBack}>
        <Link href="/">← Menú principal</Link>
      </h4>
      <p style={styles.paragraph}>
        En este enlace podrás conocerte más a ti mismo de manera gratuita, y te proporcionará una idea para tu vida
        laboral y académica basada en tus hábitos.{' '}
        <Link href="https://www.elegircarrera.net/test-vocacional/">Test vocacional 1</Link>
      </p>
      <h3 style={styles.subheading}>Personalidad</h3>
      <p style={styles.paragraph}>
        Si te interesa conocer cómo te percibes y cómo te podrían ver las demás personas, este test gratuito será tu
        aliado.{' '}
        <Link href="https://www.psicoactiva.com/tests/test-personalidad.htm">Test de personalidad</Link>
      </p>
      <h3 style={styles.subheading}>Inteligencias</h3>
      <p style={styles.paragraph}>
        ¿No sabes para qué eres bueno? Con este test de inteligencias múltiples podrás tener otra perspectiva de tus
        fortalezas.{' '}
        <Link href="https://www.psicoactiva.com/tests/test-inteligencias-multiples/">Test de inteligencias</Link>
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