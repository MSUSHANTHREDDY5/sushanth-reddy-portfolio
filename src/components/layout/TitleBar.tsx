import React from 'react';
import { Search } from 'lucide-react';

interface TitleBarProps {
  onOpenCommandPalette: () => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({ onOpenCommandPalette }) => {
  return (
    <div className="h-9 bg-[#0b0c12] border-b border-white/10 flex items-center justify-between px-3 select-none text-xs text-gray-400">
      {/* Left: Mac Window Dots & VS Code Menus */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer hover:opacity-80" />
        </div>
        <div className="hidden md:flex items-center gap-3 text-gray-300 font-mono-code text-[11px]">
          <span className="hover:text-white cursor-pointer">File</span>
          <span className="hover:text-white cursor-pointer">Edit</span>
          <span className="hover:text-white cursor-pointer">View</span>
          <span className="hover:text-white cursor-pointer">Go</span>
          <span className="hover:text-white cursor-pointer">Run</span>
          <span className="hover:text-white cursor-pointer">Terminal</span>
          <span className="hover:text-white cursor-pointer">Help</span>
          <span className="hover:text-white cursor-pointer text-cyan-400">Copilot</span>
        </div>
      </div>

      {/* Center: Search / Command Palette Bar */}
      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 bg-[#181a24] hover:bg-[#202432] border border-white/10 rounded-md px-3 py-1 text-gray-400 transition-colors w-64 md:w-80 justify-center group"
      >
        <Search className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400" />
        <span className="font-mono-code text-[11px] truncate">
          sushanth-reddy : portfolio
        </span>
        <span className="bg-[#272b3c] text-gray-300 px-1.5 py-0.5 rounded text-[10px] font-mono-code">
          Ctrl P
        </span>
      </button>

      {/* Right: Layout indicator placeholder */}
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline-block text-[10px] font-mono-code text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
          VS Code v1.92
        </span>
      </div>
    </div>
  );
};
