import {Canvas} from 'react-three-fiber'

import {Header, Plane} from 'components'

export default function ThirtyExample(): JSX.Element {
  return (
    <>
      <Header />
      <Canvas camera={{position: [0, 5, 5], fov: 75}}>
        <Plane args={[10000, 10000]} />
        <ambientLight />
      </Canvas>
    </>
  )
}
