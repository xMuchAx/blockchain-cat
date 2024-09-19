import React, {ReactNode} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./inscription_page.module.css";

interface FrameProps {
    children: ReactNode;
}

// Composant Frame
const Frame: React.FC<FrameProps> = ({ children }) => {
    return (
        <div className={styles.frame}>
            {children}
        </div>
    );
};
const Inscription: React.FC = () => {
    return (
        <section className={styles.inscription_page}>
            <div className={styles.left}>
                <img src="./assets/images/svg/wallet/wallet-cat_full.svg" className={styles.logo} />
            </div>

            <div className={styles.right}>
                <Frame>
                    <h1>CAT²</h1>
                    <h2>, le chat qui batit ton trésor</h2>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="Username">Nom d'utilisateur</label>
                            <input 
                                type="text" 
                                id="Username" 
                                name="Username"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Mot de passe</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="clepublique">Clé publique</label>
                            <input 
                                type="text"
                                id="clepublique"
                                name="clepublique"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="cleprivee">Clé privée</label>
                            <input 
                                type="text"
                                id="cleprivee"
                                name="cleprivee"
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>S'inscrire</button>
                    </form>
                </Frame>
            </div>
        </section>
    );
};

export default Inscription;
