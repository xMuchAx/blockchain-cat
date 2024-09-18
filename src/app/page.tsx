import "./assets/styles/global.css";
import styles from "./assets/styles/main.module.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
