import React from 'react';
import Head from 'next/head';
import Dashboard from '../src/components/Dashboard';

const Index = () => {
    return (
    <main className="">
      <Head>
        <title>Profile Dashboard</title>
      </Head>

      <Dashboard />
    </main>
  )
}

export default Index;
