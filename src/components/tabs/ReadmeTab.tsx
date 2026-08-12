import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export const ReadmeTab: React.FC = () => {
  const { personal, education, skills } = PORTFOLIO_DATA;

  return (
    <div className="tab-view-container p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Header Name & Location */}
      <div className="space-y-3 border-b border-white/10 pb-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Sushanth Reddy
        </h1>

        <p className="font-mono-code text-sm text-gray-300">
          Computer Science Student @ {education.institution} · {personal.location} 🇮🇳
        </p>

        {/* Tech Pill Row */}
        <div className="flex flex-wrap gap-2 pt-1">
          {['C++', 'Python', 'React', 'Node.js', 'PyTorch'].map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-[#181a28] text-cyan-300 font-mono-code text-xs border border-cyan-800/40"
            >
              • {tech}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
          <span className="text-pink-400">💜</span> About
        </h2>

        <div className="p-5 rounded-xl bg-[#0f111b] border border-white/10 space-y-3 font-mono-code text-xs md:text-sm text-gray-300 leading-relaxed">
          <p>
            Hi, Sushanth here! I am a Computer Science student at VNR VJIET (CGPA {education.cgpa}) passionate about software engineering, competitive problem solving, full-stack application development, and AI/ML systems.
          </p>

          <div className="space-y-1.5 pt-2 text-xs">
            {personal.currentFocus.map((focus, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400">🚀</span>
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-display text-white">Stack</h2>

        <div className="p-5 rounded-xl bg-[#0f111b] border border-white/10 space-y-3">
          {skills.map((group, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs font-mono-code">
              <span className="w-48 text-gray-400 font-semibold shrink-0">
                {group.title}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-[#181a28] text-gray-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section with Verified Clickable Links */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-display text-white flex items-center justify-between">
          <span>Connect</span>
          <span className="text-xs font-mono-code text-cyan-400 font-normal">Verified Links</span>
        </h2>

        <div className="p-5 rounded-xl bg-[#0f111b] border border-white/10 space-y-2.5 font-mono-code text-xs text-gray-300">
          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">Email:</span>
            <a
              href={personal.emailMailto}
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.email}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">GitHub:</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.github}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">LinkedIn:</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.linkedin}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">LeetCode:</span>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.leetcode}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">CodeChef:</span>
            <a
              href={personal.codechef}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.codechef}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-24 text-gray-400">Codeforces:</span>
            <a
              href={personal.codeforces}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>{personal.codeforces}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Box */}
      <div className="p-5 rounded-xl bg-[#0b0c12] border border-white/10 space-y-2 font-mono-code text-xs text-gray-400">
        <div className="font-bold text-white flex items-center gap-1.5">
          <span>© Copyright & Usage</span>
        </div>
        <p className="leading-relaxed text-gray-400">
          This portfolio, including its design, layout, VS Code theme, AI chatbot, and all visual elements was created for <strong className="text-white">Sushanth Reddy</strong>. All rights reserved.
        </p>
      </div>

      {/* Footer Line */}
      <div className="pt-4 text-center font-mono-code text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 Sushanth Reddy · All rights reserved</span>
        <span>Made with 🤍 from Hyderabad, Telangana, India</span>
      </div>
    </div>
  );
};
