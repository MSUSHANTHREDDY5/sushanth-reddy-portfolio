import React, { useState, useEffect, useRef } from 'react';
import { processCopilotQuery, getPageAwareSuggestions } from '../../data/copilotEngine';
import type { CopilotMode, CopilotAction } from '../../data/copilotEngine';
import {
  Sparkles,
  X,
  Send,
  Trash2,
  Briefcase,
  MessageSquare,
  Bot,
  User,
  ExternalLink,
  Loader2,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: CopilotAction[];
}

interface CopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (fileId: string) => void;
  activeFileId?: string;
}

export const CopilotDrawer: React.FC<CopilotDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeFileId = 'home',
}) => {
  const [mode, setMode] = useState<CopilotMode>('assistant');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hey! I'm Sushanth's Copilot ✦\n\nI know Sushanth's portfolio, projects, technical skills, education, achievements, and coding profiles.\n\nAsk me about his projects, technical decisions, DSA journey, AI/ML work, or suitability for an internship.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStatus, setThinkingStatus] = useState('Thinking...');
  const [lastSubject, setLastSubject] = useState<string | undefined>();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = getPageAwareSuggestions(activeFileId, mode);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isThinking) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsThinking(true);

    const statuses = ['Searching portfolio...', 'Analyzing technical context...', 'Generating response...'];
    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      statusIdx = (statusIdx + 1) % statuses.length;
      setThinkingStatus(statuses[statusIdx]);
    }, 250);

    setTimeout(() => {
      clearInterval(statusInterval);
      const res = processCopilotQuery(query, mode, activeFileId, lastSubject);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: res.answer,
        actions: res.actions,
      };

      setMessages((prev) => [...prev, botMsg]);
      if (res.contextSubject) setLastSubject(res.contextSubject);
      setIsThinking(false);
    }, 450);
  };

  const handleActionClick = (action: CopilotAction) => {
    if (action.type === 'link') {
      window.open(action.target, '_blank');
    } else {
      onNavigate(action.target);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Conversation cleared. Ask me anything about Sushanth's projects, skills, or experience!",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-tab-fade-in select-none">
      {/* Click Backdrop to Close */}
      <div className="flex-1" onClick={onClose} />

      {/* Main Drawer Panel */}
      <div className="w-full sm:w-[440px] h-full bg-[#0f111b] border-l border-white/15 shadow-2xl flex flex-col justify-between font-sans relative text-gray-200 z-10 ide-card">
        {/* 1. Header */}
        <div className="p-4 border-b border-white/10 bg-[#0b0c12]/90 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-500 text-black font-bold shadow-md">
                <Bot className="w-4 h-4 text-black" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                  <span>Sushanth's Copilot</span>
                  <span className="flex items-center gap-1 font-mono-code text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <div className="font-mono-code text-[11px] text-gray-400">
                  AI-powered portfolio assistant
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat History"
                aria-label="Clear chat history"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close Copilot panel"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 2. Mode Selector Bar (Q&A vs Recruiter) */}
          <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-[#141724] border border-white/5 font-mono-code text-[11px]">
            <button
              onClick={() => setMode('assistant')}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
                mode === 'assistant'
                  ? 'bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>💬 Q&A Assistant</span>
            </button>

            <button
              onClick={() => setMode('recruiter')}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
                mode === 'recruiter'
                  ? 'bg-purple-950/80 border border-purple-500/50 text-purple-300 font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>👔 Recruiter View</span>
            </button>
          </div>
        </div>

        {/* 3. Message Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 shrink-0 self-start mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-xl p-3.5 space-y-2.5 leading-relaxed shadow-sm font-sans ${
                  msg.sender === 'user'
                    ? 'bg-[#00f2fe] text-[#0b0c12] font-semibold self-end font-mono-code rounded-br-none'
                    : 'bg-[#151826] border border-white/10 text-gray-200 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {/* Interactive Action Buttons */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.actions.map((act, aIdx) => (
                      <button
                        key={aIdx}
                        onClick={() => handleActionClick(act)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-mono-code text-[11px] font-bold transition-all shadow-sm"
                      >
                        <span>{act.label}</span>
                        {act.type === 'link' ? <ExternalLink className="w-3 h-3" /> : <Sparkles className="w-3 h-3 text-cyan-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="p-1.5 rounded-lg bg-white/10 text-white shrink-0 self-start mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {/* Animated Thinking State */}
          {isThinking && (
            <div className="flex gap-2.5 items-center">
              <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-[#151826] border border-cyan-500/30 text-cyan-300 font-mono-code text-xs flex items-center gap-2">
                <span>{thinkingStatus}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 4. Suggestion Chips Bar */}
        <div className="px-4 py-2 bg-[#0b0c12]/80 border-t border-white/5 space-y-1.5 shrink-0">
          <div className="flex items-center justify-between font-mono-code text-[10px] text-gray-400">
            <span>// SUGGESTED PROMPTS ({mode.toUpperCase()})</span>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {suggestions.map((sug, sIdx) => (
              <button
                key={sIdx}
                onClick={() => handleSendMessage(sug)}
                className="px-2.5 py-1 rounded-md bg-[#161826] hover:bg-[#202434] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-300 font-mono-code text-[10px] transition-colors text-left truncate max-w-full"
              >
                ✦ {sug}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-[#0b0c12] border-t border-white/10 flex items-center gap-2 shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask Sushanth's Copilot (Ctrl + K)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-[#161826] border border-white/10 rounded-lg px-3 py-2 text-xs font-mono-code text-white focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || isThinking}
            aria-label="Send message to Copilot"
            className="p-2 rounded-lg bg-[#00f2fe] hover:bg-[#00d8e4] disabled:opacity-40 text-[#0b0c12] font-bold transition-all shadow-[0_0_10px_rgba(0,242,254,0.3)]"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
