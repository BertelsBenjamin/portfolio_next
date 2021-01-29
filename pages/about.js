import styles from '../scss/About.module.scss';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Hi.</h1>
        <h2>I'm Benjamin,</h2>
        <br></br>
        <p>
          A <span className='accent-italic'>selftaught</span> developer looking
          for a first opportunity to get some hands on experience.
        </p>
        <br></br>
        <p>
          I <span style={{ fontWeight: '900' }}>love</span> working with{' '}
          <span className='accent'>Javascript</span> technologies. Take a look
          at my work to get a grasp of my skills as a developer.
        </p>
        <br></br>
        <p>
          Want to work together? <Link href='/contact'>Get in touch.</Link>
        </p>
      </div>
    </>
  );
};

export default About;
