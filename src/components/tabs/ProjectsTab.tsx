import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { Project } from '../../data/portfolioData';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CardSpotlight } from '../effects/CardSpotlight';
import { FloatingElement } from '../effects/FloatingElement';
import { MagneticHover } from '../effects/MagneticHover';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import { ExternalLink, Sparkles, Layers, Info } from 'lucide-react';

export const ProjectsTab: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10 font-sans">
      {/* Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium">
        // projects.js : technical software, AI & data engineering projects
      </div>

      {/* Page Title & Declaration */}
      <ScrollReveal className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Projects Showcase
        </h1>
        <p className="font-mono-code text-xs text-purple-400">
          const projects = &#123; featured: [ ...top ], architectural: [ ...other ] &#125;
        </p>
      </ScrollReveal>

      {/* 1. FEATURED PROJECTS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-pink-400 font-bold border-b border-white/10 pb-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>FEATURED PROJECTS (CORE HIGHLIGHTS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <FloatingElement distance={3} delay={idx * 0.2}>
                <CardSpotlight className="ide-card p-6 flex flex-col justify-between space-y-5 rounded-2xl bg-[#0f111b] border border-white/15 relative group h-full shadow-lg">
                  {/* Top Bar: Icon + Category + Links */}
                  <div className="space-y-4">
                    {/* Visual Preview Placeholder Box */}
                    <div
                      className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.previewGradient} border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-400/50 transition-colors`}
                    >
                      <div className="flex items-center justify-between z-10">
                        <span className="text-3xl">{project.categoryIcon}</span>
                        <span className="font-mono-code text-[10px] font-bold text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/10 uppercase">
                          FEATURED
                        </span>
                      </div>
                      <div className="z-10 font-mono-code text-xs text-gray-300 font-medium">
                        &lt;{project.id} /&gt;
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-pink-400 font-bold">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <MagneticHover strength={0.2}>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 font-mono-code text-[10px] text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors border border-white/10 hover:border-cyan-400/40"
                          >
                            <span className="font-bold">GH</span>
                            <span>Code</span>
                          </a>
                        </MagneticHover>
                        {project.liveUrl && (
                          <MagneticHover strength={0.2}>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 font-mono-code text-[10px] text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/40 px-2.5 py-1 rounded transition-colors"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </MagneticHover>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    {project.features && (
                      <ul className="space-y-1.5 pt-1">
                        {project.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-xs font-mono-code text-gray-400 flex items-start gap-1.5"
                          >
                            <span className="text-cyan-400 shrink-0">✦</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer & Detail Trigger */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#181a26] text-gray-300 font-mono-code text-[10px] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded bg-[#181a26] text-gray-400 font-mono-code text-[10px]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/40 hover:bg-pink-900/60 border border-pink-500/40 text-pink-300 font-mono-code text-xs font-bold transition-all self-start sm:self-auto shrink-0"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                  </div>
                </CardSpotlight>
              </FloatingElement>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 2. OTHER PROJECTS SECTION */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>OTHER PROJECTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <CardSpotlight className="ide-card p-6 flex flex-col justify-between space-y-4 rounded-xl bg-[#0f111b] border border-white/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{project.categoryIcon}</span>
                      <span className="font-mono-code text-[10px] uppercase tracking-wider text-purple-400 font-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MagneticHover strength={0.15}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 font-mono-code text-[10px] text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors border border-white/5"
                        >
                          <span className="font-bold">GH</span>
                        </a>
                      </MagneticHover>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#181a26] text-gray-300 font-mono-code text-[10px] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] font-mono-code text-cyan-400 hover:text-cyan-300 underline shrink-0"
                  >
                    View Details
                  </button>
                </div>
              </CardSpotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Trigger */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
