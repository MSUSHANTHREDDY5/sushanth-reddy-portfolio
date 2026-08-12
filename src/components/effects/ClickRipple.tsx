import React, { useEffect, useState } from 'react';

interface RippleInstance {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const ClickRipple: React.FC = () => {
  const [ripples, setRipples] = useState<RippleInstance[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const colors = ['#00f2fe', '#ff2a85', '#10b981', '#a855f7'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newRipple: RippleInstance = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
      };

      setRipples((prev) => [...prev.slice(-6), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 550);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {ripples.map((r) => (
        <div key={r.id} className="absolute pointer-events-none" style={{ left: r.x, top: r.y }}>
          {/* Main Expanding Ring */}
          <div
            className="absolute rounded-full border-2 -translate-x-1/2 -translate-y-1/2 animate-ripple-expand"
            style={{
              borderColor: r.color,
              boxShadow: `0 0 16px ${r.color}, inset 0 0 8px ${r.color}`,
            }}
          />

          {/* 6 Outward Spark Particles */}
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const dist = 32;
            const tx = Math.cos(rad) * dist;
            const ty = Math.sin(rad) * dist;
            return (
              <div
                key={idx}
                className="absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spark-burst"
                style={{
                  backgroundColor: r.color,
                  boxShadow: `0 0 8px ${r.color}`,
                  transform: `translate(${tx}px, ${ty}px)`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
