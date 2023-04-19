import {Canvas} from 'react-three-fiber'

import {OrbitControls, softShadows} from '@react-three/drei'

import {Box, Header, Plane} from 'components'

softShadows()

export default function FirstExample(): JSX.Element {
  return (
    <>
      <Header color="#000" />
      <Canvas
        shadowMap
        colorManagement
        style={{backgroundColor: '#eee'}}
        camera={{position: [0, 0, 5], fov: 75}}
      >
        <Box position={[-5, 0, -5]} color="lightpink" />
        <Box position={[0, 0, -1]} args={[1, 1.5, 3]} color="lightblue" />
        <Box position={[5, 0, -5]} color="lightpink" />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          castShadow
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Plane />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.5} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
