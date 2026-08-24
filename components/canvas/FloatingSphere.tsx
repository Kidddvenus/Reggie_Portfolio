"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function DistortedSphere() {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1, 100, 200]}>
      <MeshDistortMaterial
        color="#7c3aed"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0.1}
        metalness={0.8}
        emissive="#3b0d8c"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
}

export default function FloatingSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1.5} color="#06b6d4" />
      <directionalLight position={[-3, -3, -3]} intensity={0.5} color="#ec4899" />
      <pointLight position={[0, 2, 2]} intensity={2} color="#7c3aed" />
      <DistortedSphere />
    </Canvas>
  );
}
