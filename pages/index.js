import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Education App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          ¡Bienvenid@ a Real Education!
        </h1>

        <p className={styles.description}>
          Un solo lugar donde encontrarás la educación que de verdad necesitas, la que el colegio nunca te brindó...
        </p>

        <div className={styles.grid}>

          <a href="/posts/salud" className={styles.card}>
            <h3>Salud &rarr;</h3>
            <p>Encuentra los distintos planes actuales y cómo te puedes beneficiar.</p>
          </a>

          <a href="/posts/trabajo" className={styles.card}>
            <h3>Trabajo &rarr;</h3>
            <p>Acércate al mundo laboral sin estrellarte.</p>
          </a>

          <a href="/posts/educacion" className={styles.card}>
            <h3>Educación &rarr;</h3>
            <p>Ábrele las puertas a tu futuro con las posibilidades de educación.</p>
          </a>

          <a href="/posts/bancos-finanzas" className={styles.card}>
            <h3>Bancos y finanzas &rarr;</h3>
            <p>Encuentra la opción y ayuda que más se acomode a tus necesidades.</p>
          </a>

          <a href="/posts/pensiones-seguros" className={styles.card}>
            <h3>Pensiones y seguros &rarr;</h3>
            <p>Piensa más allá y protege tu futuro de la forma que prefieras.</p>
          </a>

          <a href="/posts/ocio-vocacion" className={styles.card}>
            <h3>Ocio y vocación &rarr;</h3>
            <p>Conecta contigo mismo como más te guste y descúbrete mientras disfrutas.</p>
          </a>
          <a href="/posts/ocio-vocacion" className={styles.card}>
            <h3>¡Contribuye! &rarr;</h3>
            <p>Ayúdanos a llegar a más personas. Si conoces de alguna página útil, envía este formulario .</p>
          </a>

        </div>
      </main>

      <footer>
          Desarrollado para Hack Oriente 2023 por: Daniel Valencia Jaramillo, Maria Paulina López Noreña, Maria camila henao, Paulina Sandoval.
          <img src="../public/images/logo.jpg" className={styles.logo} />
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


