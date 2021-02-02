import styles from '../scss/Home.module.scss';
import Face from '../components/Face';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.heading}>
        <h1 className={styles.title}>Benjamin Bertels</h1>
        <h2 className={styles.subtitle}>Javascript Developer</h2>
        <div>
          <h4 className={styles.microtitle}>
            Hasselt <span className='accent'>||</span> Belgium
          </h4>
        </div>
        <Face />
      </div>
    </>
  );
}
