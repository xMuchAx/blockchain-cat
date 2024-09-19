import React, { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg"
import styles from "./Inscription.module.css";
import Button from "@/components/Button/Button";

const Inscription: React.FC = () => {
    return (
        <section className={styles.inscription_page}>
            <div className={styles.left}>
            <Image src={CoinWallet} alt="CoinWallet"></Image>
           </div>

            <div className={styles.right}>
                <Image src={Logo} alt="Logo"></Image>
                <h1><span>CAT²</span>, le chat qui batit ton trésor</h1>
                <div>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="Username">Nom d'utilisateur</label>
                            <input type="text" placeholder="Entrez votre nom d'utilisateur" id="Username" name="Username" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Entrez votre adresse mail" id="email" name="email" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" placeholder="Entrez votre mot de passe" id="password" name="password" />
                        </div>
                        <div className={styles.key}>
                            <div className={styles.formGroup}>
                                <label htmlFor="clepublique">Clé publique</label>
                                <input
                                    type="text" 
                                    placeholder="Entrez votre clé publique"
                                    id="clepublique"
                                    name="clepublique"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="cleprivee">Clé privée</label>
                                <input
                                    type="text"
                                    placeholder="Entrez votre clé privée"
                                    id="cleprivee"
                                    name="cleprivee"/>
                            </div>
                            
                        </div>
                        <div className={styles.conditions}>
                           <p> J'accepte les conditions générales d'utilisations...</p>
                        </div>
                        
                        <div className={styles.button}>
                            <Button variant="primary" rounded={false}>
                            S'inscrire
                            </Button>
                        </div>
                        
                    </form>
                    <div className={styles.link}>
                    <span>Déjà un compte?</span>
                    <Link>Connectez-vous</Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Inscription;
