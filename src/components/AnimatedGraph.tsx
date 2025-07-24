import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface AnimatedGraphProps {
  position: [number, number, number]
  delay: number
}

export function AnimatedGraph({ position, delay }: AnimatedGraphProps) {
  const groupRef = useRef<THREE.Group>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const coneRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current || !boxRef.current || !sphereRef.current || !coneRef.current) return

    const time = clock.getElapsedTime() + delay
    
    // Movimento principal do grupo
    groupRef.current.position.y = position[1] + Math.sin(time * 0.5) * 2
    groupRef.current.rotation.y = time * 0.3

    // Animações individuais dos elementos
    boxRef.current.rotation.x = time * 0.4
    boxRef.current.rotation.z = time * 0.6
    boxRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)

    sphereRef.current.position.y = Math.sin(time * 1.5) * 0.5
    sphereRef.current.rotation.x = time * 0.8
    
    coneRef.current.rotation.z = time * 0.7
    coneRef.current.position.x = Math.cos(time * 1.2) * 0.3
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Caixa principal */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.3]} />
        <meshStandardMaterial
          color="#14B8A6"
          transparent
          opacity={0.7}
          emissive="#14B8A6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Esfera flutuante */}
      <mesh ref={sphereRef} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#06D6A0"
          transparent
          opacity={0.8}
          emissive="#06D6A0"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Cone indicador */}
      <mesh ref={coneRef} position={[0, -1.5, 0]}>
        <coneGeometry args={[0.2, 0.8, 8]} />
        <meshStandardMaterial
          color="#5EEAD4"
          transparent
          opacity={0.6}
          emissive="#5EEAD4"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Linhas conectoras */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial
          color="#14B8A6"
          transparent
          opacity={0.4}
          emissive="#14B8A6"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  )
}