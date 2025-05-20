"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [targetZ, setTargetZ] = useState(0)

  // Animate rotation and scroll movement
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.rotation.x += 0.001
      // Smooth interpolation for Z movement
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.05
    }
  })

  // Scroll listener — map scrollY to Z position
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY
      const zPos = scrollValue * 0.01 // scale scroll depth
      setTargetZ(-zPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="deepskyblue" roughness={0.8} metalness={0.3} />
    </mesh>
  )
}

export default function PlanetScene() {
  return (
    <div style={{ height: '300vh', margin: 0, padding: 0, backgroundColor: 'black' }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: 'black',
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Planet />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
