import styles from "./hero.module.css"

export default function index() {
  return (
    <section className={styles.hero}>
<div className={styles.content}>
   <div className={styles.text}>
     <h1 className={styles.title}>Sera ou mar? Escolha seu próximo passeio</h1>
    <p className={styles.subtitle}>Passeios guiados pelos cantos mais bonitos de santa catarina</p>
</div>
<img  src="/images/serra-e-mar.svg" alt="Monstanhas com neve no topo, mar logo abaixo e céu sem nuvens com sol" className={styles.image} />
</div>
    </section>
  )
}
