import styles from '../styles/hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Wrapper_bg}></div>
      <div className="Shell">
        <div className={styles.Inner}>
          <div className={styles.Card}>
            <h1>Petar Ivanov</h1>
            <h4>Web Developer</h4>
          </div>
        </div>
      </div>
    </section>
  )
}