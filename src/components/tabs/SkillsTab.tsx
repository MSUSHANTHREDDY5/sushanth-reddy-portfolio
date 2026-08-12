import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CardSpotlight } from '../effects/CardSpotlight';
import { Code2, Server, Database, Brain, Wrench, BookMarked, Layers } from 'lucide-react';

export const SkillsTab: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    'PROGRAMMING LANGUAGES': <Code2 className="w-4 h-4 text-cyan-400" />,
    'WEB TECHNOLOGIES': <Layers className="w-4 h-4 text-pink-400" />,
    'BACKEND & APIS': <Server className="w-4 h-4 text-emerald-400" />,
    'DATABASES': <Database className="w-4 h-4 text-purple-400" />,
    'AI / ML & COMPUTER VISION': <Brain className="w-4 h-4 text-yellow-400" />,
    'DEVELOPER TOOLS': <Wrench className="w-4 h-4 text-blue-400" />,
    'COMPUTER SCIENCE / PROBLEM SOLVING': <BookMarked className="w-4 h-4 text-pink-400" />,
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium">
        // skills.json -- verified tech stack & CS core subjects
      </div>

      {/* Page Title & Status */}
      <ScrollReveal className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Skills & Technologies
        </h1>
        <p className="font-mono-code text-xs text-yellow-400">
          &#123; "status": "always_learning", "mode": "building" &#125;
        </p>
      </ScrollReveal>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group, idx) => (
          <ScrollReveal key={idx} delay={idx * 80}>
            <CardSpotlight className="ide-card p-5 rounded-xl bg-[#0f111b] border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all h-full">
              {/* Category Header */}
              <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-gray-300 tracking-wider uppercase border-b border-white/5 pb-3">
                {categoryIcons[group.title] || <Code2 className="w-4 h-4 text-cyan-400" />}
                <span>{group.title}</span>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 z-20">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#181a28] text-gray-200 font-mono-code text-xs border border-white/10 hover:border-cyan-400/50 hover:text-white transition-all shadow-sm hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardSpotlight>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
