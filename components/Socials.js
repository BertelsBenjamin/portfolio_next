import styles from '../scss/Socials.module.scss';
import Link from 'next/link';

const Socials = () => {
  const goToLink = (link) => {
    window.open(link, '_blank');
  };
  return (
    <>
      <div className={styles.socials}>
        <a href='https://github.com/BertelsBenjamin' target='_blank'>
          <object
            type='image/svg+xml'
            data='./github-alt.svg'
            className={styles.social}
          >
            Github
          </object>
        </a>
        <a
          href='https://www.linkedin.com/in/benjamin-bertels-1a0b1763/'
          target='_blank'
        >
          <object
            type='image/svg+xml'
            data='./linkedin-in.svg'
            className={styles.social}
          >
            Linkedin
          </object>
        </a>
      </div>
    </>
  );
};

export default Socials;
