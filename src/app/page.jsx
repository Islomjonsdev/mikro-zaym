import Bank from "./components/Bank/Bank";
import Carausel from "./components/Carausel/Carausel";
import Cards from "./components/Cards/Cards";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Hero from "./components/Hero/Hero";
import Kredit from "./components/Kredit/Kredit";
import Mobile from "./components/Mobile/Mobile";
import News from "./components/News/News";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <HeaderHero hero={<Hero />}/>
      <Carausel />
      <Cards />
      <Kredit />
      <Mobile />
      <News /> */}
      <Bank />
    </main>
  );
}
