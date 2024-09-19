import styles from "./Dashboard.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";
import Coin from "../assets/images/png/coin/coin-cat__full.png";
import React from "react";
import { ArrowRight } from "phosphor-react";
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
                <div className={styles.hist}>
                    <strong>Historique des transactions</strong>
                    <ul>
                        <li className={styles.up}>
                            <div>
                                <strong>Transaction #324</strong>
                                <p>Recu par Alice</p>
                            </div>
                            <div>
                                <strong>
                                    - 32 <span>CAT²</span>
                                </strong>
                                <p>17/09/2024</p>
                            </div>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <Button variant="secondary" rounded={false}>
                        Voir toutes les transactions
                    </Button>
                </div>
            </div>
        </section>
    );
}
