import styles from "./header.module.css"


export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.content}>
            <a href="/" className={styles.logo}>⛰️ Serra & Mar</a>

            <nav className={styles.nav}>
                <a href="#destinos">Destinos</a>
                <a href="">Contato</a>
            </nav>
        </div>
    </header>
  )
}
