import type { AppProps } from 'next/app';

import { Connect, useConnect, AuthOptions } from '@stacks/connect-react';
import { globalCss } from '../stitches.config';
import { userSession } from '../modules/utils';

const globalStyles = globalCss({
  body: {
    // Insert global style here
    backgroundColor: '#070707',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const authOptions: AuthOptions = {
    redirectTo: '/',
    // TODO change app details
    appDetails: {
      name: 'Sigle',
      icon: 'https://app.sigle.io/icon-192x192.png',
    },
    userSession,
    onFinish: () => {
      console.log('auth');
    },
  };

  return (
    <Connect authOptions={authOptions}>
      <Component {...pageProps} />
    </Connect>
  );
}

export default MyApp;
