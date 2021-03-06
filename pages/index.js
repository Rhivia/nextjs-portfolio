import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Home from '../src/components/Home';

const Index = () => {
    return (
    <main className="">
      <Head>
        <title>NextJs Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </Head>

      <Home />
    </main>
  )
}

export default Index;
