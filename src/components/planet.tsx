import { useEffect, useRef } from "react";

const Planet: React.FC = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;
        
    }, [])
} 
export default Planet