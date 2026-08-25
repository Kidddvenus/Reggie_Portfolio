"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 5000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 2.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#7c3aed"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function CyanStars() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20;
      ref.current.rotation.z += delta / 25;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.003}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.position.y = 1.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={[3.5, 1.5, -1]}>
      <torusGeometry args={[0.6, 0.15, 16, 60]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={0.5}
        wireframe={false}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={[-2.5, 0.5, -1]}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.25;
    }
  });
  return (
    <mesh ref={ref} position={[0, -1.5, -2]}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#ec4899"
        emissive="#ec4899"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#7c3aed" />
      <pointLight position={[-2, -2, -2]} intensity={0.8} color="#06b6d4" />
      <StarField />
      <CyanStars />
      <FloatingTorus />
      <FloatingOctahedron />
      <FloatingIcosahedron />
    </Canvas>
  );
}
