"use client"

import { Canvas } from "@react-three/fiber";
import Cube from "@/component/Cube";

export default function Home() {
  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 3]} intensity={5} />


        {/* <group>
          <Cube position={[1, -1, 1]} side={1} color="green" />
          <Cube position={[1, 1, 1]} side={1} color="orange" />
          <Cube position={[-1, -1, 1]} side={1} color="red" />
          <Cube position={[-1, 1, 1]} side={1} color="purple" />
        </group> */}

      <Cube position={[0,0,0]} side={[2,2,2]} color="orange"/>

      </Canvas>
    </>
  );
}
