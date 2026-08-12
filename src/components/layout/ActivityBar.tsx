import React from 'react';
import { Files, Search, GitBranch, Play, Blocks, Settings, Bot } from 'lucide-react';

interface ActivityBarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  copilotOpen: boolean;
  toggleCopilot: () => void;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({
  sidebarOpen,
  toggleSidebar,
  copilotOpen,
  toggleCopilot,
}) => {
  return (
    <div className="w-12 bg-[#0b0c12] border-r border-white/10 flex flex-col justify-between items-center py-3 select-none z-20">
      {/* Top Icons */}
      <div className="flex flex-col items-center gap-5">
        <button
          onClick={toggleSidebar}
          title="Explorer (Ctrl+Shift+E)"
          className={`p-2 rounded-lg transition-colors relative ${
            sidebarOpen
              ? 'text-white bg-white/10 border-l-2 border-cyan-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Files className="w-5 h-5" />
        </button>
        <button
          title="Search"
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
        <button
          title="Source Control"
          className="p-2 text-gray-400 hover:text-white transition-colors relative"
        >
          <GitBranch className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400" />
        </button>
        <button
          title="Run & Debug"
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Play className="w-5 h-5" />
        </button>
        <button
          title="Extensions"
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Blocks className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={toggleCopilot}
          title="Sushanth's Copilot AI"
          className={`p-2 rounded-lg transition-all relative ${
            copilotOpen
              ? 'text-pink-400 bg-pink-950/40 border border-pink-500/50 shadow-[0_0_10px_rgba(255,42,133,0.3)]'
              : 'text-gray-400 hover:text-pink-400'
          }`}
        >
          <Bot className="w-5 h-5" />
        </button>
        <button
          title="Settings"
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
