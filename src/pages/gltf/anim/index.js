import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./model";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas shadows>
        <Suspense fallback={null}>
          <Shoe />

          <Stage environment="city" intensity={0.6}></Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
