import Bank from "./components/Bank/Bank";
import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Bank />
    </main>
  );
}
