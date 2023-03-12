import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';

import Chair from "./Chair";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
    text-align: center;
    font-style: italic;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 1);
`;

const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Chair />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and 
                ensuring your product is a market success.
            </Desc>
        </>
    );
}

export default WebDesign;
