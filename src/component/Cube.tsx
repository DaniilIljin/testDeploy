import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import { useRef } from "react"

type Props = {
  position: [x: number, y: number, z: number],
  size: [width: number, height: number, depth: number],
  color: string
}

const Cube = ({ position, size, color }: Props) => {
  const ref = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta
      ref.current.rotation.z += delta
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2
    }
  })

  return <>
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  </>
}

export default Cube