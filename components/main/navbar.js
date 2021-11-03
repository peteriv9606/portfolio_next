import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.Wrapper}>
      <div className={"Shell"}>
        <div className={styles.Inner}>
          <Link href='/'>
            <a>Logo</a>
          </Link>
          <div className={styles.Nav_actions}>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}