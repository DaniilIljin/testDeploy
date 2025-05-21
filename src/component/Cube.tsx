import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import { useRef } from "react"
import { MeshWobbleMaterial } from "@react-three/drei"

type Props = {
  position?: [x: number, y: number, z: number],
  size?: [width: number, height: number, depth: number],
  color?: string
}

const Cube = ({ position = [0, 0, 0,], size = [2, 2, 2], color = "red" }: Props) => {
  const ref = useRef<Mesh>(null)


  return <>
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial />
    </mesh>
  </>
}

export default Cube