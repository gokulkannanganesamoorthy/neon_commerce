import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import bioEntity from '../assets/bio-entity.png';

const LiquidPlane = () => {
  const meshRef = useRef();
  const texture = useTexture(bioEntity);
  const [hovered, setHover] = useState(false);

  // Shader definition
  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uHover: { value: 0 },
  });

  useFrame((state) => {
    const { clock, pointer } = state;
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      // Smooth mouse interpolation
      meshRef.current.material.uniforms.uMouse.value.lerp(pointer, 0.1);

      // Smooth hover transition
      meshRef.current.material.uniforms.uHover.value = THREE.MathUtils.lerp(
        meshRef.current.material.uniforms.uHover.value,
        hovered ? 1 : 0,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[5, 5, 1]} // Adjust based on aspect ratio
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uMouse;
          uniform float uHover;

          void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Distance from mouse
            float dist = distance(uv, uMouse * 0.5 + 0.5);
            
            // Wave effect based on hover and distance
            float wave = sin(dist * 10.0 - uTime * 2.0) * 0.1 * uHover;
            pos.z += wave;

            // General "breathing"
            pos.z += sin(uv.x * 5.0 + uTime) * 0.05;
            pos.z += cos(uv.y * 5.0 + uTime) * 0.05;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform float uTime;
          uniform float uHover;
          uniform vec2 uMouse;

          void main() {
            vec2 uv = vUv;
            
            // Chromatic Abberation based on hover
            float shift = 0.02 * uHover;
            float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
            float g = texture2D(uTexture, uv).g;
            float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;

            // Liquid distortion
            uv.x += sin(uv.y * 10.0 + uTime) * 0.01;
            uv.y += cos(uv.x * 10.0 + uTime) * 0.01;

            vec3 color = vec3(r, g, b);
            
            // Add a subtle scanline
            float scanline = sin(uv.y * 200.0 + uTime * 10.0) * 0.05;
            color += scanline;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
        uniforms={uniforms.current}
        transparent={true}
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <LiquidPlane />
      </Canvas>
    </div>
  );
};

export default HeroScene;
