import Image from "next/image";
import styles from "./header.module.css";
import logo from "./../../assets/images/svg/logo/logo-cat__white.svg";
export default function Home() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt={"Logotype CAT²"} />
      <p>CAT²</p>
      <div>
        <button className="btn-round primary">Inscription</button>
        <button className="btn-round secondary">Connexion</button>
      </div>
    </header>
  );
}
