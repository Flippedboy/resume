// EXPORTS: IResume, IProfile, ISkill, IExperience, IProject, IEducation, IAward, MOCK_RESUME
export interface IProfile {
  id: string
  name: string
  title: string
  bio: string
  avatarUrl: string
  email: string
  phone: string
  github: string
  linkedin: string
  location: string
}

export interface ISkill {
  id: string
  category: string
  name: string
  proficiency: number
}

export interface IExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string[]
}

export interface IProject {
  id: string
  name: string
  techStack: string[]
  description: string
  highlights: string[]
}

export interface IEducation {
  id: string
  school: string
  major: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

export interface IAward {
  id: string
  name: string
  issuer: string
  date: string
}

export interface IResume {
  profile: IProfile
  skills: ISkill[]
  experience: IExperience[]
  projects: IProject[]
  education: IEducation[]
  awards: IAward[]
}

export const MOCK_RESUME: IResume = {
  profile: {
    id: '1',
    name: '莫贤文',
    title: 'AI应用开发实习生',
    bio: '专注于大模型应用开发与RAG系统构建，熟练LangChain、LangGraph等AI框架，具备ReAct Agent开发与智能问答系统落地经验，致力于用AI技术解决实际业务问题。',
    avatarUrl: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/1b22a057adf94e5db2d4560b8fcd93c5.jpeg~tplv-a9rns2rl98-image-qvalue.jpeg?lk3s=8e244e95&rcl=20260705193031AAFCDD15C3FCC38FC9CE&rrcfp=1860f75c&x-expires=1783855832&x-signature=OHxDsPo9EYOXVZnOBHGwEPRBAl8%3D',
    email: '14771235028@163.com',
    phone: '147-7123-5028',
    github: 'github.com/Flippedboy/AI',
    linkedin: 'linkedin.com/in/moxianwen',
    location: '广州 · 佛山 · 深圳',
  },
  skills: [
    
    { id: '1', category: '大模型与AI框架', name: 'LangChain', proficiency: 92 },
    { id: '2', category: '大模型与AI框架', name: 'LangGraph', proficiency: 88 },
    { id: '3', category: '大模型与AI框架', name: 'LlamaIndex', proficiency: 80 },
    { id: '4', category: '大模型与AI框架', name: 'HuggingFace Transformers', proficiency: 78 },
    { id: '5', category: 'RAG与向量检索', name: 'ChromaDB', proficiency: 90 },
    { id: '6', category: 'RAG与向量检索', name: 'FAISS', proficiency: 82 },
    { id: '7', category: 'RAG与向量检索', name: 'Embedding模型', proficiency: 85 },
    { id: '8', category: 'RAG与向量检索', name: '文本分块与检索重排', proficiency: 83 },
    { id: '9', category: 'Agent开发', name: 'ReAct Agent', proficiency: 90 },
    { id: '10', category: 'Agent开发', name: 'Function Calling', proficiency: 88 },
    { id: '11', category: 'Agent开发', name: 'Multi-Agent', proficiency: 75 },
    { id: '12', category: 'Agent开发', name: 'CoT/ToT推理', proficiency: 80 },
    { id: '13', category: '模型与API', name: 'Qwen(DashScope)', proficiency: 90 },
    { id: '14', category: '模型与API', name: 'OpenAI API', proficiency: 85 },
    { id: '15', category: '模型与API', name: 'vLLM模型部署', proficiency: 70 },
    { id: '16', category: '模型与API', name: 'LoRA/QLoRA微调', proficiency: 72 },
    { id: '17', category: 'Prompt Engineering', name: 'Few-Shot', proficiency: 90 },
    { id: '18', category: 'Prompt Engineering', name: 'CoT', proficiency: 88 },
    { id: '19', category: 'Prompt Engineering', name: 'System Prompt设计', proficiency: 85 },
    { id: '20', category: 'Prompt Engineering', name: '提示词优化', proficiency: 83 },
    { id: '21', category: '编程语言', name: 'Python', proficiency: 92 },
    { id: '22', category: '编程语言', name: 'Java', proficiency: 78 },
    { id: '23', category: '编程语言', name: 'C++', proficiency: 65 },
    { id: '24', category: 'Web与工具', name: 'Streamlit、html、css、js', proficiency: 88 },
    { id: '25', category: 'Web与工具', name: 'FastAPI', proficiency: 75 },
    { id: '26', category: 'Web与工具', name: 'MySQL', proficiency: 78 },
    { id: '27', category: 'Web与工具', name: 'Docker', proficiency: 70 },
  ],
  experience: [],
  projects: [
    {
      id: '1',
      name: 'ReAct Agent & RAG智能问答系统',
      techStack: ['Python', 'LangChain', 'LangGraph', 'ChromaDB', 'DashScope(Qwen)', 'Streamlit', 'PyPDF'],
      description: '基于LangChain/LangGraph构建的ReAct Agent与RAG智能问答系统，支持多种工具调用与知识库检索，使用Streamlit构建交互式Web界面，实现多轮对话与流式输出。',
      highlights: [
        'ReAct推理引擎：使用LangChain + LangGraph实现Thought → Action → Observation推理循环，使Agent具备自主推理与多步工具调用能力',
        'RAG检索增强生成：基于ChromaDB向量数据库与DashScopeEmbedding实现文档语义检索，采用MD5去重、RecursiveCharacterTextSplitter分块策略优化检索质量',
        '智能中间件层：开发意图识别与路由分发中间件，根据用户Query类型自动选择RAG检索、ToolCall或LLM直答路径，有效降低推理成本',
        '多功能工具集成：集成网络搜索、天气查询、时间查询、知识库问答等多种Agent工具，通过FunctionCalling机制统一调度',
        '配置化系统：设计YAML配置体系，支持Agent参数、RAG参数、Prompt模板、Chroma配置的灵活调整，实现零代码配置热更新',
      ],
    },
    {
      id: '2',
      name: 'RAG智能客服系统',
      techStack: ['LangChain', 'Chroma', 'DashScope', 'Qwen3-Max', 'Streamlit', 'Python', 'RecursiveCharacterTextSplitter', 'MD5去重'],
      description: '面向企业内部文档的智能问答平台，支持用户上传知识文档(TXT)，通过语义检索与大模型生成，提供准确、上下文感知的自动答疑服务。',
      highlights: [
        '设计并实现完整的RAG流水线，基于LangChain框架搭建，集成Chroma向量数据库存储文档Embedding，采用DashScope Embedding进行语义向量化，使用Qwen3-Max作为生成模型',
        '开发文档自动入库与去重机制：实现基于MD5的文件内容去重检查，针对超长文本选用RecursiveCharacterTextSplitter进行智能分块，本地测试处理50+份业务文档，向量化入库耗时<3秒，检索响应<200ms',
        '构建会话记忆与流式交互：自定义文件持久化聊天历史，支持多轮对话上下文关联，通过Streamlit实现流式输出，回答准确率较纯关键词搜索提升约40%',
        '优化检索质量与生成可控性：通过调整相似度阈值和提示词工程，有效抑制幻觉，经100+条测试问题验证，上下文相关回答占比达92%',
        '搭建轻量化管理端：使用Streamlit构建双页面应用，支持非技术人员一键上传文档、实时更新向量库，知识库更新周期从30分钟缩短至<1分钟',
      ],
    },
  ],
  education: [
    {
      id: '1',
      school: '南京理工大学紫金学院',
      major: '软件工程',
      degree: '本科',
      startDate: '2023.09',
      endDate: '至今',
      description: 'GPA: 3.35/4.0（专业前15%）。主修课程：Java、C++、Python等编程语言以及数据结构、数据库原理、计算机网络、操作系统、计算机组成原理等核心课程，成绩优异。',
    },
  ],
  awards: [
    { id: '1', name: '大学英语四级', issuer: '教育部考试中心', date: '2024.06' },
    { id: '2', name: '全国计算机二级考试', issuer: '教育部考试中心', date: '2024.03' },
  ],
}
