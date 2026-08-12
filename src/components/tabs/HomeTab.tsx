import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { MagneticHover } from '../effects/MagneticHover';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CardSpotlight } from '../effects/CardSpotlight';
import { FloatingElement } from '../effects/FloatingElement';
import {
  Code,
  FolderGit2,
  GraduationCap,
  Mail,
  Terminal,
  Award,
  ExternalLink,
  FileDown,
  Sparkles,
} from 'lucide-react';

interface HomeTabProps {
  onNavigate: (fileId: string) => void;
  onOpenCopilot?: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate, onOpenCopilot }) => {
  const { personal, education, projects } = PORTFOLIO_DATA;

  const socialLinks = [
    {
      name: 'GitHub',
      url: personal.github,
      icon: <span className="font-mono-code text-xs font-bold text-gray-300">GH</span>,
    },
    {
      name: 'LinkedIn',
      url: personal.linkedin,
      icon: <span className="font-mono-code text-xs font-bold text-cyan-400">IN</span>,
    },
    {
      name: 'LeetCode',
      url: personal.leetcode,
      icon: <Code className="w-3.5 h-3.5 text-yellow-400" />,
    },
    {
      name: 'CodeChef',
      url: personal.codechef,
      icon: <Terminal className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      name: 'Codeforces',
      url: personal.codeforces,
      icon: <Award className="w-3.5 h-3.5 text-pink-400" />,
    },
    {
      name: 'Email',
      url: personal.emailMailto,
      icon: <Mail className="w-3.5 h-3.5 text-emerald-400" />,
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* 1. Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium tracking-wide flex items-center gap-2">
        <span>// hello world !! Welcome to my workspace</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* 2. Hero Name Banner */}
      <ScrollReveal delay={50} className="space-y-3">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-none">
          <span className="text-white drop-shadow-md">Sushanth </span>
          <span className="text-[#ff2a85] glow-pink">Reddy</span>
        </h1>

        {/* Role Pill Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {personal.roles.map((role, idx) => {
            const colors = [
              'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
              'border-pink-500/40 text-pink-300 bg-pink-950/30',
              'border-purple-500/40 text-purple-300 bg-purple-950/30',
              'border-emerald-500/40 text-emerald-300 bg-emerald-950/30',
            ];
            const dots = ['bg-cyan-400', 'bg-pink-400', 'bg-purple-400', 'bg-emerald-400'];
            return (
              <div
                key={idx}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-xs font-mono-code transition-transform hover:scale-105 ${colors[idx % colors.length]}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dots[idx % dots.length]}`} />
                <span>{role}</span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* 3. Tagline & Brief Intro */}
      <ScrollReveal delay={100} className="space-y-3 max-w-3xl">
        <p className="text-base sm:text-xl text-gray-200 font-semibold leading-relaxed font-display">
          {personal.headline}
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans">
          {personal.heroIntro}
        </p>
      </ScrollReveal>

      {/* 4. Hero Action Buttons */}
      <ScrollReveal delay={150} className="flex flex-wrap gap-3 pt-2">
        <MagneticHover strength={0.3}>
          <button
            onClick={() => onNavigate('projects')}
            className="btn-magnetic btn-ripple flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f2fe] hover:bg-[#00d8e4] text-[#0b0c12] font-mono-code font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>⚡ View Projects</span>
          </button>
        </MagneticHover>

        <MagneticHover strength={0.3}>
          <button
            onClick={() => onNavigate('resume')}
            className="btn-magnetic btn-ripple flex items-center gap-2 px-5 py-2.5 rounded-lg bg-pink-950/50 hover:bg-pink-900/60 text-pink-300 border border-pink-500/50 font-mono-code font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(255,42,133,0.2)]"
          >
            <FileDown className="w-4 h-4 text-pink-400" />
            <span>📄 Official Resume</span>
          </button>
        </MagneticHover>

        {onOpenCopilot && (
          <MagneticHover strength={0.3}>
            <button
              onClick={onOpenCopilot}
              className="btn-magnetic btn-ripple flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-950/50 hover:bg-purple-900/60 text-purple-300 border border-purple-500/50 font-mono-code font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>✦ Ask Copilot</span>
            </button>
          </MagneticHover>
        )}

        <MagneticHover strength={0.3}>
          <button
            onClick={() => onNavigate('about')}
            className="btn-magnetic btn-ripple flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181b28] hover:bg-[#22273a] text-gray-200 border border-white/10 hover:border-cyan-400/50 font-mono-code font-medium text-xs uppercase tracking-wider"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>👤 About</span>
          </button>
        </MagneticHover>

        <MagneticHover strength={0.3}>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-magnetic btn-ripple flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181b28] hover:bg-[#22273a] text-gray-200 border border-white/10 hover:border-pink-500/50 font-mono-code font-medium text-xs uppercase tracking-wider"
          >
            <Mail className="w-4 h-4 text-pink-400" />
            <span>✉️ Contact</span>
          </button>
        </MagneticHover>
      </ScrollReveal>

      {/* 5. 4-Stat Metric Highlights */}
      <ScrollReveal delay={200}>
        <FloatingElement distance={2.5}>
          <CardSpotlight className="rounded-xl bg-[#0f111b]/80 border border-white/10 backdrop-blur-md ide-card">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5">
              <div className="text-center p-3 border-r sm:border-r border-b sm:border-b-0 border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-cyan-400">
                  {education.duration}
                </div>
                <div className="text-[11px] font-mono-code text-gray-400 mt-1 uppercase">
                  B.TECH CS DURATION
                </div>
              </div>

              <div className="text-center p-3 border-b sm:border-b-0 sm:border-r border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-400">
                  {personal.cgpa}
                </div>
                <div className="text-[11px] font-mono-code text-gray-400 mt-1 uppercase">
                  ACADEMIC CGPA
                </div>
              </div>

              <div className="text-center p-3 border-r border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-purple-400">
                  {personal.dsaSolved}
                </div>
                <div className="text-[11px] font-mono-code text-gray-400 mt-1 uppercase">
                  DSA PROBLEMS SOLVED
                </div>
              </div>

              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-pink-400">
                  {projects.length}
                </div>
                <div className="text-[11px] font-mono-code text-gray-400 mt-1 uppercase">
                  SOFTWARE PROJECTS
                </div>
              </div>
            </div>
          </CardSpotlight>
        </FloatingElement>
      </ScrollReveal>

      {/* 6. Quick Verified Profile Bar */}
      <ScrollReveal delay={250} className="pt-2">
        <div className="text-xs font-mono-code text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
          <span>// VERIFIED PROFILES & CHANNELS</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((item, idx) => (
            <MagneticHover key={idx} strength={0.2}>
              <a
                href={item.url}
                target={item.name !== 'Email' ? '_blank' : '_self'}
                rel="noreferrer"
                className="btn-magnetic flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#161824] hover:bg-[#202434] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-white font-mono-code text-xs transition-all shadow-sm group"
              >
                {item.icon}
                <span>{item.name}</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </MagneticHover>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};
