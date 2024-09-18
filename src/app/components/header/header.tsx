import "./../../assets/styles/global.css";
import "./header.css";

export default function Header() {
  return (
    <header>
      <img alt="Logo" />
      <p>CAT²</p>
      <div>
        <button>Inscription</button>
        <button>Connexion</button>
      </div>
    </header>
  );
}
