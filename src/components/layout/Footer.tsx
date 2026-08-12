import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ExternalLink, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="w-full bg-[#0a0b10] border-t border-white/10 px-6 py-5 font-mono-code text-xs text-gray-400 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Brand & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold font-display">
            <span>Sushanth Reddy</span>
            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
              CS Undergrad @ VNR VJIET
            </span>
          </div>
          <p className="text-[11px] text-gray-500">
            © 2026 Sushanth Reddy • Built with React & TypeScript
          </p>
        </div>

        {/* Middle Career Opportunity Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Open to Software Engineering Internships & Opportunities</span>
        </div>

        {/* Right Social & Profile Links */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
          >
            <span className="font-bold">GH</span>
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
          <span className="text-white/10">•</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
          >
            <span className="font-bold text-cyan-400">IN</span>
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
          <span className="text-white/10">•</span>
          <a
            href={personal.emailMailto}
            className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
          >
            <Mail className="w-3 h-3 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
