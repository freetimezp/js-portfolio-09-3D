import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';

import Cup from "./Cup";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    bottom: 250px;
    right: 100px;
    text-align: center;
    font-style: italic;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 1);

    @media only screen and (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Cup />
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

export default ProductDesign;
