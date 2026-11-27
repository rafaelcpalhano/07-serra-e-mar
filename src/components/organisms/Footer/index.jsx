import styles from "./footer.module.css"


export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>⛰️ Serra & Mar</p>
          <p>Passeios guiados por Santa Catarina.</p>
        </div>
        <div>
          <p className={styles.title}>Atendimento</p>
          <p>Segunda a sábado, das 8h às 18h.</p>
        </div>
      </div>
      <p className={styles.copy}>© 2026 Serra & Mar · projeto de estudo</p>
    </footer>
  );
}
