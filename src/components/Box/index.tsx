import {useRef, useState} from 'react'
import {useFrame, MeshProps, BoxGeometryProps} from 'react-three-fiber'

import {useSpring, a} from '@react-spring/three'
import {MeshWobbleMaterial} from '@react-three/drei'
import {Mesh, Vector3} from 'three'

export default function Box({
  position,
  args,
  color,
}: MeshProps &
  BoxGeometryProps & {
    color: string
  }): JSX.Element {
  const refBox = useRef<Mesh>(null)
  const [expand, setExpand] = useState(false)

  useFrame(() => {
    refBox.current.rotation.x = refBox.current.rotation.y += 0.01
  })

  const {scale} = useSpring<{scale: Vector3}>({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  })

  return (
    <a.mesh
      onClick={() => setExpand(state => !state)}
      castShadow
      position={position}
      ref={refBox}
      scale={scale}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial color={color} />
    </a.mesh>
  )
}
