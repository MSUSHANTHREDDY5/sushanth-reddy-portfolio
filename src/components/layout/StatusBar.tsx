import React, { useState, useEffect } from 'react';
import { GitBranch, CheckCheck, Heart, Sparkles } from 'lucide-react';

interface StatusBarProps {
  copilotOpen: boolean;
  onToggleCopilot: () => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  copilotOpen,
  onToggleCopilot,
}) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 font-mono-code text-[11px] select-none z-20">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleCopilot}
          className="flex items-center gap-1 hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors font-medium"
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </button>
        <span className="hidden sm:inline-block hover:bg-white/20 px-1.5 py-0.5 rounded cursor-pointer">
          Sushanth's Portfolio
        </span>
        <button
          onClick={onToggleCopilot}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors ${
            copilotOpen ? 'bg-pink-600 font-bold' : 'hover:bg-white/20'
          }`}
        >
          <Sparkles className="w-3 h-3 text-yellow-300" />
          <span>Copilot</span>
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <span className="hidden md:inline-block text-[10px] opacity-90">
          TypeScript React
        </span>
        <span className="hidden sm:inline-block opacity-90">UTF-8</span>
        <div className="flex items-center gap-1 opacity-90">
          <CheckCheck className="w-3 h-3 text-emerald-300" />
          <span className="hidden sm:inline-block">Prettier</span>
        </div>
        <div className="flex items-center gap-1 opacity-90">
          <Heart className="w-3 h-3 text-pink-300 fill-pink-300" />
          <span className="hidden sm:inline-block">Sushanth Dark</span>
        </div>
        <span className="font-semibold">{time}</span>
      </div>
    </div>
  );
};
