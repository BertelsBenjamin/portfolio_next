const Logo = ({ width, height }) => {
  return (
    <a href='/'>
      <object
        style={{ width: width, height: height, margin: '20px 20px' }}
        type='image/svg+xml'
        data='./man-face-with-spectacles.svg'
      ></object>
    </a>
  );
};

export default Logo;
