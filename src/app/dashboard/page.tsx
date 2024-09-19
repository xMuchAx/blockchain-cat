import styles from "./Dashboard.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";
import Coin from "../assets/images/png/coin/coin-cat__full.png";
import React from "react";
import ReactDOM from "react-dom";
import HistoryItem from "../../components/Historique/Historique";
import { ArrowRight } from "phosphor-react";
import TransfertWallet from "../../components/TransfertWallet/TransfertWallet";
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
                    <strong>Graphe</strong>
                </div>
            </div>
            <div className={styles.right}>
                <TransfertWallet />
                <div className={styles.hist}>
                    <strong>Historique des transactions</strong>
                    <ul>
                        <HistoryItem
                            direction="up"
                            id="324"
                            recipient="Alice"
                            amount={32}
                            date="17/09/2024"
                        />
                        <HistoryItem
                            direction="down"
                            id="324"
                            recipient="Joe"
                            amount={332}
                            date="17/09/2028"
                        />
                    </ul>
                    <Button variant="secondary" rounded={false}>
                        Voir toutes les transactions
                    </Button>
                </div>
            </div>
        </section>
    );
}
