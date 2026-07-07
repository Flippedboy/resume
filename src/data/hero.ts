// EXPORTS: IHero, MOCK_HERO
export interface IHero {
  id: string
  name: string
  title: string
  bio: string
  avatarUrl: string
  email: string
  phone: string
  github: string
  linkedin: string
}

export const MOCK_HERO: IHero = {
  id: '1',
  name: '莫贤文',
  title: 'AI大模型开发工程师',
  bio: '专注于大模型应用开发与RAG系统构建，深耕NLP与深度学习领域，致力于用AI技术解决实际业务问题。',
  avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/3.jpg',
  email: '14771235028@163.com',
  phone: '14771235028',
  github: 'https://github.com/Flippedboy/AI/',
  linkedin: 'https://linkedin.com/in/moxianwen',
}
