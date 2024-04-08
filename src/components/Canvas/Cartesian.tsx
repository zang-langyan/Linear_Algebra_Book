import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber'
import { Center, OrbitControls, Text } from '@react-three/drei'
import * as THREE from "three"
import { VectorMesh } from './VectorMesh'
import { Leva, button, useControls } from 'leva'


export function Cartesian(props : ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh
      {...props}
      {...ref}
      ref = {ref}
      position={[0, 0, 0]}
    >
      <VectorMesh start={new THREE.Vector3(-5,0,0)} end={new THREE.Vector3(5,0,0)} color="red" annotation={'x'} props={{  }} />
      <VectorMesh start={new THREE.Vector3(0,-5,0)} end={new THREE.Vector3(0,5,0)} color="green" annotation={'y'} props={{  }} />
      <VectorMesh start={new THREE.Vector3(0,0,-5)} end={new THREE.Vector3(0,0,5)} color="blue" annotation={'z'} props={{ }} />
    </mesh>
  )
}

// export function Box(props : ThreeElements['mesh']) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef<THREE.Mesh>(null!)
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   // useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}>
//       <cylinderGeometry args={[0.1, 0.1, 2, 64]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

export default function CoordinateSystem() {

  const vecConfig = useMemo(() => {
    return {
      start: {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      end: {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      color: {value: 'black'},
    }
  }, [])

  const vec1Config = useControls('Vector 1', vecConfig)
  const vec2Config = useControls('Vector 2', vecConfig)

  return (
    <div className="canvas-container" style={ {position: 'relative',  height: "60%", border: 'none', margin: 'auto'} }>
      <Canvas camera={{position: [7,7,5], up: [0,0,1]}}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Cartesian />

        <VectorMesh 
          start={new THREE.Vector3(vec1Config.start.x, vec1Config.start.y, vec1Config.start.z)} 
          end={new THREE.Vector3(vec1Config.end.x, vec1Config.end.y, vec1Config.end.z)} 
          color={vec1Config.color} 
          annotation={null} 
          props={{  }} 
        />
        <VectorMesh 
          start={new THREE.Vector3(vec2Config.start.x, vec2Config.start.y, vec2Config.start.z)} 
          end={new THREE.Vector3(vec2Config.end.x, vec2Config.end.y, vec2Config.end.z)} 
          color={vec2Config.color} 
          annotation={null} 
          props={{  }} 
        />

        {/* <axesHelper args={[10]} /> */}
        <gridHelper args={[10, 10]} rotation={[Math.PI/2, 0, 0]} />
        <OrbitControls makeDefault target={[0,0,0]}/>
      </Canvas>

      <div className="canvas-controls" style={
        {
          position: 'absolute',
          top: '10px',
          right: '10px',
          overflow: 'hidden',
          border: 'none',
          margin: 'auto',
        }
      }>
        <Leva collapsed fill flat />
      </div>
    </div>
  )
}
