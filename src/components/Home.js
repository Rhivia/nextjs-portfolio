import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Nav from './Navigation';
import ParticlesComponent from './ParticlesComponent';

class Home extends Component {
    render () {
        return <>
            <Nav />

            <Container className="">
                <h1 className="">
                    It begins.
                </h1>

                <p>
                    <a href="https://nextjs-portfolio.rhivia.vercel.app/">Production</a>
                </p>

                <div className="face-value"></div>
            </Container>

            {/* <ParticlesComponent /> */}
        </>
    }
}

export default Home;