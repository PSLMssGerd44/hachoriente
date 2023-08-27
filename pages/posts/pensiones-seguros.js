import Link from 'next/link';
import Head from 'next/head';

export default function PensionesSeguros() {
  return (
    <>
      <Head>
        <title>Pensiones y seguros</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.heading}>Pensiones y seguros</h1>
        <h4 style={styles.goBack}>
          <Link href="/">← Menú principal</Link>
        </h4>
        <h3 style={styles.subheading}>Pensiones</h3>
        <p style={styles.paragraph}>
          Infórmate a través de los sitios oficiales de las opciones para asegurar tus ingresos a futuro, entiende lo que son los fondos privados y públicos, y adicionalmente, visita la tabla comparativa para que tomes la mejor decisión.{' '}
          <Link href="https://www.colpensiones.gov.co">Colpensiones, </Link>
          <Link href="https://www.porvenir.com.co/web/personas/inicio">Porvenir, </Link>
          <Link href="https://www.elespectador.com/economia/que-le-conviene-mas-pensionarse-en-colpensiones-o-en-un-fondo-privado/">Artículo comparativo</Link>
        </p>
        <h3 style={styles.subheading}>Seguros</h3>
        <p style={styles.paragraph}>
          Porque la seguridad es lo más importante, estar bien asegurado debe ser tu prioridad. Conoce aquí los términos y condiciones de los seguros de vida y algunos de sus proveedores.{' '}
          <Link href="https://www.aseguratemejor.com.co/diferentes-tipos-de-seguro-de-vida/?gclid=Cj0KCQjw6KunBhDxARIsAKFUGs8JhRsBVa2Rivtu0BlowqkS4U7laIgmNAZGOG6csOUc4H2TKx5jK-gaAsfREALw_wcB">Asegúrate mejor</Link>
        </p>
        <h3 style={styles.subheading}>Cajas de Compensación</h3>
        <p style={styles.paragraph}>
          Similar a los seguros y pensiones, las cajas de compensación te permiten afiliarte a diferentes programas con beneficios exclusivos. Recuerda que estas cambian por departamento. En el caso de Antioquia, te mostramos cuáles son y un artículo comparativo.{' '}
          <Link href="https://www.comfama.com">Comfama, </Link>
          <Link href="https://comfenalcoantioquia.com.co/personas/">Comfenalco, </Link>
          <Link href="https://lanota.com/index.php/CONFIDENCIAS/ranking-2021-cajas-de-compensacion-familiar-de-colombia.html">Artículo comparativo</Link>
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
