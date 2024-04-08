import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, TransformControls } from '@react-three/drei'
import * as THREE from "three"

function getRotationMat(vec1 : THREE.Vector3, vec2 : THREE.Vector3) {
  // vec1 rotate to vec2
  const axis = new THREE.Vector3()
  axis.crossVectors(vec1, vec2).normalize()
  const angle = vec1.angleTo(vec2)
  const mat = new THREE.Matrix4()
  mat.makeRotationAxis(axis, angle)
  return mat
}

function getRotationEuler(rotMat: THREE.Matrix4){
  const euler = new THREE.Euler()
  euler.setFromRotationMatrix(rotMat)
  return euler
}
// **********************************************************************************************************************
function ArrowCylinder({len, position, color} : {len: number, position: any, color: string}) {
  return (
    <mesh
      position={position}
    >
      <cylinderGeometry args={[0.01, 0.01, len, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function ArrowCone({ position, color } : { position: any, color: string }) {
  return (
    <mesh
      position={position}
    >
      <coneGeometry args={[0.05, 0.1, 32, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Annotation({position, text, color} : {position: any, text: string, color: string}) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion) 
  })

  return (
    <Text ref={ref} position={position} color={color} fontSize={0.2} children={text} />
  )
}

export function VectorMesh({start, end, color, annotation, props} : {start : THREE.Vector3, end: THREE.Vector3, color: string, annotation: string | null, props: ThreeElements['mesh']}) {
  const ref = useRef<THREE.Mesh>(null!)

  const vecLength = start.distanceTo(end)
  const vec = end.clone().sub(start)
  const cylindrical = new THREE.Cylindrical()
  cylindrical.setFromVector3(vec)
  
  const eulerRotation = getRotationEuler(getRotationMat(new THREE.Vector3(0,1,0), vec))

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const onHoverHandler = (event: any) => {
    event.stopPropagation()
    hover(true)
  }

  const onHoverOutHandler = (event: any) => {
    event.stopPropagation()
    hover(false)
  }

  const [notationPos, setNotationPos] = useState(new THREE.Vector3(1,1,1))

  useEffect(() => {
    setNotationPos((pos) => {
      if (annotation){
        return vec.clone().multiplyScalar(1.01).add(ref.current.children[0].position)
      } else {
        return vec.clone().multiplyScalar(1.05).add(ref.current.children[0].position)
      }
    })
  }, [ref, start, end])

  return (
    <>
      <mesh
        {...props}
        ref={ref} 
        onPointerOver={onHoverHandler}
        onPointerOut={onHoverOutHandler}
        onClick={(event) => click(!clicked)}
      >
        <mesh
          position={start}
          rotation={eulerRotation}
        >
          <ArrowCylinder len={vecLength-0.1} position={[0, vecLength/2-0.05, 0]} color={color} />
          <ArrowCone position={[0, vecLength-0.05, 0]} color={color} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        { 
          annotation ? 
          <Annotation position={notationPos} text={annotation} color={'black'}  /> :
          hovered ? <Annotation position={notationPos} text={`(${vec.x}, ${vec.y}, ${vec.z})`} color={'black'} /> : null 
        }

      </mesh>
      {
        !annotation && clicked ? <TransformControls object={ref} mode='translate' /> : null
      }
    </>
  )
}






// export function VectorMeshWithControl({start, end, color, annotation, props} : {start : THREE.Vector3, end: THREE.Vector3, color: string, annotation: string | null, props: ThreeElements['mesh']}) {
//   const vecConfig = useMemo(() => {
//     return {
//       start: {
//         "x": 0,
//         "y": 0,
//         "z": 0,
//       },
//       end: {
//         "x": 0,
//         "y": 0,
//         "z": 0,
//       },
//       color: {value: 'black'},
//     }
//   }, [])

//   const [vec, setVec] = useState({
//     start: start,
//     end: end,
//     color: color,
//   })

//   const { start: startVec, end: endVec, color: colorVec } = useControls('Vector', vecConfig, {collapsed: true})

//   useEffect(() => {
//     setVec({
//       start: new THREE.Vector3(startVec.x, startVec.y, startVec.z),
//       end: new THREE.Vector3(endVec.x, endVec.y, endVec.z),
//       color: colorVec,
//     })
//   }
//   , [startVec, endVec, colorVec])

//   return (
//     <VectorMesh start={vec.start} end={vec.end} color={vec.color} annotation={annotation} props={props} />
//   )
// }