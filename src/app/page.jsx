import Bank from "./components/Bank/Bank";
import Hero from "./components/Hero/Hero";
import Mobile from "./components/Mobile/Mobile";
import News from "./components/News/News";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Mobile />
      <News />
      <Bank />
    </main>
  );
}
