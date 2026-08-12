import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { TitleBar } from './components/layout/TitleBar';
import { MobileNavbar } from './components/layout/MobileNavbar';
import { ActivityBar } from './components/layout/ActivityBar';
import { ExplorerSidebar } from './components/layout/ExplorerSidebar';
import type { FileItem } from './components/layout/ExplorerSidebar';
import { TabBar } from './components/layout/TabBar';
import { Breadcrumbs } from './components/layout/Breadcrumbs';
import { Footer } from './components/layout/Footer';
import { StatusBar } from './components/layout/StatusBar';
import { HomeTab } from './components/tabs/HomeTab';
import { AboutTab } from './components/tabs/AboutTab';
import { ProjectsTab } from './components/tabs/ProjectsTab';
import { SkillsTab } from './components/tabs/SkillsTab';
import { AchievementsTab } from './components/tabs/AchievementsTab';
import { ContactTab } from './components/tabs/ContactTab';
import { ReadmeTab } from './components/tabs/ReadmeTab';
import { CopilotDrawer } from './components/copilot/CopilotDrawer';
import { CopilotLauncher } from './components/copilot/CopilotLauncher';
import { CommandPaletteModal } from './components/modals/CommandPaletteModal';
import { BackgroundEffects } from './components/effects/BackgroundEffects';
import { CursorGlow } from './components/effects/CursorGlow';
import { ClickRipple } from './components/effects/ClickRipple';
import { PageTransition } from './components/effects/PageTransition';
import {
  FileText,
  Braces,
  Download,
} from 'lucide-react';

export function App() {
  const files: FileItem[] = [
    {
      id: 'home',
      name: 'home.tsx',
      type: 'react',
      icon: <span className="text-cyan-400 font-bold font-mono-code text-xs">⚛</span>,
    },
    {
      id: 'about',
      name: 'about.html',
      type: 'html',
      icon: <span className="text-orange-400 font-bold font-mono-code text-xs">&lt;&gt;</span>,
    },
    {
      id: 'projects',
      name: 'projects.js',
      type: 'js',
      icon: <span className="text-yellow-400 font-bold font-mono-code text-xs">JS</span>,
    },
    {
      id: 'skills',
      name: 'skills.json',
      type: 'json',
      icon: <Braces className="w-3.5 h-3.5 text-yellow-300" />,
    },
    {
      id: 'achievements',
      name: 'achievements.ts',
      type: 'ts',
      icon: <span className="text-blue-400 font-bold font-mono-code text-xs">TS</span>,
    },
    {
      id: 'contact',
      name: 'contact.css',
      type: 'css',
      icon: <span className="text-pink-400 font-bold font-mono-code text-xs">#</span>,
    },
    {
      id: 'readme',
      name: 'README.md',
      type: 'md',
      icon: <FileText className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      id: 'resume',
      name: 'Sushanth_Reddy_Resume.pdf',
      type: 'pdf',
      icon: <Download className="w-3.5 h-3.5 text-cyan-400" />,
    },
  ];

  const [openFileIds, setOpenFileIds] = useState<string[]>([
    'home',
    'about',
    'projects',
    'skills',
    'achievements',
    'contact',
    'readme',
  ]);
  const [activeFileId, setActiveFileId] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [copilotOpen, setCopilotOpen] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Global Keyboard Shortcut (Ctrl+K or Cmd+K to toggle Copilot)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCopilotOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeFile = files.find((f) => f.id === activeFileId);

  const handleSelectFile = (id: string) => {
    if (id === 'resume') {
      window.open(PORTFOLIO_DATA.personal.resumePdf, '_blank');
      return;
    }
    if (!openFileIds.includes(id)) {
      setOpenFileIds([...openFileIds, id]);
    }
    setActiveFileId(id);
  };

  const handleCloseTab = (id: string) => {
    const updated = openFileIds.filter((fId) => fId !== id);
    setOpenFileIds(updated);
    if (activeFileId === id && updated.length > 0) {
      setActiveFileId(updated[updated.length - 1]);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0d0e15] overflow-hidden select-none relative">
      {/* Interactive Background Particle & Circuit Line System */}
      <BackgroundEffects />

      {/* Smooth Cursor Radial Glow */}
      <CursorGlow />

      {/* Global Interactive Click Ripple Effect */}
      <ClickRipple />

      {/* Desktop Title Bar */}
      <TitleBar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Mobile Navigation Header */}
      <MobileNavbar
        activeFileId={activeFileId}
        onSelectFile={handleSelectFile}
        onToggleCopilot={() => setCopilotOpen(!copilotOpen)}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Activity Bar */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          copilotOpen={copilotOpen}
          toggleCopilot={() => setCopilotOpen(!copilotOpen)}
        />

        {/* Explorer Sidebar */}
        {sidebarOpen && (
          <ExplorerSidebar
            files={files}
            activeFileId={activeFileId}
            onSelectFile={handleSelectFile}
            copilotOpen={copilotOpen}
            onToggleCopilot={() => setCopilotOpen(!copilotOpen)}
          />
        )}

        {/* Editor Central Canvas */}
        <div className="flex-1 flex flex-col bg-[#13151f]/90 backdrop-blur-sm overflow-hidden min-w-0">
          {/* Editor Tabs Bar */}
          <TabBar
            files={files}
            openFileIds={openFileIds}
            activeFileId={activeFileId}
            onSelectTab={setActiveFileId}
            onCloseTab={handleCloseTab}
          />

          {/* Breadcrumbs */}
          <Breadcrumbs activeFile={activeFile} />

          {/* Code Render Area with Smooth PageTransition */}
          <div className="flex-1 overflow-y-auto relative">
            <PageTransition activeFileId={activeFileId}>
              <div className="min-h-full flex flex-col justify-between">
                <div>
                  {activeFileId === 'home' && (
                    <HomeTab
                      onNavigate={handleSelectFile}
                      onOpenCopilot={() => setCopilotOpen(true)}
                    />
                  )}
                  {activeFileId === 'about' && <AboutTab />}
                  {activeFileId === 'projects' && <ProjectsTab />}
                  {activeFileId === 'skills' && <SkillsTab />}
                  {activeFileId === 'achievements' && <AchievementsTab />}
                  {activeFileId === 'contact' && <ContactTab />}
                  {activeFileId === 'readme' && <ReadmeTab />}
                </div>

                {/* Main Workspace Footer */}
                <Footer />
              </div>
            </PageTransition>
          </div>
        </div>

        {/* Right-docked AI Copilot Drawer */}
        <CopilotDrawer
          isOpen={copilotOpen}
          onClose={() => setCopilotOpen(false)}
          onNavigate={handleSelectFile}
          activeFileId={activeFileId}
        />
      </div>

      {/* Floating Bottom-Right Unique Copilot Launcher Pill */}
      <CopilotLauncher
        isOpen={copilotOpen}
        onToggle={() => setCopilotOpen(!copilotOpen)}
      />

      {/* Bottom Status Bar */}
      <StatusBar
        copilotOpen={copilotOpen}
        onToggleCopilot={() => setCopilotOpen(!copilotOpen)}
      />

      {/* Command Palette Modal (Ctrl+P) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        files={files}
        onSelectFile={handleSelectFile}
        onOpenCopilot={() => setCopilotOpen(true)}
      />
    </div>
  );
}

export default App;
