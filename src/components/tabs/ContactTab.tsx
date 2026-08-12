import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScrollReveal } from '../effects/ScrollReveal';
import { MagneticHover } from '../effects/MagneticHover';
import {
  Mail,
  Code,
  Terminal,
  MapPin,
  Send,
  Award,
  ExternalLink,
  FileDown,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const ContactTab: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'fallback'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      errors.message = 'Message content is required.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xdenaqor';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Contact Inquiry',
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage("✓ Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setValidationErrors({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        let errMsg = '✕ Unable to send message. Please try again.';
        if (response.status === 404 || errorData.error === 'Form not found') {
          errMsg = `✕ Formspree Error (404 Not Found): Endpoint (${endpoint}) is not active. Please check your Formspree dashboard.`;
        } else if (errorData.error) {
          errMsg = `✕ Formspree Error: ${errorData.error}`;
        }
        setStatus('error');
        setStatusMessage(errMsg);
      }
    } catch (err) {
      console.error('Form submission network failure:', err);
      executeMailtoFallback('✕ Network error contacting Formspree. Opening your email client as fallback...');
    } finally {
      setIsSubmitting(false);
    }
  };

  const executeMailtoFallback = (noticeText: string) => {
    setStatus('fallback');
    setStatusMessage(noticeText);

    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const socialLinks = [
    {
      name: 'OFFICIAL RESUME',
      handle: 'Sushanth_Reddy_Resume.pdf (Google Drive)',
      icon: <FileDown className="w-4 h-4 text-pink-400" />,
      url: personal.resumePdf,
    },
    {
      name: 'EMAIL',
      handle: personal.email,
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      url: personal.emailMailto,
    },
    {
      name: 'LINKEDIN',
      handle: 'linkedin.com/in/sushanth-reddy-m',
      icon: <span className="font-mono-code text-xs font-bold text-cyan-400">IN</span>,
      url: personal.linkedin,
    },
    {
      name: 'GITHUB',
      handle: 'github.com/MSUSHANTHREDDY5',
      icon: <span className="font-mono-code text-xs font-bold text-gray-300">GH</span>,
      url: personal.github,
    },
    {
      name: 'LEETCODE',
      handle: 'leetcode.com/u/sushanthreddy5/',
      icon: <Code className="w-4 h-4 text-yellow-400" />,
      url: personal.leetcode,
    },
    {
      name: 'CODECHEF',
      handle: 'codechef.com/users/sushanthreddy5',
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
      url: personal.codechef,
    },
    {
      name: 'CODEFORCES',
      handle: 'codeforces.com/profile/sushanthreddy5',
      icon: <Award className="w-4 h-4 text-pink-400" />,
      url: personal.codeforces,
    },
    {
      name: 'LOCATION',
      handle: personal.location,
      icon: <MapPin className="w-4 h-4 text-red-400" />,
      url: '#',
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Code Header Comment */}
      <div className="font-mono-code text-xs md:text-sm text-emerald-400 font-medium">
        /* contact.css -- let's build something */
      </div>

      {/* Page Title */}
      <ScrollReveal className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Contact
        </h1>
        <p className="font-mono-code text-xs text-gray-400">
          // open for software engineering opportunities, technical discussions & collabs
        </p>
      </ScrollReveal>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: FIND ME ON */}
        <ScrollReveal delay={100} className="space-y-4">
          <div className="font-mono-code text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center justify-between">
            <span>// FIND ME ON</span>
            <span className="text-[10px] text-gray-500 font-normal">Clickable verified links</span>
          </div>

          <div className="space-y-2.5">
            {socialLinks.map((item, idx) => (
              <MagneticHover key={idx} strength={0.12}>
                <a
                  href={item.url}
                  target={item.name !== 'EMAIL' && item.url !== '#' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="btn-magnetic flex items-center justify-between p-3.5 rounded-xl bg-[#0f111b] border border-white/10 hover:border-cyan-400/50 hover:bg-[#151826] transition-all group shadow-sm w-full"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 shrink-0">
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="font-mono-code text-[11px] font-bold text-white uppercase">
                        {item.name}
                      </div>
                      <div className="font-mono-code text-xs text-gray-400 group-hover:text-cyan-300 transition-colors truncate max-w-[220px] sm:max-w-[260px]">
                        {item.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>
              </MagneticHover>
            ))}
          </div>
        </ScrollReveal>

        {/* Right Column: SEND A MESSAGE */}
        <ScrollReveal delay={150} className="space-y-4">
          <div className="font-mono-code text-xs uppercase tracking-wider text-cyan-400 font-bold">
            // SEND A MESSAGE
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl bg-[#0f111b] border border-white/10 space-y-4 backdrop-blur-md ide-card"
          >
            {/* Success Banner */}
            {status === 'success' && (
              <div className="p-3.5 rounded-lg bg-emerald-950/70 border border-emerald-500/60 text-emerald-300 text-xs font-mono-code flex items-start gap-2 animate-tab-fade-in shadow-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Fallback Banner */}
            {status === 'fallback' && (
              <div className="p-3.5 rounded-lg bg-cyan-950/70 border border-cyan-500/60 text-cyan-300 text-xs font-mono-code flex items-start gap-2 animate-tab-fade-in shadow-md">
                <AlertTriangle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="p-3.5 rounded-lg bg-red-950/70 border border-red-500/60 text-red-300 text-xs font-mono-code flex items-start gap-2 animate-tab-fade-in shadow-md">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{statusMessage}</span>
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-1">
              <label className="block font-mono-code text-xs text-pink-400">
                // YOUR_NAME *
              </label>
              <input
                type="text"
                disabled={isSubmitting}
                placeholder="string"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (validationErrors.name) setValidationErrors({ ...validationErrors, name: undefined });
                }}
                className={`w-full bg-[#161826] border rounded-lg px-3.5 py-2.5 text-xs font-mono-code text-gray-200 focus:outline-none transition-colors ${
                  validationErrors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                }`}
              />
              {validationErrors.name && (
                <p className="text-[10px] font-mono-code text-red-400">{validationErrors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="block font-mono-code text-xs text-pink-400">
                // YOUR_EMAIL *
              </label>
              <input
                type="email"
                disabled={isSubmitting}
                placeholder="string@domain.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (validationErrors.email) setValidationErrors({ ...validationErrors, email: undefined });
                }}
                className={`w-full bg-[#161826] border rounded-lg px-3.5 py-2.5 text-xs font-mono-code text-gray-200 focus:outline-none transition-colors ${
                  validationErrors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                }`}
              />
              {validationErrors.email && (
                <p className="text-[10px] font-mono-code text-red-400">{validationErrors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="space-y-1">
              <label className="block font-mono-code text-xs text-gray-400">
                // SUBJECT (optional)
              </label>
              <input
                type="text"
                disabled={isSubmitting}
                placeholder="string"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#161826] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs font-mono-code text-gray-200 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label className="block font-mono-code text-xs text-pink-400">
                // MESSAGE *
              </label>
              <textarea
                rows={4}
                disabled={isSubmitting}
                placeholder="&quot;&quot;&quot;your message content&quot;&quot;&quot;"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (validationErrors.message) setValidationErrors({ ...validationErrors, message: undefined });
                }}
                className={`w-full bg-[#161826] border rounded-lg px-3.5 py-2.5 text-xs font-mono-code text-gray-200 focus:outline-none resize-none transition-colors ${
                  validationErrors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                }`}
              />
              {validationErrors.message && (
                <p className="text-[10px] font-mono-code text-red-400">{validationErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <MagneticHover strength={0.15}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-magnetic btn-ripple w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00f2fe] hover:bg-[#00d8e4] disabled:opacity-50 text-[#0b0c12] font-mono-code font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0b0c12]" />
                    <span>⚡ SUBMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>⚡ SEND_MESSAGE()</span>
                  </>
                )}
              </button>
            </MagneticHover>

            <p className="text-[10px] font-mono-code text-gray-500 text-center">
              // Direct email: {personal.email}
            </p>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
};
