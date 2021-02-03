import styles from '../scss/Contact.module.scss';
import Face from '../components/Face';
import Socials from '../components/Socials';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.detailsWrapper}>
        <h2>Benjamin Bertels</h2>
        <h3>
          Koningin Astridlaan 77/2.01
          <br />
          3500 Hasselt, Belgium
        </h3>
        <div>
          <p>
            <a href={`tel:${process.env.PHONE}`}>
              <i className='mi-mobile accent'></i>Call me
            </a>
          </p>
          <p>
            <a href={`mailto:${process.env.EMAIL}`}>
              <i className='mi-email accent'></i>Mail me
            </a>
          </p>
        </div>
      </div>
      <Face />
      <Socials />
    </div>
  );
};

export default Contact;
