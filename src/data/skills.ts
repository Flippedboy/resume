// EXPORTS: ISkill, MOCK_SKILLS
export interface ISkill {
  id: string
  name: string
  category: '大模型技术' | '编程语言' | '深度学习框架' | 'NLP技术'
  proficiency: number
}

export const MOCK_SKILLS: ISkill[] = [
  { id: '1', name: 'Python', category: '编程语言', proficiency: 95 },
  { id: '2', name: 'PyTorch', category: '深度学习框架', proficiency: 90 },
  { id: '3', name: 'TensorFlow', category: '深度学习框架', proficiency: 85 },
  { id: '4', name: 'LangChain', category: '大模型技术', proficiency: 92 },
  { id: '5', name: 'RAG', category: '大模型技术', proficiency: 90 },
  { id: '6', name: '大模型微调', category: '大模型技术', proficiency: 88 },
  { id: '7', name: 'Prompt Engineering', category: '大模型技术', proficiency: 93 },
  { id: '8', name: 'NLP', category: 'NLP技术', proficiency: 85 },
  { id: '9', name: '深度学习', category: '深度学习框架', proficiency: 88 },
]