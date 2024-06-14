import React, { useEffect, useRef } from 'react';
import '../../styles/MouseFollower.css';

const MouseFollower: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const moveCircle = (e: MouseEvent) => {
      console.log(`Mouse moved to: (${e.clientX}, ${e.clientY})`);
      const { clientX: x, clientY: y } = e;
      const circleDiameter = circle.offsetWidth;
      const offsetX = x - circleDiameter / 2;
      const offsetY = y - circleDiameter / 2;
      circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      circle.style.opacity = '1';
    };

    const hideCircle = () => {
      if (circle) {
        circle.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', moveCircle);
    window.addEventListener('mouseout', hideCircle);
    window.addEventListener('mouseover', moveCircle);

    return () => {
      document.removeEventListener('mousemove', moveCircle);
      window.removeEventListener('mouseout', hideCircle);
      window.removeEventListener('mouseover', moveCircle);
    };
  }, []);

  return <div className="circle" ref={circleRef}></div>;
};

export default MouseFollower;