import styles from '../scss/Face.module.scss';

const Face = () => {
  return (
    <object
      type='image/svg+xml'
      data='./man-face-with-spectacles.svg'
      className={styles.face}
    ></object>
  );
};

export default Face;
