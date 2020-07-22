import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import Nav from '../src/components/Header';

class Index extends Component {
  render () {
    return (
      <main className="">
        <Head>
          <title>NextJs Games Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <Nav />

        <Container className="">
          <h1 className="">
            Welcome to your next tale.
          </h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <p>
            <a href="https://nextjs-portfolio.rhivia.vercel.app/">Production</a>
          </p>

          <div className="face-value"></div>
        </Container>
      </main>
    )
  }
}

export default Index;
