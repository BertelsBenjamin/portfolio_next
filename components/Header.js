import { useRouter } from 'next/router';
import styles from '../scss/Header.module.scss';
import Logo from '../components/Logo';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo width='64px' height='64px' />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={router.pathname == '/about' ? 'active' : ''}>
            <i className='mi-user'></i>
            <Link href='/about'>About</Link>
          </li>
          <li className={router.pathname == '/work' ? 'active' : ''}>
            <i className='mi-clipboard-list'></i>
            <Link href='/work'>Work</Link>
          </li>
          <li className={router.pathname == '/articles' ? 'active' : ''}>
            <i className='mi-book'></i>
            <Link href='/articles'>Articles</Link>
          </li>
          <li className={router.pathname == '/contact' ? 'active' : ''}>
            <i className='mi-megaphone'></i>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      url: window.location,
    },
  };
}

export default Header;
