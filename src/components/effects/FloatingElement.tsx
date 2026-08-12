import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // float phase delay in seconds
  distance?: number; // float vertical displacement in px (2-3px)
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  delay = 0,
  distance = 3,
}) => {
  return (
    <div
      style={{
        animation: `subtleFloat 4s ease-in-out ${delay}s infinite alternate`,
        ['--float-distance' as any]: `${distance}px`,
      }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
