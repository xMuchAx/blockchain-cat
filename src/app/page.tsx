import "./assets/styles/Global.css";
import styles from "./assets/styles/Page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";
import CoinWallet from "./assets/images/svg/wallet/wallet-cat__full.svg";

export default function Home() {
    return (
        <div className={styles.homepageWrapper}>
            <section className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>
                            Le <span>chat</span> qui bâtit ton{" "}
                            <span>trésor</span> une <span>pelle</span> à la fois
                        </h1>
                        <p>
                            CAT², la monnaie numérique qui allie transparence,
                            sécurité et décentralisation, pour bâtir ton trésor
                            en toute confiance.
                        </p>
                        <Button variant="primary" rounded={false}>
                            Commencer l&apos;aventure
                        </Button>
                        <div className="eclipse"></div>
                    </div>
                    <div className="hero-image">
                        <Image src={CoinWallet} alt="Coin Wallet"></Image>
                    </div>
                </div>
                <div className={styles.heroBottom}>
                    <div className={styles.heroBar}>
                        <span>Transparence</span>
                        <div className={styles.heroBarDot}></div>
                        <span>Décentralisation</span>
                        <div className={styles.heroBarDot}></div>
                        <span>Sécurité</span>
                    </div>
                    <div className={styles.heroAnchor}>
                        <span>Découvrir</span>
                        <div className={styles.heroArrow}>
                            <div className={styles.heroDotArrow}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
