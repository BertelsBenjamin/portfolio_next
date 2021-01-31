import styles from '../scss/Header.module.scss';
import Logo from '../components/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo width='64px' height='64px' />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <i className='mi-user'></i>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <i className='mi-clipboard-list'></i>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <i className='mi-book'></i>
            <Link href='/articles'>Articles</Link>
          </li>
          <li>
            <i className='mi-megaphone'></i>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
