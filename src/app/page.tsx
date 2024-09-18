import "./assets/styles/global.css";
import styles from "./assets/styles/main.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Titre 1</h1>
        <h2>Titre 2</h2>
        <p>Paragraphe</p>
  
        <Link href="/inscription">Commencer l'expérience</Link>
        <Link href="/connexion">Connexion</Link>

      </main>
    </div>
  );
}

