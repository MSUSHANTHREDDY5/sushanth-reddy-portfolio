import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Menu, X, Home, User, FolderGit2, Braces, Award, Mail, FileDown, Bot } from 'lucide-react';

interface MobileNavbarProps {
  activeFileId: string;
  onSelectFile: (id: string) => void;
  onToggleCopilot: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  activeFileId,
  onSelectFile,
  onToggleCopilot,
  isOpen,
  setIsOpen,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4 text-cyan-400" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4 text-orange-400" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4 text-yellow-400" /> },
    { id: 'skills', label: 'Skills', icon: <Braces className="w-4 h-4 text-yellow-300" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4 text-blue-400" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4 text-pink-400" /> },
  ];

  return (
    <div className="md:hidden bg-[#0b0c12] border-b border-white/10 px-4 py-2 flex items-center justify-between z-40 select-none">
      <div className="flex items-center gap-2 font-mono-code text-xs text-white font-bold">
        <span className="text-cyan-400">⚡</span>
        <span>Sushanth Reddy</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            onToggleCopilot();
            setIsOpen(false);
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-pink-950/60 border border-pink-500/40 text-pink-300 font-mono-code text-xs font-bold"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Copilot</span>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-1.5 rounded bg-white/5 text-gray-300 hover:text-white border border-white/10"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 right-0 bg-[#0f111b] border-b border-white/15 shadow-2xl p-4 space-y-3 z-50 animate-tab-fade-in font-mono-code text-xs">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">// WORKSPACE NAVIGATION</div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectFile(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg border transition-all ${
                  activeFileId === item.id
                    ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-300 font-bold'
                    : 'bg-[#141724] border-white/5 text-gray-300 hover:border-white/20'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-pink-950/50 border border-pink-500/40 text-pink-300 font-bold text-xs"
            >
              <FileDown className="w-4 h-4 text-pink-400" />
              <span>Official Resume (Google Drive)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
