import Header from '../components/Header';
import '../scss/main/reset.scss';
import '../scss/main/global.scss';
import '../node_modules/mono-icons/iconfont/icons.css';
import Socials from '../components/Socials';
import Face from '../components/Face';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
