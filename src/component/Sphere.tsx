
type Props = {
  position: [x: number, y: number, z: number],
  size: [width: number, height: number, depth: number],
  color: string
}

const Sphere = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={color}/>
    </mesh>
)
}

export default Sphere