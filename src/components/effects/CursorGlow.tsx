import React, { useEffect, useRef, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      setEnabled(false);
      return;
    }

    let mouseX = -300;
    let mouseY = -300;
    let currentX = -300;
    let currentY = -300;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('.ide-card') ||
          target.closest('[role="button"]') ||
          target.closest('input') ||
          target.closest('textarea'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.14;
      currentY += (mouseY - currentY) * 0.14;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none fixed top-0 left-0 z-40 rounded-full filter blur-3xl transition-all duration-300 ${
        isHovered
          ? 'w-[480px] h-[480px] opacity-70 bg-[radial-gradient(circle,rgba(255,42,133,0.4)0%,rgba(0,242,254,0.3)45%,transparent 70%)]'
          : 'w-[360px] h-[360px] opacity-45 bg-[radial-gradient(circle,rgba(0,242,254,0.35)0%,rgba(168,85,247,0.2)50%,transparent 70%)]'
      }`}
    />
  );
};
