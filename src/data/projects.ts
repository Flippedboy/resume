// EXPORTS: IProject, MOCK_PROJECTS
export interface IProject {
  id: string
  name: string
  techStack: string[]
  description: string
  highlights: string[]
  imageUrl: string
}

export const MOCK_PROJECTS: IProject[] = [
  {
    id: '1',
    name: '企业级 RAG 知识库系统',
    techStack: ['LangChain', 'PyTorch', 'FAISS', 'FastAPI'],
    description: '基于大模型的企业内部知识库智能问答系统，支持多文档检索与精准回答。',
    highlights: [
      '召回准确率提升至 92%',
      '支持 10 万+ 文档向量检索',
      '平均响应时间 < 2s'
    ],
    imageUrl: ''
  },
  {
    id: '2',
    name: '大模型微调平台',
    techStack: ['PyTorch', 'LoRA', 'DeepSpeed', 'Transformers'],
    description: '面向行业场景的大模型微调平台，支持 LoRA / P-tuning 等高效微调方案。',
    highlights: [
      '微调成本降低 70%',
      '支持 7B ~ 70B 模型',
      '内置 10+ 行业数据集'
    ],
    imageUrl: ''
  },
  {
    id: '3',
    name: '智能客服对话系统',
    techStack: ['LangChain', 'Prompt Engineering', 'NLP', 'React'],
    description: '基于大模型的多轮对话客服系统，具备意图识别、知识问答、工单生成能力。',
    highlights: [
      '日活用户 5 万+',
      '问题解决率达 85%',
      '人工客服转接率下降 40%'
    ],
    imageUrl: ''
  }
]