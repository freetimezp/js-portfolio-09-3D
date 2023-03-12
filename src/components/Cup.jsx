/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cup.gltf --transform
Author: BlackCube (https://sketchfab.com/blackcube4)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cup-with-pencils-65f734dd770f43bb95174dc1059677c3
Title: Cup with Pencils
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cup-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.09}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.26, 1.03, 0.05]} rotation={[0.76, -1.24, 0.2]} scale={0.93}>
            <mesh geometry={nodes.Object_7.geometry} material={materials.Filzstift} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Filzstift_Zufllige_Farbe.007']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.Filzer_Schwarz} />
          </group>
          <group position={[0.02, 0.94, -0.26]} rotation={[0.21, -0.65, 0.66]} scale={0.93}>
            <mesh geometry={nodes.Object_11.geometry} material={materials.Fineliner} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Fineliner_Zufllige_Farbe} />
          </group>
          <group position={[0.16, 0.93, -0.09]} rotation={[-2.51, 1.4, 1.96]} scale={0.93}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.Bleistift_Miene} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Fineliner_Wei} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.Silber} />
          </group>
          <group position={[-0.17, 1.2, -0.22]} rotation={[-2.99, 0.57, 2.6]} scale={0.93}>
            <mesh geometry={nodes.Object_19.geometry} material={materials.Buntstift_1_Zufallsfarbe} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[-0.06, 0.9, 0.05]} rotation={[-2.63, 0.19, -2.93]} scale={0.93}>
            <mesh geometry={nodes.Object_24.geometry} material={materials['Filzstift.001']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.Filzer_Schwarz} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Filzstift_Zufllige_Farbe.008']} />
          </group>
          <group position={[0.28, 1.03, -0.03]} rotation={[2.7, -0.6, 3]} scale={0.93}>
            <mesh geometry={nodes.Object_29.geometry} material={materials['Fineliner_Zufllige_Farbe.001']} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Fineliner} />
          </group>
          <group position={[0.07, 1, -0.02]} rotation={[-2.94, -1.18, -2.36]} scale={0.93}>
            <mesh geometry={nodes.Object_31.geometry} material={materials['Filzstift.002']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['Filzstift_Zufllige_Farbe.001']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.Filzer_Schwarz} />
          </group>
          <group position={[0.11, 0.97, -0.22]} rotation={[0.5, -1.27, 0.97]} scale={0.93}>
            <mesh geometry={nodes.Object_36.geometry} material={materials['Fineliner_Zufllige_Farbe.002']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials.Fineliner} />
          </group>
          <group position={[-0.2, 1.04, 0.2]} rotation={[0.33, -0.19, 0.01]} scale={0.93}>
            <mesh geometry={nodes.Object_38.geometry} material={materials['Filzstift.003']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Filzer_Schwarz} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['Filzstift_Zufllige_Farbe.002']} />
          </group>
          <group position={[-0.05, 1.03, -0.11]} rotation={[-0.16, -0.63, 0.23]} scale={0.93}>
            <mesh geometry={nodes.Object_43.geometry} material={materials['Fineliner_Zufllige_Farbe.003']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.Fineliner} />
          </group>
          <group position={[-0.38, 1.02, 0.11]} rotation={[-2.97, -0.81, 2.92]} scale={0.93}>
            <mesh geometry={nodes.Object_45.geometry} material={materials['Filzstift.004']} />
            <mesh geometry={nodes.Object_47.geometry} material={materials.Filzer_Schwarz} />
            <mesh geometry={nodes.Object_46.geometry} material={materials['Filzstift_Zufllige_Farbe.003']} />
          </group>
          <group position={[-0.35, 1.05, 0.21]} rotation={[-2.87, -0.08, 3.06]} scale={0.93}>
            <mesh geometry={nodes.Object_50.geometry} material={materials['Fineliner_Zufllige_Farbe.004']} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.Fineliner} />
          </group>
          <group position={[-0.22, 0.65, -0.08]} rotation={[0.38, -0.39, -0.22]} scale={0.93}>
            <mesh geometry={nodes.Object_52.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_53.geometry} material={materials['Buntstift_2_Zufallsfarbe.003']} />
          </group>
          <group position={[-0.08, 1.19, 0.31]} rotation={[0.08, -1.47, -0.39]} scale={0.93}>
            <mesh geometry={nodes.Object_55.geometry} material={materials['Buntstift_1_Zufallsfarbe.001']} />
            <mesh geometry={nodes.Object_56.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_57.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_58.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[-0.26, 1.15, 0]} rotation={[-0.29, 1, 0.81]} scale={0.93}>
            <mesh geometry={nodes.Object_60.geometry} material={materials['Buntstift_1_Zufallsfarbe.002']} />
            <mesh geometry={nodes.Object_61.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_63.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[-0.22, 1.15, -0.31]} rotation={[0.32, -0.49, 0.62]} scale={0.93}>
            <mesh geometry={nodes.Object_65.geometry} material={materials['Buntstift_1_Zufallsfarbe.003']} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_67.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_68.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[0.33, 1.26, -0.17]} rotation={[-0.91, 1.41, 0.59]} scale={0.93}>
            <mesh geometry={nodes.Object_70.geometry} material={materials['Buntstift_1_Zufallsfarbe.004']} />
            <mesh geometry={nodes.Object_71.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_72.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_73.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[0.29, 1.16, 0.03]} rotation={[1.42, 1.21, -1.8]} scale={0.93}>
            <mesh geometry={nodes.Object_75.geometry} material={materials['Buntstift_1_Zufallsfarbe.005']} />
            <mesh geometry={nodes.Object_76.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_77.geometry} material={materials.Silber} />
            <mesh geometry={nodes.Object_78.geometry} material={materials.Bleistift_Wei} />
          </group>
          <group position={[-0.17, 1.01, 0.32]} rotation={[0.6, -1.41, 0.24]} scale={0.93}>
            <mesh geometry={nodes.Object_80.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_81.geometry} material={materials.Bleistift_Miene} />
            <mesh geometry={nodes.Object_82.geometry} material={materials.Fineliner_Wei} />
            <mesh geometry={nodes.Object_83.geometry} material={materials.Silber} />
          </group>
          <group position={[-0.42, 0.72, 0.02]} rotation={[-0.19, -1.08, 0.03]} scale={0.93}>
            <mesh geometry={nodes.Object_85.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_86.geometry} material={materials.Buntstift_2_Zufallsfarbe} />
          </group>
          <group position={[0.25, 0.72, 0.28]} rotation={[2.85, -0.23, -2.82]} scale={0.93}>
            <mesh geometry={nodes.Object_88.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_89.geometry} material={materials['Buntstift_2_Zufallsfarbe.001']} />
          </group>
          <group position={[-0.09, 0.7, -0.29]} rotation={[0.87, -0.97, 0.6]} scale={0.93}>
            <mesh geometry={nodes.Object_91.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_92.geometry} material={materials['Buntstift_2_Zufallsfarbe.002']} />
          </group>
          <group position={[0.13, 0.66, 0.01]} rotation={[-0.76, 0.94, 0.4]} scale={0.93}>
            <mesh geometry={nodes.Object_94.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_95.geometry} material={materials['Buntstift_2_Zufallsfarbe.004']} />
          </group>
          <group position={[0.31, 0.67, -0.1]} rotation={[-0.42, 0.45, 0.18]} scale={0.93}>
            <mesh geometry={nodes.Object_97.geometry} material={materials.Bleistift_Holz} />
            <mesh geometry={nodes.Object_98.geometry} material={materials['Buntstift_2_Zufallsfarbe.005']} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Tasse_Wei} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Tasse_Schwarz} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cup-transformed.glb')
