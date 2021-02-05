import Header from '../components/Header';
import Head from 'next/head';
import '../scss/main/reset.scss';
import '../scss/main/global.scss';
import '../node_modules/mono-icons/iconfont/icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Inter-VariableFont_slnt,wght.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
