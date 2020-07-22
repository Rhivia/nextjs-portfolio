import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
