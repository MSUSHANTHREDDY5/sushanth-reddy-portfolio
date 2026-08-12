import React, { useState, useEffect } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import type { FileItem } from '../layout/ExplorerSidebar';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  files: FileItem[];
  onSelectFile: (fileId: string) => void;
  onOpenCopilot: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  files,
  onSelectFile,
  onOpenCopilot,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 p-4 select-none">
      <div className="w-full max-w-xl bg-[#0f111a] border border-white/15 rounded-xl shadow-2xl overflow-hidden font-sans">
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#141624]">
          <Search className="w-4 h-4 text-cyan-400" />
          <input
            type="text"
            autoFocus
            placeholder="Type a file name or command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-mono-code text-xs text-white focus:outline-none placeholder-gray-500"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          <div className="px-3 py-1 font-mono-code text-[10px] text-gray-500 uppercase tracking-wider">
            Files & Pages
          </div>

          {filteredFiles.map((file) => (
            <button
              key={file.id}
              onClick={() => {
                onSelectFile(file.id);
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-cyan-950/40 hover:border-cyan-500/30 border border-transparent font-mono-code text-xs text-gray-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {file.icon}
                <span>{file.name}</span>
              </div>
              <span className="text-[10px] text-gray-500 group-hover:text-cyan-400">
                Jump to file
              </span>
            </button>
          ))}

          <div className="px-3 py-1 font-mono-code text-[10px] text-gray-500 uppercase tracking-wider pt-2">
            AI Assistant
          </div>

          <button
            onClick={() => {
              onOpenCopilot();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-pink-950/40 hover:border-pink-500/30 border border-transparent font-mono-code text-xs text-gray-300 hover:text-pink-300 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Launch Sushanth's Copilot AI</span>
            </div>
            <span className="text-[10px] text-pink-400 font-bold">Open AI</span>
          </button>
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0a0b10] border-t border-white/10 font-mono-code text-[10px] text-gray-500 flex justify-between">
          <span>
            Press <kbd className="text-gray-300">Esc</kbd> to exit
          </span>
          <span>Sushanth Reddy Portfolio</span>
        </div>
      </div>
    </div>
  );
};
