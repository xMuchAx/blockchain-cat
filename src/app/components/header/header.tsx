import "./../../assets/styles/global.css";
import "./header.css";

export default function Header() {
  return (
    <header>
      <img alt="Logo" />
      <p>CAT²</p>
      <div>
        <button className="button-ro primary">Inscription</button>
        <button className="button-ro secondary">Connexion</button>
      </div>
    </header>
  );
}
