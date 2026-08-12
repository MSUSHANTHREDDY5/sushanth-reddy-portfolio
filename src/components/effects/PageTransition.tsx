import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  activeFileId: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  activeFileId,
}) => {
  return (
    <div
      key={activeFileId}
      className="tab-view-container animate-tab-fade-in min-h-full w-full relative flex flex-col justify-between"
    >
      {/* Subtle IDE Top Accent Line on Tab Transition */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_8px_#00f2fe] animate-pulse z-20" />
      {children}
    </div>
  );
};
