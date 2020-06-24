import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

class Index extends Component {
  render () {
    return (
      <Container>
        <Head>
          <title>NextJs Games Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <main className="mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-500">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <p>
            <Link href="/posts/first"><a>this page!</a></Link>
          </p>
        </main>
      </Container>
    )
  }
}

export default Index;
