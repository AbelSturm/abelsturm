import React, { useEffect, useRef, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle || isMobile) return;

    const moveCircle = (e: MouseEvent) => {
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

  return (
    <div
    className="w-8 h-8 bg-radial-gradient rounded-full fixed pointer-events-none transition-transform duration-100 ease-out will-change-transform shadow-lg z-50 opacity-0"
    ref={circleRef}
  ></div>
  );
};

export default MouseFollower;