/* This file was initially auto-generated by https://github.com/pmndrs/gltfjsx and then adapted manually */
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

// import m1 from "../../../../public/model/shoe.gltf";
// import m1 from "../../../../public/model/shoe.gltf";

useGLTF.preload("/model/shoe.gltf");
export default function ShoeApp({ color, ...props }) {
  // const { nodes, materials } = useGLTF(m1);
  // const { nodes, materials } = useGLTF(m1);
  const { nodes, materials } = useGLTF(`/model/shoe.gltf`);

  return (
    <group shadows {...props} dispose={null}>
      {/* We can alter materials by piercing into them: materia-property={...} */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-envMapIntensity={0.8}
      />
      {/* Or, we define new materials, which now allows full re-use */}
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-envMapIntensity={0.8}
      />

      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry}>
        <meshStandardMaterial
          color={"red"}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* <mesh
        color="red"
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-envMapIntensity={0.8}
      /> */}
    </group>
  );
}
