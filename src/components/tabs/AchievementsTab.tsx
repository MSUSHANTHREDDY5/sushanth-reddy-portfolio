import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CardSpotlight } from '../effects/CardSpotlight';
import { FloatingElement } from '../effects/FloatingElement';
import { MagneticHover } from '../effects/MagneticHover';
import { Award, Code2, GraduationCap, ExternalLink, Trophy, ShieldCheck, Terminal } from 'lucide-react';

export const AchievementsTab: React.FC = () => {
  const { achievements, certifications, education } = PORTFOLIO_DATA;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10 font-sans">
      {/* Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium">
        // achievements.ts : verified competitive coding, academic performance & milestones
      </div>

      {/* Page Title */}
      <ScrollReveal className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Achievements & Accomplishments
        </h1>
        <p className="font-mono-code text-xs text-gray-400">
          // competitive programming · academic excellence · practical technical milestones
        </p>
      </ScrollReveal>

      {/* 1. COMPETITIVE PROGRAMMING SECTION */}
      <ScrollReveal delay={100} className="space-y-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>COMPETITIVE PROGRAMMING & ALGORITHMIC PROBLEM SOLVING</span>
        </div>

        <FloatingElement distance={2.5}>
          <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-cyan-500/30 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-cyan-300">
                    315+ DSA Problems Solved
                  </div>
                  <div className="text-xs font-mono-code text-gray-400 uppercase">
                    ACTIVE PROBLEM SOLVER & COMPETITIVE CODER
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {achievements.competitiveProfiles.map((prof, idx) => (
                <MagneticHover key={idx} strength={0.15}>
                  <a
                    href={prof.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-magnetic flex flex-col justify-between p-3.5 rounded-lg bg-[#141724] border border-white/10 hover:border-cyan-400/50 hover:bg-[#1b1f32] transition-all h-full"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-xs font-bold text-white uppercase">
                        {prof.platform}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="mt-2 space-y-0.5">
                      <div className="font-mono-code text-[11px] text-gray-400">
                        @{prof.handle}
                      </div>
                      <div className="font-mono-code text-[10px] text-emerald-400 font-medium">
                        {prof.solved}
                      </div>
                    </div>
                  </a>
                </MagneticHover>
              ))}
            </div>
          </CardSpotlight>
        </FloatingElement>
      </ScrollReveal>

      {/* 2. ACADEMIC EXCELLENCE SECTION */}
      <ScrollReveal delay={150} className="space-y-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-emerald-400 font-bold border-b border-white/10 pb-2">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>ACADEMIC EXCELLENCE</span>
        </div>

        <FloatingElement distance={2.5} delay={0.15}>
          <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-emerald-500/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono-code text-gray-400">
                  {education.degree} ({education.duration})
                </p>
              </div>
              <div className="font-mono-code text-sm font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-3.5 py-1.5 rounded-lg self-start sm:self-auto">
                CGPA: {education.cgpa}
              </div>
            </div>

            <p className="text-xs font-mono-code text-gray-300 leading-relaxed">
              Consistently maintaining top academic performance in Computer Science and Engineering while engaging in software development and technical projects.
            </p>
          </CardSpotlight>
        </FloatingElement>
      </ScrollReveal>

      {/* 3. VERIFIED MILESTONES SECTION */}
      <ScrollReveal delay={200} className="space-y-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-pink-400 font-bold border-b border-white/10 pb-2">
          <Award className="w-4 h-4 text-pink-400" />
          <span>TECHNICAL MILESTONES</span>
        </div>

        <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-white/10 space-y-3">
          {achievements.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-lg bg-[#141724] border border-white/5 text-xs font-mono-code text-gray-300 hover:border-pink-500/30 transition-colors"
            >
              <Trophy className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </CardSpotlight>
      </ScrollReveal>

      {/* 4. CERTIFICATIONS SECTION */}
      <ScrollReveal delay={250} className="space-y-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-purple-400 font-bold border-b border-white/10 pb-2">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>VERIFIED CERTIFICATIONS</span>
        </div>

        <CardSpotlight className="ide-card p-6 rounded-xl bg-[#0f111b] border border-white/10 space-y-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-lg bg-[#141724] border border-white/5 text-xs font-mono-code text-gray-300"
            >
              <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </CardSpotlight>
      </ScrollReveal>
    </div>
  );
};
