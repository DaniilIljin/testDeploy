import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh } from "three"


type Props = {
  position: [x: number, y: number, z: number],
  size: [width: number, height: number, depth: number],
  color: string
}

const Sphere = ({ position, size, color }: Props) => {
  const ref = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
    useFrame((state, delta) => {
      if (ref.current) {
        const speed = isHovered ? 1 : 0.2
        ref.current.rotation.y += delta * speed
      }
    })
  return (
    <mesh position={position} ref={ref}
    onPointerEnter={(event) => {event.stopPropagation(), setIsHovered(true)}}
    onPointerLeave={() => setIsHovered(false)}
    onClick={() => setIsClicked(!isClicked)}
    scale={isClicked ? 1.5 : 1}
    >
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={isHovered ? "blue" : color} wireframe/>
    </mesh>
)
}

export default Sphere