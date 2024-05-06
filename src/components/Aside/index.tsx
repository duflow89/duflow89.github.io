import Image from "next/image";
import styles from "./Aside.module.scss";

const Aside = () => (
  <aside className={styles.aside}>
    <div className={styles.asideProfile}>
      <Image src="/images/thumbnail.jpg" className={styles.asideThumb} alt="nimkoes thumbnail" width={130} height={130} priority />
      <h1 className={styles.asideTitle}>nimkoes</h1>
    </div>

    {/* <div className={styles.asideSubtitle}>그럼에도불구하고</div> */}
    <div className={styles.asideComment}>I work diligently to become lazy ☕</div>

    <ul className={styles.asideKeyword}>
      <li>Java</li>
      <li>Spring Boot</li>
      <li>Data JPA</li>
      <li>querydsl</li>
      <li>SQL</li>
      <li>Azure</li>
      <li>k8s</li>
      <li>Maven</li>
    </ul>
  </aside>
);

export default Aside;
