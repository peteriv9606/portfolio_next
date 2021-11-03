import styles from '../../styles/navbar.module.scss'

export default function Navbar(){
  return (
    <div className={styles.Wrapper}>
        <div className={"Shell"}>
          <div className={styles.Inner}>
            <a href="/">Logo</a>
            <div className={styles.Nav_actions}>
              <a href={'/'}>Home</a>
              <a href={'/'}>Home</a>
              <a href={'/'}>Home</a>
            </div>
          </div>
        </div>
      </div>
  )
}