import React from 'react';
import styled from 'styled-components';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
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
    width: 120px;
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
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    {/* 3D model */}
                    <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />

                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think outside the square space.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Who We Are</Subtitle>
                    </WhatWeDo>
                    <Desc>A creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>See Our Works</Button>
                </Right>
            </Container>
        </Section>
    );
}

export default Who;

