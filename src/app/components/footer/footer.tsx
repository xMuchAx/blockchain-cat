import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© Copyright 2024 - M1 Dev ECV Paris All Rights Reserved.</p>
      <ul>
        <li>CGV</li>
        <li>CGU</li>
        <li>RGPD</li>
        <li>Nous contacter</li>
      </ul>
    </footer>
  );
}
