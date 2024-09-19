import styles from "./Dashboard.module.css";
import Image from "next/image";
import Coin from "../assets/images/png/coin/coin-cat__full.png";
export default function Header() {
    return (
        <section className={styles.dashboard}>
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
                <div>
                    <div className={styles.wallet}>
                        <div>
                            <strong>Portefeuille</strong>
                            <p>MAJ à l’instant</p>
                        </div>
                        <div>
                            <span>10</span>
                            <Image
                                src={Coin}
                                alt={"Pièce CAT²"}
                                className={styles.piece}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.transfert}>
                        <div>
                            <div className={styles.flagUs}></div>
                            <select>
                                <option>US dollars</option>
                                <option>Euros</option>
                            </select>
                        </div>
                        <div>
                            <span className={styles.devise}>320$</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                            >
                                <path
                                    d="M15.3167 7.53948L9.69189 13.1643C9.57462 13.2816 9.41556 13.3475 9.24971 13.3475C9.08387 13.3475 8.92481 13.2816 8.80754 13.1643C8.69027 13.047 8.62439 12.888 8.62439 12.7221C8.62439 12.5563 8.69027 12.3972 8.80754 12.28L13.366 7.72229H1.12498C0.959225 7.72229 0.800259 7.65645 0.683052 7.53924C0.565846 7.42203 0.5 7.26307 0.5 7.09731C0.5 6.93156 0.565846 6.77259 0.683052 6.65538C0.800259 6.53818 0.959225 6.47233 1.12498 6.47233H13.366L8.80754 1.91467C8.69027 1.7974 8.62439 1.63834 8.62439 1.4725C8.62439 1.30665 8.69027 1.14759 8.80754 1.03032C8.92481 0.91305 9.08387 0.847168 9.24971 0.847168C9.41556 0.847168 9.57462 0.91305 9.69189 1.03032L15.3167 6.65514C15.3748 6.71318 15.4209 6.78211 15.4524 6.85798C15.4838 6.93385 15.5 7.01518 15.5 7.09731C15.5 7.17944 15.4838 7.26077 15.4524 7.33664C15.4209 7.41251 15.3748 7.48144 15.3167 7.53948Z"
                                    fill="#FCFEFF"
                                />
                            </svg>
                            <span className={styles.deviseCat}>
                                320{" "}
                                <Image
                                    src={Coin}
                                    alt={"Pièce CAT²"}
                                    className={styles.piece}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.hist}></div>
            </div>
        </section>
    );
}
