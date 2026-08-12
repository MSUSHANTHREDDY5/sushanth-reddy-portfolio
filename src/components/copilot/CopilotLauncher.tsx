import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface CopilotLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CopilotLauncher: React.FC<CopilotLauncherProps> = ({
  isOpen,
  onToggle,
}) => {
  const [showFirstVisitTooltip, setShowFirstVisitTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the first-visit tooltip
    const dismissed = localStorage.getItem('sushanth_copilot_intro_dismissed');
    if (!dismissed && !isOpen) {
      const timer = setTimeout(() => {
        setShowFirstVisitTooltip(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFirstVisitTooltip(false);
    setHasInteracted(true);
    localStorage.setItem('sushanth_copilot_intro_dismissed', 'true');
  };

  const handleOpen = () => {
    if (showFirstVisitTooltip) {
      setShowFirstVisitTooltip(false);
      localStorage.setItem('sushanth_copilot_intro_dismissed', 'true');
    }
    onToggle();
  };

  return (
    <div className="fixed bottom-12 right-4 sm:bottom-12 sm:right-6 z-40 select-none flex flex-col items-end gap-2 group">
      {/* 1. First-Visit Intro Tooltip Popup */}
      {showFirstVisitTooltip && !isOpen && (
        <div className="animate-bounce-subtle p-3.5 rounded-xl bg-[#0f111b]/95 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,242,254,0.3)] backdrop-blur-md text-xs font-mono-code text-gray-200 max-w-xs space-y-2 relative">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Meet Sushanth's Copilot</span>
            </div>
            <button
              onClick={handleDismissTooltip}
              className="text-gray-400 hover:text-white transition-colors p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-gray-300 leading-snug">
            Ask me anything about Sushanth's projects, technical skills, DSA achievements, or suitability for an internship.
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-gray-500">Shortcut: Ctrl + K</span>
            <button
              onClick={handleOpen}
              className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/60 text-cyan-300 font-bold hover:bg-cyan-900 transition-colors text-[10px]"
            >
              Try it ✦
            </button>
          </div>
          {/* Arrow Pointer */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0f111b] border-r border-b border-cyan-500/50 rotate-45" />
        </div>
      )}

      {/* 2. Hover Tooltip for Shortcut */}
      {!showFirstVisitTooltip && !isOpen && (
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-lg bg-[#0f111b] border border-white/15 text-[11px] font-mono-code text-cyan-300 shadow-lg pointer-events-none whitespace-nowrap">
          Ask Sushanth's AI Copilot <span className="text-pink-400 font-bold">(Ctrl + K)</span>
        </div>
      )}

      {/* 3. Main Floating Launcher Pill Button */}
      <button
        onClick={handleOpen}
        aria-label="Open Sushanth's AI Copilot"
        className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-md ${
          isOpen
            ? 'bg-[#181b2a] border-cyan-400 text-white ring-2 ring-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.4)]'
            : 'bg-[#0f111b]/90 border-white/20 hover:border-cyan-400/80 text-gray-100 hover:text-white hover:shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:scale-105'
        }`}
      >
        {/* Glow Accent Border Ring */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-20 group-hover:opacity-60 blur-sm transition-opacity" />

        {/* AI Spark Icon */}
        <div className="relative z-10 p-1 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 text-black font-bold shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-black" />
        </div>

        {/* Text Label: Full on Desktop / Pill on Mobile */}
        <div className="relative z-10 flex items-center gap-2 font-mono-code text-xs font-bold tracking-wider">
          <span className="hidden sm:inline-block uppercase">SUSHANTH'S COPILOT</span>
          <span className="sm:hidden font-extrabold uppercase">AI COPILOT</span>

          {/* Status Indicator Dot */}
          <span className="flex items-center gap-1 pl-1 border-l border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline-block text-[10px] text-emerald-300 font-normal">AI</span>
          </span>
        </div>

        {/* Unopened notification badge dot */}
        {!hasInteracted && !isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500 border-2 border-[#0d0e15] animate-ping" />
        )}
      </button>
    </div>
  );
};
