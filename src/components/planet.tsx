import { useEffect, useRef } from "react";
import * as THREE from 'three';

const Planet: React.FC = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;
        
        const cena  = new THREE.Scene();
    }, [])

    return <div ref={`elementRef`} />
} 
export default Planet