// EXPORTS: IExperience, MOCK_EXPERIENCES
export interface IExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string[]
}

export const MOCK_EXPERIENCES: IExperience[] = [
  {
    id: '1',
    company: '智谱AI',
    position: '高级大模型开发工程师',
    startDate: '2022.06',
    endDate: '至今',
    description: [
      '主导企业级RAG知识库系统研发，接入10+业务线，日均调用量50万+',
      '负责大模型微调与Prompt工程优化，问答准确率提升35%',
      '设计并实现多模态智能问答系统，支持文本/表格/图片混合检索'
    ]
  },
  {
    id: '2',
    company: '字节跳动',
    position: 'AI算法工程师',
    startDate: '2020.07',
    endDate: '2022.05',
    description: [
      '参与NLP基础模型预训练与下游任务适配，覆盖10+业务场景',
      '优化模型推理性能，延迟降低40%，资源成本节省30%',
      '构建智能客服对话系统，月活用户超千万'
    ]
  },
  {
    id: '3',
    company: '腾讯AI Lab',
    position: '算法实习生',
    startDate: '2019.06',
    endDate: '2020.06',
    description: [
      '参与深度学习框架底层算子开发与性能调优',
      '负责NLP任务数据 pipeline 建设与质量评估',
      '发表ACL Workshop论文1篇'
    ]
  }
]