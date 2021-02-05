import styles from '../scss/Home.module.scss';
import Face from '../components/Face';
import Socials from '../components/Socials';
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <animated.div style={props} className={styles.heading}>
        <h1 className={styles.title}>Benjamin Bertels</h1>
        <h2 className={styles.subtitle}>Javascript Developer</h2>
        <div>
          <h4 className={styles.microtitle}>
            Hasselt <span className='accent'>||</span> Belgium
          </h4>
        </div>
      </animated.div>
      <Face />
      <Socials />
    </>
  );
}
