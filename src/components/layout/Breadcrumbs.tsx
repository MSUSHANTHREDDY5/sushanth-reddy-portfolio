import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { FileItem } from './ExplorerSidebar';

interface BreadcrumbsProps {
  activeFile: FileItem | undefined;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeFile }) => {
  if (!activeFile) return null;

  return (
    <div className="h-7 bg-[#13151f] border-b border-white/5 flex items-center px-4 font-mono-code text-[11px] text-gray-500 select-none">
      <span className="hover:text-gray-300 cursor-pointer">sushanth-reddy</span>
      <ChevronRight className="w-3 h-3 mx-1 text-gray-600" />
      <span className="hover:text-gray-300 cursor-pointer">src</span>
      <ChevronRight className="w-3 h-3 mx-1 text-gray-600" />
      <div className="flex items-center gap-1.5 text-gray-300 font-medium">
        {activeFile.icon}
        <span>{activeFile.name}</span>
      </div>
    </div>
  );
};
