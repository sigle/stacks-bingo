import type { AppProps } from 'next/app';
import { globalCss } from '../stitches.config';

const globalStyles = globalCss({
  body: {
    // Insert global style here
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
