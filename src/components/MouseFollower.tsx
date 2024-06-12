import React, { useEffect, useRef } from 'react';
import '../styles/MouseFollower.css';

const MouseFollower: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const moveCircle = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      circle.style.transform = `translate(${x - circle.offsetWidth / 2}px, ${y - circle.offsetHeight / 2}px)`;
    };

    document.addEventListener('mousemove', moveCircle);

    return () => {
      document.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return <div className="circle" ref={circleRef}></div>;
};

export default MouseFollower;
