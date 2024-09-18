import "../../assets/styles/Page.module.css";

export const metadata = {
    title: "Inscription - Cat²",
    description: "Créez votre compte pour utiliser Cat²",
};

export default function InscriptionPage() {
    return (
        <div className="inscriptionWrapper">
            <h1>Inscription</h1>
            <p>Créez votre compte pour commencer à utiliser Cat².</p>
            {/* Formulaire d'inscription ici */}
        </div>
    );
}
