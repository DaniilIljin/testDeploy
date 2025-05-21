import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"


type Props = {
  position: [x: number, y: number, z: number],
  size: [width: number, height: number, depth: number],
  color: string
}

const Sphere = ({ position, size, color }: Props) => {
  const ref = useRef<Mesh>(null)
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.2
      }
    })
  return (
    <mesh position={position} ref={ref}>
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={color} wireframe/>
    </mesh>
)
}

export default Sphere