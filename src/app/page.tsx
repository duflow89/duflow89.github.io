import styles from "./page.module.scss";
import Careers from "~/components/Careers";
import Aside from "~/components/Aside";

const HomePage = () => (
  <main className={styles.container}>
    <Aside />

    <Careers />
  </main>
);

export default HomePage;
