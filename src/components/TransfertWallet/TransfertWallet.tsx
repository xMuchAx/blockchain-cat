import styles from "../../app/dashboard/Dashboard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import Coin from "../../app/assets/images/png/coin/coin-cat__full.png";
import { ArrowRight } from "phosphor-react";
export default function TransfertWallet() {
    return (
        <div className={styles.transfertWallet}>
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
                    {/* Commenter l'ArrowRight si tu veux le masquer */}
                    {/* <ArrowRight size={16} /> */}
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
            <div className={styles.send}>
                <Button variant="primary" rounded={false}>
                    Envoyer un token
                </Button>
                <Button variant="secondary" rounded={false}>
                    Gérer les tokens
                </Button>
            </div>
        </div>
    );
}
