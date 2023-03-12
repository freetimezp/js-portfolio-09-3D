import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 74px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: #fff;
    font-weight: 500;
    width: 100px;
    border: transparent;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    transition: all 0.4s linear;

    &:hover {
        background-color: #df2f98;
        box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.5);
    }
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>We enjoy creating delightful, human-centered digital expiriences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/* 3D model */}
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />

                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial color="#673091" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/moon.png" />
                </Right>
            </Container>
        </Section>
    );
}

export default Hero;
