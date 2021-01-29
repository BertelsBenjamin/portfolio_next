import styles from '../scss/Header.module.scss';
import Logo from '../components/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <Logo width='64px' height='64px' />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <Link href='/articles'>Articles</Link>
          </li>
          <li>
            <Link href='/contact.html'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
