import Link from 'next/link';
import Head from 'next/head';

export default function OcioVocacion() {
  return (
    <>
    <Head>
      <title>Educación</title>
    </Head>
    <div style={styles.container}>
      <h1 style={styles.heading}>Educación</h1>
      <h4 style={styles.goBack}>
        <Link href="/">← Menú principal</Link>
      </h4>
      <h3 style={styles.subheading}>Aprendizaje de idiomas</h3>
      <p style={styles.paragraph}>
        Aprender un idioma puede marcar la diferencia en tu futuro, no tarde en empezar con estas herramientas gratuitas.{' '}
        <Link href="https://www.duolingo.com/learn">Duolingo, </Link> <Link href="https://www.busuu.com/es">Busuu</Link>
      </p>
      <h3 style={styles.subheading}>Traductores</h3>
      <p style={styles.paragraph}>
        Si alguna vez te encuentras estancad@, asegúrate de tener traducciones de confianza a la mano.{' '}
        <Link href="https://www.deepl.com/es/translator">DeepL traductor</Link>
      </p>
      <h3 style={styles.subheading}>Diseño</h3>
      <p style={styles.paragraph}>
        ¿Necesitas una presentación, afiche, o infografía creativa? Esta opción lo tiene todo para ti.{' '}
        <Link href="https://www.canva.com/es_es/">Canva</Link>
      </p>
      <h3 style={styles.subheading}>Académico</h3>
      <p style={styles.paragraph}>
        ¿No entiendes un tema? ¿Quieres aprender nuevas habilidades o ampliar tu hoja de vida? En estos witios web encontrarás educación de máxima calidad, y lo mejor, ¡Gratis!.{' '}
        <Link href="https://es.khanacademy.org/">Khan Academy</Link>, <Link href="https://www.coursera.org">Coursera</Link>, <Link href="https://www.edx.org">EDX</Link>
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