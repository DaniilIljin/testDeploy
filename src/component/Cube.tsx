import React from 'react'

type Props = {
  position: [x: number, y:number, z:number],
  side: number,
  color: string
}

const Cube = ({position, side, color} : Props) => {
  return <>
    <mesh position={position}>
      <boxGeometry args={[side]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </>
}

export default Cube