import { useFrame } from "@react-three/fiber"
import { log } from "console"
import { useRef } from "react"

type Props = {
  position: [x: number, y:number, z:number],
  side: [width: number, height: number, depth: number],
  color: string
}

const Cube = ({position, side, color} : Props) => {
  
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    
  })

  return <>
    <mesh position={position} ref={ref}>
      <boxGeometry args={side} />
      <meshStandardMaterial color={color} />
    </mesh>
  </>
}

export default Cube