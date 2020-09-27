import React, { Component } from 'react';
import Particles from 'react-tsparticles';

const options = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
        onClick: {
            enable: true,
            mode: "push",
        },
        onHover: {
            enable: true,
            mode: "repulse",
        },
        resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "bottom",
            enable: true,
            outMode: "out",
            random: true,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 400,
            },
            value: 25,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "image",
            image: {
                // src: "img/600x600.jpg" // pinto
                src: "https://iili.io/2lTmqF.png" // "img/leaf.png" // folha
            },
            width: 50,
            height: 50
        },
        size: {
            random: true,
            value: 30,
        },
    },
    detectRetina: true,
};

class ParticlesComponent extends Component {
    render() {
        return <Particles id="tsparticles" options={options} />
    }
}

export default ParticlesComponent;