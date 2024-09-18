import "./assets/styles/global.css";
import styles from "./assets/styles/main.module.css";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <h1>Titre 1</h1>
        <h2>Titre 2</h2>
        <p>Paragraphe</p>
      </main>
    </div>
  );
}
