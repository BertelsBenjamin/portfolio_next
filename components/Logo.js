import styles from '../scss/Logo.module.scss';

const Logo = ({ width, height }) => {
  return (
    <a className={styles.linkWrapper} href='/'>
      <span>
        <object
          style={{ width: width, height: height, margin: '20px 20px' }}
          type='image/svg+xml'
          data='./man-face-with-spectacles.svg'
        ></object>
      </span>
    </a>
  );
};

export default Logo;
