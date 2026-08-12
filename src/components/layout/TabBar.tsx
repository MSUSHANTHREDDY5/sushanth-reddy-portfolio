import React from 'react';
import { X } from 'lucide-react';
import type { FileItem } from './ExplorerSidebar';

interface TabBarProps {
  files: FileItem[];
  openFileIds: string[];
  activeFileId: string;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  files,
  openFileIds,
  activeFileId,
  onSelectTab,
  onCloseTab,
}) => {
  const openFiles = files.filter((f) => openFileIds.includes(f.id));

  return (
    <div className="h-9 bg-[#0e1018] border-b border-white/10 flex items-center overflow-x-auto scrollbar-none select-none">
      {openFiles.map((file) => {
        const isActive = activeFileId === file.id;
        return (
          <div
            key={file.id}
            onClick={() => onSelectTab(file.id)}
            className={`flex items-center gap-2 px-3 py-1.5 h-full font-mono-code text-[11px] border-r border-white/10 cursor-pointer transition-colors group min-w-[120px] max-w-[180px] justify-between ${
              isActive
                ? 'bg-[#13151f] text-white border-t-2 border-t-cyan-400 font-medium'
                : 'bg-[#0a0b10] text-gray-400 hover:bg-[#11131c] hover:text-gray-200'
            }`}
          >
            <div className="flex items-center gap-1.5 truncate">
              {file.icon}
              <span className="truncate">{file.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(file.id);
              }}
              className="p-0.5 rounded hover:bg-white/10 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
