import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { AnimatedGraph } from "./AnimatedGraph"
import { Suspense } from "react"

export function Background3D() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Iluminação */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} color="#14B8A6" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#06D6A0" />
          
          {/* Environment para reflexões */}
          <Environment preset="city" />
          
          {/* Múltiplos gráficos animados */}
          <AnimatedGraph position={[-8, -3, -5]} delay={0} />
          <AnimatedGraph position={[-4, 2, -8]} delay={1} />
          <AnimatedGraph position={[0, -1, -6]} delay={2} />
          <AnimatedGraph position={[4, 3, -9]} delay={3} />
          <AnimatedGraph position={[8, -2, -7]} delay={4} />
          <AnimatedGraph position={[-6, 5, -10]} delay={5} />
          <AnimatedGraph position={[6, -4, -4]} delay={6} />
          <AnimatedGraph position={[2, 1, -11]} delay={7} />
          
          {/* Controles suaves da câmera */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}