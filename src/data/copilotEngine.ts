import { PORTFOLIO_DATA } from './portfolioData';

export type CopilotMode = 'assistant' | 'recruiter';

export interface CopilotAction {
  label: string;
  target: string;
  type: 'nav' | 'link';
}

export interface CopilotEngineResponse {
  answer: string;
  mode: CopilotMode;
  actions?: CopilotAction[];
  contextSubject?: string;
}

export function getPageAwareSuggestions(activeFileId: string, mode: CopilotMode): string[] {
  if (mode === 'recruiter') {
    return [
      'Why should I interview Sushanth?',
      'Give me a 30-second recruiter summary.',
      'What projects demonstrate full-stack ability?',
      'What evidence of problem-solving does he have?',
      'What is his academic performance & CGPA?',
    ];
  }

  // Assistant Mode - Page Aware Suggestions
  switch (activeFileId) {
    case 'projects':
      return [
        'Explain EcoTrack AI technically.',
        'What problem does FanBase Analyzer solve?',
        'Compare EcoTrack AI and FanBase Analyzer.',
        'What technologies were used in Admission Forecasting?',
      ];
    case 'skills':
      return [
        'Which skills does Sushanth use most?',
        'What is his MERN stack depth?',
        'Tell me about his AI/ML & Computer Vision skills.',
        'Which databases does he work with?',
      ];
    case 'achievements':
      return [
        'What coding achievements does Sushanth have?',
        'Tell me about his 315+ DSA problem count.',
        'What is his academic CGPA at VNR VJIET?',
        'Show me his competitive coding profile links.',
      ];
    case 'about':
      return [
        'Summarize Sushanth\'s academic background.',
        'What is his current technical direction?',
        'Why is he seeking software engineering internships?',
      ];
    case 'contact':
      return [
        'How can I contact Sushanth?',
        'Where can I download his official resume?',
        'What are his verified social profile links?',
      ];
    default:
      return [
        'Why should I consider Sushanth for an internship?',
        'What projects has Sushanth built?',
        'What is his tech stack?',
        'What are his DSA achievements?',
        'Can I view Sushanth\'s Resume?',
      ];
  }
}

export function processCopilotQuery(
  userQuery: string,
  mode: CopilotMode,
  activeFileId: string,
  lastSubject?: string
): CopilotEngineResponse {
  const query = userQuery.trim().toLowerCase();
  const has = (...terms: string[]) => terms.some((t) => query.includes(t));

  // =========================================================================
  // MODE 1: RECRUITER VIEW MODE
  // =========================================================================
  if (mode === 'recruiter') {
    if (has('30-second', '30 second', 'summary', 'quick summary', 'pitch', 'who is sushanth')) {
      return {
        answer: `👔 **30-Second Recruiter Summary**:\n\nSushanth Reddy is a high-performing Computer Science undergraduate at VNR VJIET, Hyderabad (2024–2028) maintaining a **9.73 CGPA**.\n\nHe has solved **315+ DSA problems** across LeetCode/CodeChef/Codeforces and shipped full-stack AI applications like **EcoTrack AI** (MERN + PyTorch OCR) and **FanBase Analyzer** (Agentic AI with n8n/OpenAI).\n\nHe is seeking Software Engineering Internships with immediate availability.`,
        mode: 'recruiter',
        actions: [
          { label: '📄 Open Official Resume', target: PORTFOLIO_DATA.personal.resumePdf, type: 'link' },
          { label: '⚡ View Featured Projects', target: 'projects', type: 'nav' },
        ],
      };
    }

    if (has('why interview', 'why consider', 'why hire', 'internship', 'candidate')) {
      return {
        answer: `👔 **Why Interview Sushanth Reddy?**\n\n1. **Top Academic Standing**: 9.73 CGPA in B.Tech CS at VNR VJIET with core foundation in Data Structures, OS, DBMS, and Computer Networks.\n2. **Proven Problem-Solving Capability**: 315+ DSA problems solved on competitive programming platforms.\n3. **Practical Production Software**: Hands-on full-stack development (React, Node.js, Express, MongoDB) integrated with Python microservices (FastAPI, PyTorch, MobileNetV2, EasyOCR).\n4. **Autonomous AI Workflows**: Built agentic automation pipelines using n8n and OpenAI APIs.`,
        mode: 'recruiter',
        actions: [
          { label: '📄 Download Official Resume', target: PORTFOLIO_DATA.personal.resumePdf, type: 'link' },
          { label: '🏆 View Achievements', target: 'achievements', type: 'nav' },
        ],
      };
    }
  }

  // =========================================================================
  // MODE 2: DEFAULT ASSISTANT Q&A MODE
  // =========================================================================

  // Page-aware "What is this project?" handler
  if (activeFileId === 'projects' && (has('this project', 'current project', 'what is this') || !userQuery)) {
    return {
      answer: `🌿 **EcoTrack AI** (Featured Project):\nA full-stack carbon footprint tracking platform using PyTorch & EasyOCR.\n\n🤖 **FanBase Analyzer** (Featured Project):\nAutonomous Agentic AI sentiment engine connecting n8n, OpenAI API, and Reddit.\n\nClick any project card or "View Details" to see complete technical breakdowns!`,
      mode: 'assistant',
      actions: [
        { label: '⚡ Explore Projects Showcase', target: 'projects', type: 'nav' },
      ],
    };
  }

  // Specific Project: EcoTrack AI
  if (has('ecotrack', 'eco track', 'ocr', 'carbon', 'receipt') || lastSubject === 'ecotrack-ai') {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === 'ecotrack-ai');
    return {
      answer: `🌿 **EcoTrack AI** (Featured Project)\n\n**Problem**:\n${proj?.detail.problem}\n\n**Architecture & Stack**:\nReact · Vite · Tailwind CSS · Node.js · Express.js · MongoDB · Python · FastAPI · PyTorch · MobileNetV2 · EasyOCR · Chart.js\n\n**Key Features**:\n• Receipt text extraction via EasyOCR.\n• Image classification via PyTorch MobileNetV2.\n• Carbon emissions analytics with Chart.js.`,
      mode: 'assistant',
      actions: [
        { label: '⚡ View EcoTrack AI Details', target: 'projects', type: 'nav' },
        { label: 'GH Open GitHub Code', target: proj?.githubUrl || PORTFOLIO_DATA.personal.github, type: 'link' },
      ],
      contextSubject: 'ecotrack-ai',
    };
  }

  // Specific Project: FanBase Analyzer
  if (has('fanbase', 'fan base', 'reddit', 'n8n', 'celebrity') || lastSubject === 'fanbase-analyzer') {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === 'fanbase-analyzer');
    return {
      answer: `🤖 **FanBase Analyzer** (Featured Project)\n\n**Problem**:\n${proj?.detail.problem}\n\n**Architecture & Stack**:\nn8n · OpenAI API · Reddit API · JavaScript · QuickChart API · Gmail API · Webhooks\n\n**Key Features**:\n• Automated Reddit post/comment webhooks.\n• Multi-class sentiment scoring with OpenAI LLMs.\n• QuickChart comparative visual report generation.`,
      mode: 'assistant',
      actions: [
        { label: '⚡ View FanBase Analyzer', target: 'projects', type: 'nav' },
        { label: 'GH Open GitHub Code', target: proj?.githubUrl || PORTFOLIO_DATA.personal.github, type: 'link' },
      ],
      contextSubject: 'fanbase-analyzer',
    };
  }

  // Projects Overview
  if (has('project', 'projects', 'built', 'shipped', 'software apps')) {
    return {
      answer: `Sushanth has engineered 4 core software projects:\n\n**Featured Projects**:\n1. 🌿 **EcoTrack AI**: Full-stack carbon tracker (React, Node.js, FastAPI, PyTorch, EasyOCR).\n2. 🤖 **FanBase Analyzer**: Agentic AI sentiment engine (n8n, OpenAI, Reddit API, QuickChart).\n\n**Other Projects**:\n3. 📈 **Admission Demand Forecasting**: MERN + Linear Regression.\n4. 🌌 **Code Universe**: C++ / Python data processing utilities.`,
      mode: 'assistant',
      actions: [
        { label: '⚡ Open Projects Showcase', target: 'projects', type: 'nav' },
      ],
      contextSubject: 'projects',
    };
  }

  // Resume Q&A
  if (has('resume', 'cv', 'bio data', 'curriculum vitae', 'download resume', 'see resume', 'get resume')) {
    return {
      answer: `Sushanth's official resume is hosted on Google Drive. It includes his 9.73 CGPA at VNR VJIET, 315+ DSA problem solved count, MERN/FastAPI/PyTorch project details, and contact info.`,
      mode: 'assistant',
      actions: [
        { label: '📄 Open Official Resume (Google Drive)', target: PORTFOLIO_DATA.personal.resumePdf, type: 'link' },
      ],
      contextSubject: 'resume',
    };
  }

  // DSA & Competitive Programming
  if (has('dsa', 'algorithm', 'problem', 'problems', 'leet', 'codechef', 'codeforces', 'competitive', 'coding')) {
    return {
      answer: `🏆 **DSA & Competitive Programming**:\n\nSushanth has solved **315+ Data Structures & Algorithms problems** across LeetCode, CodeChef, and Codeforces, maintaining strong proficiency in arrays, trees, graphs, dynamic programming, and algorithm optimization.`,
      mode: 'assistant',
      actions: [
        { label: '🏆 View Achievements Page', target: 'achievements', type: 'nav' },
      ],
      contextSubject: 'dsa',
    };
  }

  // Technical Skills
  if (has('skill', 'skills', 'stack', 'technology', 'technologies', 'know', 'language', 'framework', 'database', 'tool')) {
    return {
      answer: `⚙️ **Verified Technical Stack**:\n\n• **Languages**: C, C++, Python, JavaScript, Java, R\n• **Web**: HTML, CSS, Bootstrap, React, Vite, Tailwind CSS\n• **Backend**: Node.js, Express.js, FastAPI, REST APIs\n• **Databases**: MongoDB, MySQL\n• **AI/ML & CV**: PyTorch, MobileNetV2, EasyOCR, Agentic AI, n8n\n• **Tools**: Git, GitHub, Postman, VS Code`,
      mode: 'assistant',
      actions: [
        { label: '⚙️ Open Skills Page', target: 'skills', type: 'nav' },
      ],
      contextSubject: 'skills',
    };
  }

  // Education / CGPA
  if (has('education', 'college', 'vnr', 'vjiet', 'cgpa', 'degree', 'gpa', 'university', 'academic')) {
    const ed = PORTFOLIO_DATA.education;
    return {
      answer: `🎓 **Academic Profile**:\n\n• **Degree**: ${ed.degree}\n• **Institution**: ${ed.institution}, ${ed.location}\n• **Duration**: ${ed.duration}\n• **CGPA**: **${ed.cgpa}**\n• **Coursework**: Data Structures, OOP, DBMS, Operating Systems, Computer Networks.`,
      mode: 'assistant',
      actions: [
        { label: '🎓 View Academic Details', target: 'about', type: 'nav' },
      ],
      contextSubject: 'education',
    };
  }

  // Default fallback answer
  return {
    answer: `I don't have that specific detail in Sushanth's portfolio data yet.\n\nI can answer questions about Sushanth's projects (EcoTrack AI, FanBase Analyzer), technical stack, education (CGPA 9.73 at VNR VJIET), 315+ DSA problem count, or official resume.`,
    mode: 'assistant',
    actions: [
      { label: '📄 View Official Resume', target: PORTFOLIO_DATA.personal.resumePdf, type: 'link' },
    ],
  };
}
