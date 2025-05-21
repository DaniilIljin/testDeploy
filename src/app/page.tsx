"use client"

import { Canvas } from "@react-three/fiber";
import Cube from "@/component/Cube";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { Leva } from "leva";
import { Stars } from "@react-three/drei";

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
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Scene />
      </Canvas>
    </>
  );
}
