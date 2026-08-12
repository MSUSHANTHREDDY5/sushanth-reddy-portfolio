import React from 'react';
import { ChevronDown, Sparkles, Download } from 'lucide-react';

export interface FileItem {
  id: string;
  name: string;
  type: 'react' | 'html' | 'js' | 'json' | 'ts' | 'css' | 'md' | 'pdf';
  icon: React.ReactNode;
}

interface ExplorerSidebarProps {
  files: FileItem[];
  activeFileId: string;
  onSelectFile: (id: string) => void;
  copilotOpen: boolean;
  onToggleCopilot: () => void;
}

export const ExplorerSidebar: React.FC<ExplorerSidebarProps> = ({
  files,
  activeFileId,
  onSelectFile,
  copilotOpen,
  onToggleCopilot,
}) => {
  return (
    <div className="w-60 bg-[#0b0c12] border-r border-white/10 flex flex-col justify-between select-none text-xs h-full shrink-0">
      {/* Top Header & Tree */}
      <div>
        <div className="px-4 py-3 font-mono-code text-[11px] uppercase tracking-wider text-gray-400 font-semibold border-b border-white/5 flex items-center justify-between">
          <span>PORTFOLIO</span>
          <span className="text-[10px] text-gray-500 font-normal">SRC</span>
        </div>

        {/* Folder Item */}
        <div className="py-2">
          <div className="flex items-center gap-1.5 px-3 py-1 text-gray-300 font-mono-code text-[11px] font-medium">
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-cyan-400 font-semibold">sushanth-reddy</span>
          </div>

          {/* File Items */}
          <div className="mt-1 flex flex-col">
            {files.map((file) => {
              const isActive = activeFileId === file.id;
              return (
                <button
                  key={file.id}
                  onClick={() => onSelectFile(file.id)}
                  className={`flex items-center justify-between px-6 py-1.5 font-mono-code text-[12px] transition-colors group ${
                    isActive
                      ? 'bg-[#181b28] text-white border-l-2 border-cyan-400 font-medium'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {file.icon}
                    <span className="truncate">{file.name}</span>
                  </div>
                  {file.type === 'pdf' && (
                    <Download className="w-3 h-3 text-cyan-400 opacity-70 group-hover:opacity-100" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Copilot Widget */}
      <div className="p-3 border-t border-white/10 bg-[#0e1018]">
        <button
          onClick={onToggleCopilot}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all ${
            copilotOpen
              ? 'bg-pink-950/40 border-pink-500/60 text-pink-300 shadow-[0_0_12px_rgba(255,42,133,0.3)]'
              : 'bg-[#141724] border-white/10 hover:border-pink-500/40 text-gray-300 hover:text-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="font-mono-code text-[11px] font-semibold">
              Sushanth's Copilot
            </span>
          </div>
          <span className="bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded text-[9px] font-mono-code font-bold uppercase">
            AI
          </span>
        </button>
      </div>
    </div>
  );
};
