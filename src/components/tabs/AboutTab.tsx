import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CardSpotlight } from '../effects/CardSpotlight';
import { FloatingElement } from '../effects/FloatingElement';
import { GraduationCap, Target, Cpu, BookOpen, Sparkles, Rocket } from 'lucide-react';

export const AboutTab: React.FC = () => {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium">
        &lt;!-- about.html - Sushanth Reddy --&gt;
      </div>

      {/* Page Title */}
      <ScrollReveal className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          About & Profile
        </h1>
        <p className="font-mono-code text-xs text-gray-400">
          // academic background · technical direction · career objectives
        </p>
      </ScrollReveal>

      {/* Main Personal Bio Card */}
      <ScrollReveal delay={100}>
        <FloatingElement distance={2.5}>
          <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-white/10 space-y-4 leading-relaxed text-sm md:text-base text-gray-300">
            {personal.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </CardSpotlight>
        </FloatingElement>
      </ScrollReveal>

      {/* CURRENT FOCUS Section */}
      <ScrollReveal delay={150} className="space-y-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-2">
          <Target className="w-4 h-4 text-cyan-400" />
          <span>CURRENT FOCUS & TECHNICAL DIRECTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {personal.currentFocus.map((item, idx) => {
            const icons = [
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />,
              <Rocket className="w-4 h-4 text-pink-400 shrink-0" />,
              <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />,
              <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />,
            ];
            return (
              <CardSpotlight key={idx} className="rounded-lg bg-[#0f111b] border border-white/5 hover:border-cyan-500/30 transition-all text-xs font-mono-code text-gray-300 hover:translate-x-1">
                <div className="flex items-center gap-3 p-3.5">
                  {icons[idx % icons.length]}
                  <span>{item}</span>
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </ScrollReveal>

      {/* ACADEMIC BACKGROUND Section */}
      <ScrollReveal delay={200} className="space-y-4 pt-2">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-emerald-400 font-bold border-b border-white/10 pb-2">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>ACADEMIC BACKGROUND</span>
        </div>

        <FloatingElement distance={2.5}>
          <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-white/10 space-y-4 hover:border-emerald-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono-code text-gray-400">
                  {education.location}
                </p>
              </div>
              <div className="font-mono-code text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full self-start sm:self-auto">
                {education.duration}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-cyan-300 font-mono-code">
                {education.degree}
              </p>
              <div className="flex items-center gap-2 font-mono-code text-sm">
                <span className="text-gray-400">CGPA:</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-0.5 rounded">
                  {education.cgpa}
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="pt-2">
              <p className="text-xs font-mono-code text-gray-400 mb-2 uppercase">
                // RELEVANT COURSEWORK:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#161824] text-gray-300 font-mono-code text-xs border border-white/5 hover:border-cyan-400/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </CardSpotlight>
        </FloatingElement>
      </ScrollReveal>
    </div>
  );
};
