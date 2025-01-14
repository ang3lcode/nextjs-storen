
import styles from "./page.module.css";

export default function Home() {
  console.log("hola devs");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>hola devs pagina inicio</h1>
      </main>
    </div>
  );
}
