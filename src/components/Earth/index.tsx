import {useRef} from 'react'
import {PrimitiveProps, useFrame, useLoader} from 'react-three-fiber'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default function Earth(): JSX.Element {
  const primitiveRef = useRef<PrimitiveProps>()
  const gltf = useLoader(GLTFLoader, '/earth.glb')

  // useFrame(() => {
  //   primitiveRef.current.rotation.y += 0.01
  // })

  return (
    <primitive
      castShadow
      ref={primitiveRef}
      object={gltf.scene}
      scale={[0.1, 0.1, 0.1]}
      position={[5, -3, 0]}
    />
  )
}
