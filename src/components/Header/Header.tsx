import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Logo from "../../app/assets/images/svg/logo/logo-cat__white.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <Image src={Logo} alt={"Logotype CAT²"} />
            </Link>
            <Link href="/" passHref>
                <span>CAT²</span>
            </Link>
            <div className={styles.headerButton}>
                <Button variant="secondary" rounded={true}>
                    Inscription
                </Button>
                <Button variant="primary" rounded={true}>
                    Connexion
                </Button>
            </div>
        </header>
    );
}
