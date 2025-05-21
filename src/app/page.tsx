"use client"

import { Canvas } from "@react-three/fiber";
import Cube from "@/component/Cube";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { Leva } from "leva";

const Scene = () => {
  const directionLightRef = useHelper()
  useHelper(directionLightRef, DirectionalLightHelper, 0.5, "white")

  return <>
    <directionalLight position={[2, 2, 3]} intensity={5}
      ref={directionLightRef}
    />
    <ambientLight intensity={0.1} />
    <Cube />
    <OrbitControls />
  </>
}

export default function Home() {

  return (
    <>
      <Leva />
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}
