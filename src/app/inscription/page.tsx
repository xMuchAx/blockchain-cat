import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./inscription_page.module.css";



const Inscription: React.FC = () => { 
    return(
        <div className={styles.inscription}>
            <h1> CAT², le chat qui batit ton trésor </h1>
            <form>
                <div className={styles.inscription}>
                    <label htmlFor="Username">Nom d'utilisateur </label>
                    <input 
                    type="text" 
                    id="Username" 
                    name="Username"
                    />
                </div>

            <div className={styles.inscription}>
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                 />
            </div>

            <div className={styles.inscription}>
                <label htmlFor="password">Mot de passe</label>
                <input 
                type="password"
                id="password"
                name="password"
                />
            </div>

            <div className={styles.inscription}>
                <label htmlFor="clepublique">Clé publique</label>
                <input 
                type="clepublique"
                id="clepublique"
                name="clepublique"
                />

            </div>

            <div className={styles.inscription}>
                <label htmlFor="cleprivee">Clé privée</label>
                <input 
                type="cleprivee"
                id="cleprivee"
                name="cleprivee"
                />

            </div>

            <button type="button"className={styles.inscription}>S'inscrire</button>
            <p>Déjà un compte?</p>

            </form>
        </div>
        
        
    );
};

export default Inscription;

