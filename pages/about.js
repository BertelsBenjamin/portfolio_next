import styles from '../scss/About.module.scss';
import Link from 'next/link';
import Face from '../components/Face';
import Socials from '../components/Socials';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Hello,</h1>
        <h3>I'm Benjamin.</h3>
        <br></br>
        <p className={styles.paraOne}>
          A <span className='accent-italic'>selftaught</span> developer looking
          for a first opportunity to get some hands on experience.
        </p>
        <br></br>
        <p className={styles.paraTwo}>
          I <span style={{ fontWeight: '900' }}>love</span> working with{' '}
          <span className='accent'>Javascript</span> technologies. Take a look
          at my <Link href='/work'> work</Link> or read one of my{' '}
          <Link href='/articles'>articles</Link> to get a grasp of my skills and
          thoughts as a developer.
        </p>
        <br></br>
        <p className={styles.cta}>
          Want to work together? <Link href='/contact'>Get in touch.</Link>
        </p>
        <Face />
        <Socials />
      </div>
    </>
  );
};

export default About;
