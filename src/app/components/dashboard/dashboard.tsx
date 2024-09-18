import styles from "./dashboard.module.css";
import Image from "next/image";
import Coin from "./../../assets/images/png/coin/coin-cat__full.png";
export default function Header() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.left}>
        <div className={styles.top}>
          <h1>
            Bonjour, <span className={styles.colored}>Bob</span>
          </h1>
          <p>Bienvenue sur votre portefeuille</p>
        </div>
        <div className={styles.bottom}>
          <p>Graphe</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wallet}>
          <div>
            <strong>Portefeuille</strong>
            <p>MAJ à l’instant</p>
          </div>
          <div>
            <span>10</span>
            <Image src={Coin} alt={"Pièce CAT²"} />
          </div>
        </div>
        <div className={styles.transfert}></div>
      </div>
    </main>
  );
}
