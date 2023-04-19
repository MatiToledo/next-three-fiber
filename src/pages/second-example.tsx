import {Suspense} from 'react'
import dynamic from 'next/dynamic'

import {Canvas} from 'react-three-fiber'

import {OrbitControls, Stars} from '@react-three/drei'

import {Header} from 'components'

const Earth = dynamic(
  () => import('components').then(component => component.Earth),
  {
    ssr: false,
  }
)

export default function SecondExample(): JSX.Element {
  return (
    <>
      <Header color="#fff" />
      <Canvas
        onCreated={({camera}) => {
          camera.lookAt(5, -3, 0)
        }}
        style={{backgroundColor: '#0E141B'}}
        camera={{position: [0, 15, 0], fov: 75}}
      >
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Stars />
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.5} position={[0, 50, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
