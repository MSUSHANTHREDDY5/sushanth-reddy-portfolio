import { PORTFOLIO_DATA } from './portfolioData';

export interface CopilotResponse {
  answer: string;
  action?: {
    type: 'nav' | 'link';
    label: string;
    target: string;
  };
  contextSubject?: string;
}

export function queryCopilot(
  userQuery: string,
  lastSubject?: string
): CopilotResponse {
  const query = userQuery.trim().toLowerCase();

  const has = (...terms: string[]) => terms.some((t) => query.includes(t));

  // 1. INTERNSHIP / RECRUITER QUERY: "Why should I consider Sushanth for an internship?"
  if (
    has('internship', 'hire', 'consider', 'why consider', 'why hire', 'recruiter', 'candidate', 'software engineering opportunity')
  ) {
    return {
      answer: `Key reasons to consider Sushanth Reddy for a Software Engineering Internship:\n\n1. 🎓 Strong Academic Foundation: Maintains a 9.73 CGPA in B.Tech CS at VNR VJIET with core depth in DSA, OOP, DBMS, OS, and Networks.\n2. ⚡ Proven Problem Solver: Solved 315+ Data Structures & Algorithms problems across LeetCode, CodeChef, and Codeforces.\n3. 🛠️ Practical Full-Stack Experience: Built production-style MERN applications (EcoTrack AI) and Agentic AI workflows (FanBase Analyzer).\n4. 🧠 Multi-Disciplinary Learner: Hands-on with PyTorch, MobileNetV2, EasyOCR, Node.js, and FastAPI.`,
      action: {
        type: 'nav',
        label: '📄 Open Official Resume (Google Drive)',
        target: PORTFOLIO_DATA.personal.resumePdf,
      },
      contextSubject: 'internship',
    };
  }

  // 2. RESUME / CV ENQUIRIES
  if (has('resume', 'cv', 'bio data', 'curriculum vitae', 'download resume', 'see resume', 'get resume')) {
    return {
      answer: `Sushanth's official resume is hosted on Google Drive. Click below to view or download it.`,
      action: {
        type: 'link',
        label: '📄 Open Official Resume (Google Drive)',
        target: PORTFOLIO_DATA.personal.resumePdf,
      },
      contextSubject: 'resume',
    };
  }

  // 3. WORK EXPERIENCE / EMPLOYMENT / FRESHER STATUS
  if (
    has('work experience', 'experience', 'company', 'companies', 'job', 'employment', 'employer', 'client', 'worked for', 'where does he work')
  ) {
    return {
      answer: `Sushanth Reddy is a FRESHER and full-time Computer Science student (B.Tech 2024–2028 @ VNR VJIET) with a 9.73 CGPA.\n\nHe is seeking software engineering internships and entry-level engineering roles. His practical proof of work includes 315+ DSA problems solved and shipped full-stack/AI projects like EcoTrack AI and FanBase Analyzer.`,
      action: {
        type: 'nav',
        label: '🎓 Open Education & Profile',
        target: 'about',
      },
      contextSubject: 'fresher',
    };
  }

  // 4. CGPA & EDUCATION
  if (
    has('cgpa', 'grade', 'marks', 'gpa', 'score', 'percentage') ||
    (has('study', 'college', 'university', 'institute', 'graduation', 'degree', 'education', 'coursework', 'subject') &&
      !has('project', 'app', 'system'))
  ) {
    const ed = PORTFOLIO_DATA.education;
    if (has('cgpa', 'grade', 'marks', 'gpa', 'score')) {
      return {
        answer: `Sushanth's academic CGPA is ${ed.cgpa} in B.Tech Computer Science at ${ed.institution}, Hyderabad (2024–2028).`,
        action: {
          type: 'nav',
          label: '🎓 View Academic Profile',
          target: 'about',
        },
        contextSubject: 'education',
      };
    }

    return {
      answer: `Academic Profile:\n• Degree: ${ed.degree}\n• Institution: ${ed.institution}, ${ed.location}\n• Duration: ${ed.duration}\n• CGPA: ${ed.cgpa}\n• Core Subjects: Data Structures & Algorithms, OOPs, DBMS, Operating Systems, Computer Networks.`,
      action: {
        type: 'nav',
        label: '🎓 Open About & Education',
        target: 'about',
      },
      contextSubject: 'education',
    };
  }

  // 5. PROJECT CONTEXT & SPECIFIC PROJECTS
  if (has('ecotrack', 'eco track', 'ocr', 'carbon', 'receipt') || lastSubject === 'ecotrack-ai') {
    return {
      answer: `🌿 EcoTrack AI (Featured Project):\n\nA sustainability web platform that logs carbon footprints and processes uploaded receipt images using OCR.\n\nTech Stack: React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Python, FastAPI, PyTorch, MobileNetV2, EasyOCR, Chart.js.\n\nKey Features: Automated OCR receipt extraction, PyTorch image classification, and analytics dashboard.`,
      action: {
        type: 'nav',
        label: '⚡ Open Projects Showcase',
        target: 'projects',
      },
      contextSubject: 'ecotrack-ai',
    };
  }

  if (has('fanbase', 'fan base', 'reddit', 'n8n', 'celebrity') || lastSubject === 'fanbase-analyzer') {
    return {
      answer: `🤖 FanBase Analyzer (Featured Project):\n\nAn autonomous Agentic AI analysis system that evaluates engagement and sentiment between celebrity fan communities using Reddit data.\n\nTech Stack: n8n, OpenAI API, Reddit API, JavaScript, QuickChart API, Gmail API, Webhooks.`,
      action: {
        type: 'nav',
        label: '⚡ Open Projects Showcase',
        target: 'projects',
      },
      contextSubject: 'fanbase-analyzer',
    };
  }

  if (has('admission', 'demand forecasting', 'seat optimization', 'linear regression') || lastSubject === 'admission-forecasting') {
    return {
      answer: `📈 AI-Based Admission Demand Forecasting System:\n\nA MERN analytics system predicting branch admission demand and recommending seat allocation strategies using linear regression models.`,
      action: {
        type: 'nav',
        label: '⚡ Open Projects Showcase',
        target: 'projects',
      },
      contextSubject: 'admission-forecasting',
    };
  }

  if (has('project', 'projects', 'built', 'shipped', 'software apps')) {
    return {
      answer: `Sushanth has engineered 4 core software projects:\n\nFeatured Projects:\n1. 🌿 EcoTrack AI: Full-Stack carbon tracker with PyTorch & EasyOCR.\n2. 🤖 FanBase Analyzer: Agentic AI sentiment pipeline with n8n & OpenAI API.\n\nOther Projects:\n3. 📈 Admission Demand Forecasting System (MERN + Linear Regression)\n4. 🌌 Code Universe (C++/Python Data Processing)`,
      action: {
        type: 'nav',
        label: '⚡ Open Projects Showcase',
        target: 'projects',
      },
      contextSubject: 'projects',
    };
  }

  // 6. DSA & COMPETITIVE PROGRAMMING
  if (has('dsa', 'algorithm', 'problem', 'problems', 'leet', 'codechef', 'codeforces', 'competitive', 'coding')) {
    return {
      answer: `Sushanth actively practices Data Structures & Algorithms and competitive programming. He has solved ${PORTFOLIO_DATA.personal.dsaSolved} DSA problems across LeetCode, CodeChef, and Codeforces.`,
      action: {
        type: 'nav',
        label: '🏆 View Achievements',
        target: 'achievements',
      },
      contextSubject: 'dsa',
    };
  }

  // 7. TECHNICAL SKILLS / TECH STACK
  if (has('skill', 'skills', 'stack', 'technology', 'technologies', 'know', 'language', 'framework', 'database', 'tool')) {
    return {
      answer: `Technical Stack Summary:\n• Languages: C, C++, Python, JavaScript, Java, R\n• Web: HTML, CSS, Bootstrap, React, Vite, Tailwind CSS\n• Backend: Node.js, Express.js, FastAPI, REST APIs\n• Databases: MongoDB, MySQL\n• AI/ML: Machine Learning, Data Preprocessing, Agentic AI, PyTorch, MobileNetV2, EasyOCR\n• Tools: Git, GitHub, Postman, VS Code`,
      action: {
        type: 'nav',
        label: '⚙️ Open Skills Page',
        target: 'skills',
      },
      contextSubject: 'skills',
    };
  }

  // 8. CONTACT & SOCIAL PROFILES
  if (has('contact', 'reach', 'email', 'github', 'linkedin', 'leetcode', 'codechef', 'codeforces', 'location')) {
    const p = PORTFOLIO_DATA.personal;
    return {
      answer: `Verified Contact Channels:\n• Email: ${p.email}\n• Location: ${p.location}\n• GitHub: ${p.github}\n• LinkedIn: ${p.linkedin}\n• LeetCode: ${p.leetcode}\n• CodeChef: ${p.codechef}\n• Codeforces: ${p.codeforces}`,
      action: {
        type: 'nav',
        label: '✉️ Open Contact Page',
        target: 'contact',
      },
      contextSubject: 'contact',
    };
  }

  // DEFAULT / UNKNOWN
  return {
    answer: `I don't have verified information about that in Sushanth's portfolio data.\n\nI can answer questions about Sushanth's education (CGPA 9.73), projects, technical skills, DSA problem solving (315+ solved), profile links, or official resume.`,
    action: {
      type: 'link',
      label: '📄 Open Official Resume (Google Drive)',
      target: PORTFOLIO_DATA.personal.resumePdf,
    },
  };
}
