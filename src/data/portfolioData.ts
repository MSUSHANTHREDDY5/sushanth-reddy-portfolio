export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  learned: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryIcon: string;
  isFeatured: boolean;
  description: string;
  technologies: string[];
  features?: string[];
  githubUrl: string;
  liveUrl?: string;
  type: string;
  previewGradient: string;
  detail: ProjectDetail;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    primaryTitle: string;
    headline: string;
    roles: string[];
    location: string;
    tagline: string;
    heroIntro: string;
    aboutBio: string[];
    currentFocus: string[];
    cgpa: string;
    dsaSolved: string;
    email: string;
    emailMailto: string;
    github: string;
    linkedin: string;
    leetcode: string;
    codechef: string;
    codeforces: string;
    resumePdf: string;
    avatarUrl: string | null;
  };
  education: Education;
  projects: Project[];
  skills: SkillCategory[];
  achievements: {
    dsaSolved: string;
    items: string[];
    competitiveProfiles: {
      platform: string;
      handle: string;
      url: string;
      solved: string;
    }[];
  };
  certifications: string[];
  copilotSuggestions: string[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Sushanth Reddy",
    primaryTitle: "Computer Science Undergraduate",
    headline:
      "Computer Science undergraduate at VNR VJIET building full-stack applications, exploring AI/ML systems, and solving algorithmic problems.",
    roles: [
      "Full-Stack Web Engineer",
      "AI/ML Systems Learner",
      "Competitive Programmer",
      "CS Undergrad @ VNR VJIET"
    ],
    location: "Hyderabad, Telangana, India",
    tagline:
      "Computer Science undergraduate at VNR VJIET building full-stack applications, exploring AI/ML systems, and solving algorithmic problems.",
    heroIntro:
      "Currently pursuing B.Tech in Computer Science at VNR Vignana Jyothi Institute of Engineering and Technology (2024–2028). I focus on engineering reliable web applications with the MERN stack, designing intelligent AI/ML workflows, and tackling complex Data Structures & Algorithms challenges.",
    aboutBio: [
      "I am a Computer Science undergraduate at VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad, maintaining a 9.73 CGPA.",
      "My technical journey combines strong core Computer Science fundamentals with hands-on software development. I regularly practice Data Structures and Algorithms across platforms like LeetCode, CodeChef, and Codeforces, with over 315 problems solved.",
      "On the development side, I build scalable full-stack applications using React, Node.js, Express.js, and MongoDB, alongside backend APIs in FastAPI and AI/ML pipelines integrating PyTorch and computer vision.",
      "I am actively seeking software engineering internships, hackathons, and technical collaboration opportunities."
    ],
    currentFocus: [
      "Full-Stack Web Development (MERN & React Ecosystem)",
      "Backend Architecture (Node.js & FastAPI REST APIs)",
      "AI/ML Pipelines (PyTorch, MobileNetV2, Agentic Workflows)",
      "Data Structures & Algorithms (Competitive Programming)"
    ],
    cgpa: "9.73",
    dsaSolved: "315+",
    email: "sushanthreddy2007@gmail.com",
    emailMailto: "mailto:sushanthreddy2007@gmail.com",
    github: "https://github.com/MSUSHANTHREDDY5",
    linkedin: "https://www.linkedin.com/in/sushanth-reddy-m",
    leetcode: "https://leetcode.com/u/sushanthreddy5/",
    codechef: "https://www.codechef.com/users/sushanthreddy5",
    codeforces: "https://codeforces.com/profile/sushanthreddy5",
    resumePdf: "https://drive.google.com/file/d/1eaL88BEIr7WPjvQgpqm_pw4ZG8TAiij1/view?usp=drivesdk",
    avatarUrl: null
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    location: "Hyderabad, Telangana, India",
    duration: "2024 – 2028",
    cgpa: "9.73",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++/Java)",
      "Database Management Systems (SQL & MongoDB)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Computer Organization & Architecture"
    ]
  },

  projects: [
    {
      id: "ecotrack-ai",
      title: "EcoTrack AI",
      category: "FULL-STACK · AI · COMPUTER VISION",
      categoryIcon: "🌿",
      isFeatured: true,
      type: "Full-Stack / AI / Computer Vision",
      previewGradient: "from-[#00f2fe]/20 via-[#10b981]/20 to-[#0b0c12]",
      description:
        "A full-stack sustainability web platform that tracks personal carbon footprints and uses PyTorch computer vision with OCR to automatically process uploaded activity receipts.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "FastAPI",
        "PyTorch",
        "MobileNetV2",
        "EasyOCR",
        "Chart.js"
      ],
      features: [
        "Automated carbon footprint calculation for transport, energy, and consumption",
        "Receipt OCR text extraction using EasyOCR for automated logging",
        "Item image classification via lightweight MobileNetV2 PyTorch model",
        "Personalized sustainability goals and interactive progress analytics with Chart.js"
      ],
      githubUrl: "https://github.com/MSUSHANTHREDDY5",
      liveUrl: "https://github.com/MSUSHANTHREDDY5",
      detail: {
        problem:
          "Manual tracking of daily personal carbon emissions is tedious, leading to low user engagement and inconsistent data entry.",
        solution:
          "EcoTrack AI combines MERN stack web interfaces with a FastAPI Python service running PyTorch image classification and EasyOCR to automate receipt digitizing and carbon calculations.",
        architecture:
          "React frontend communicates with Express.js Node API for data persistence in MongoDB, while image analysis requests are proxied to a Python FastAPI microservice utilizing PyTorch MobileNetV2 and EasyOCR.",
        challenges: [
          "Optimizing OCR image preprocessing for noisy and low-light receipt photos.",
          "Integrating a lightweight MobileNetV2 model to maintain fast inferencing under 300ms."
        ],
        learned: [
          "Building decoupled microservice architectures connecting Node.js and FastAPI.",
          "Preprocessing real-world unstructured image data for computer vision tasks."
        ]
      }
    },
    {
      id: "fanbase-analyzer",
      title: "FanBase Analyzer",
      category: "AGENTIC AI · DATA ANALYTICS",
      categoryIcon: "🤖",
      isFeatured: true,
      type: "Agentic AI / Data Analytics",
      previewGradient: "from-[#ff2a85]/20 via-[#a855f7]/20 to-[#0b0c12]",
      description:
        "An autonomous Agentic AI analytical engine built with n8n and OpenAI API that extracts Reddit community data to compare engagement metrics and sentiment across fan bases.",
      technologies: [
        "n8n",
        "OpenAI API",
        "Reddit API",
        "JavaScript",
        "QuickChart API",
        "Gmail API",
        "Webhooks"
      ],
      features: [
        "Automated Reddit post & comment extraction via webhooks",
        "OpenAI LLM sentiment scoring and topic classification",
        "QuickChart graph generation for comparative sentiment visual report",
        "Automated email digest delivery using Gmail API integration"
      ],
      githubUrl: "https://github.com/MSUSHANTHREDDY5",
      liveUrl: "https://github.com/MSUSHANTHREDDY5",
      detail: {
        problem:
          "Analyzing public sentiment across online fan communities manually requires aggregating thousands of posts, making real-time comparisons impractical.",
        solution:
          "Engineered an automated agentic workflow in n8n that queries the Reddit API, passes structured text to OpenAI LLMs for sentiment categorization, and generates visual email reports.",
        architecture:
          "Event-triggered n8n workflow pipeline connecting Reddit API endpoints, OpenAI GPT analysis nodes, QuickChart API rendering engines, and Gmail dispatch nodes.",
        challenges: [
          "Handling rate limits and pagination when pulling high-volume Reddit comments.",
          "Structuring prompt schemas to ensure consistent JSON outputs from LLM calls."
        ],
        learned: [
          "Designing robust workflow automation nodes and API webhooks in n8n.",
          "Structuring prompts for reliable multi-class sentiment classification."
        ]
      }
    },
    {
      id: "admission-forecasting",
      title: "AI-Based Admission Demand Forecasting & Seat Optimization System",
      category: "FULL-STACK · DATA ANALYTICS",
      categoryIcon: "📈",
      isFeatured: false,
      type: "Full-Stack / Data Analytics",
      previewGradient: "from-[#ffd600]/20 via-[#00f2fe]/20 to-[#0b0c12]",
      description:
        "A MERN analytics system designed to predict branch-wise college admission demand trends using linear regression and recommend optimal seat allocation strategies.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Linear Regression"
      ],
      features: [
        "Bulk CSV historical admission data parser",
        "Linear regression trend model for branch demand forecasting",
        "Seat allocation recommendation engine based on projected application volume"
      ],
      githubUrl: "https://github.com/MSUSHANTHREDDY5",
      liveUrl: "https://github.com/MSUSHANTHREDDY5",
      detail: {
        problem:
          "Educational institutions struggle to balance branch-wise seat quotas, leading to overfilled or underutilized academic capacities.",
        solution:
          "Developed a web-based decision support system using linear regression algorithms on historical admission data to project future demand.",
        architecture:
          "React Single Page Application rendering data analytics dashboards with Express.js endpoints processing CSV datasets stored in MongoDB.",
        challenges: [
          "Parsing inconsistent historical CSV schemas cleanly without crashing backend jobs."
        ],
        learned: [
          "Implementing basic statistical regression models in full-stack JavaScript applications."
        ]
      }
    },
    {
      id: "code-universe",
      title: "Code Universe",
      category: "SOFTWARE · DATA PROCESSING",
      categoryIcon: "🌌",
      isFeatured: false,
      type: "Software / Data Processing",
      previewGradient: "from-[#a855f7]/20 via-[#ff2a85]/20 to-[#0b0c12]",
      description:
        "A modular data processing utility built to manage structured programming environments and dataset transformations efficiently.",
      technologies: ["C++", "Python", "Data Structures"],
      features: [
        "Efficient C++ memory management for batch file parsing",
        "Python automation scripts for data cleanup"
      ],
      githubUrl: "https://github.com/MSUSHANTHREDDY5",
      liveUrl: "https://github.com/MSUSHANTHREDDY5",
      detail: {
        problem:
          "Managing large text datasets and code snippets required lightweight, high-performance local processing tools.",
        solution:
          "Built a set of optimized C++ data structure implementations coupled with Python parsing scripts.",
        architecture:
          "Compiled C++ core processing modules paired with Python CLI wrapper scripts.",
        challenges: ["Ensuring cross-platform compatibility across Linux and Windows CLI."],
        learned: ["Applying advanced data structures like tries and hash maps in C++."]
      }
    }
  ],

  skills: [
    {
      title: "PROGRAMMING LANGUAGES",
      skills: ["C", "C++", "Python", "JavaScript", "Java", "R"]
    },
    {
      title: "WEB TECHNOLOGIES",
      skills: ["HTML", "CSS", "Bootstrap", "React", "Vite", "Tailwind CSS"]
    },
    {
      title: "BACKEND & APIS",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
    },
    {
      title: "DATABASES",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "AI / ML & COMPUTER VISION",
      skills: [
        "Machine Learning",
        "Data Preprocessing",
        "Agentic AI",
        "Computer Vision",
        "OCR",
        "PyTorch",
        "MobileNetV2"
      ]
    },
    {
      title: "DEVELOPER TOOLS",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      title: "COMPUTER SCIENCE / PROBLEM SOLVING",
      skills: [
        "Data Structures & Algorithms",
        "Competitive Programming",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ],

  achievements: {
    dsaSolved: "315+ DSA problems solved across competitive coding platforms.",
    items: [
      "Solved 315+ Data Structures and Algorithms problems across LeetCode, CodeChef, and Codeforces.",
      "Maintains a 9.73 CGPA in B.Tech Computer Science and Engineering at VNR VJIET.",
      "Engineered multi-disciplinary software projects spanning Agentic AI, PyTorch Computer Vision, and predictive MERN analytics."
    ],
    competitiveProfiles: [
      {
        platform: "LeetCode",
        handle: "sushanthreddy5",
        url: "https://leetcode.com/u/sushanthreddy5/",
        solved: "Active Problem Solver"
      },
      {
        platform: "CodeChef",
        handle: "sushanthreddy5",
        url: "https://www.codechef.com/users/sushanthreddy5",
        solved: "Competitive Programmer"
      },
      {
        platform: "Codeforces",
        handle: "sushanthreddy5",
        url: "https://codeforces.com/profile/sushanthreddy5",
        solved: "Problem Solver"
      }
    ]
  },

  certifications: [
    "Academic Excellence Recognition - VNR VJIET (CGPA 9.73)",
    "Verified technical certifications and course completions will be listed as completed."
  ],

  copilotSuggestions: [
    "What projects has Sushanth built?",
    "What is his tech stack?",
    "Tell me about EcoTrack AI.",
    "What are his DSA achievements?",
    "Why should I consider Sushanth for an internship?"
  ]
};
