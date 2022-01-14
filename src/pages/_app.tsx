
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../../styles/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsmobile from '../aws-exports';
import Link from 'next/link';
Amplify.configure(awsmobile);
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();



const MyApp = (props: { Component: any; emotionCache?: EmotionCache | undefined; pageProps: any; }) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, signOut, user } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default withAuthenticator(MyApp);
