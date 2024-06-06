import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

interface PlanetProps {
    size?: number;
    className?: string; 
}

const Planet: React.FC<PlanetProps> = ({ size = 200 }) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(size, size); 
        elementRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x000, transparent: true, opacity: 0.80 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;

            renderer.render(scene, camera);
        }
        animate();

        return () => {
            elementRef.current?.removeChild(renderer.domElement);
        }     
    }, [size])

    return <div ref={elementRef} style={{ width: size, height: size }} />

} 
export default Planet