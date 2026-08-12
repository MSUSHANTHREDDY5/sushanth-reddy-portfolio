import React, { useEffect } from 'react';
import type { Project } from '../../data/portfolioData';
import { CardSpotlight } from '../effects/CardSpotlight';
import { X, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Lightbulb, Workflow } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-tab-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f111b] border border-white/15 shadow-2xl ide-card p-6 sm:p-8 space-y-6 font-sans text-gray-200 text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{project.categoryIcon}</span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-pink-400 font-bold">
                {project.category}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md bg-[#181a28] text-cyan-300 font-mono-code text-xs border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem Statement */}
        <CardSpotlight className="p-4 rounded-xl bg-[#141724] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-red-400 uppercase">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>Problem Statement</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{project.detail.problem}</p>
        </CardSpotlight>

        {/* Solution Summary */}
        <CardSpotlight className="p-4 rounded-xl bg-[#141724] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-emerald-400 uppercase">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Solution & Approach</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{project.detail.solution}</p>
        </CardSpotlight>

        {/* Key Features */}
        {project.features && (
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold text-cyan-400 uppercase tracking-wider">
              // Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-[#141724] border border-white/5 font-mono-code text-xs text-gray-300"
                >
                  <span className="text-pink-400 shrink-0 mt-0.5">✦</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture & How It Works */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-purple-400 uppercase">
            <Workflow className="w-4 h-4 text-purple-400" />
            <span>Architecture Overview</span>
          </div>
          <p className="text-gray-300 leading-relaxed font-mono-code text-xs p-3.5 rounded-lg bg-[#141724] border border-white/5">
            {project.detail.architecture}
          </p>
        </div>

        {/* Challenges & What I Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-yellow-400 uppercase">
              <Cpu className="w-4 h-4 text-yellow-400" />
              <span>Engineering Challenges</span>
            </div>
            <ul className="space-y-2">
              {project.detail.challenges.map((c, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg bg-[#141724] border border-white/5 font-mono-code text-xs text-gray-300 flex items-start gap-2"
                >
                  <span className="text-yellow-400 shrink-0">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-pink-400 uppercase">
              <Lightbulb className="w-4 h-4 text-pink-400" />
              <span>What I Learned</span>
            </div>
            <ul className="space-y-2">
              {project.detail.learned.map((l, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg bg-[#141724] border border-white/5 font-mono-code text-xs text-gray-300 flex items-start gap-2"
                >
                  <span className="text-pink-400 shrink-0">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs font-bold transition-colors border border-white/10"
            >
              <span className="font-bold">GH</span>
              <span>GitHub Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 font-mono-code text-xs font-bold transition-colors border border-cyan-500/40"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-mono-code text-xs transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
