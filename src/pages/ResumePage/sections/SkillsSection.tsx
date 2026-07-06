import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Network, Bot, MessageSquare, Wrench, Terminal } from 'lucide-react';
import { MOCK_RESUME, type ISkill } from '@/data/resume';

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  '大模型与AI框架': Brain,
  'RAG与向量检索': Network,
  'Agent开发': Bot,
  '模型与API': Cpu,
  'Prompt Engineering': MessageSquare,
  '编程语言': Code2,
  'Web与工具': Wrench,
};

const CATEGORY_COLORS: Record<string, string> = {
  '大模型与AI框架': 'from-violet-500 to-fuchsia-500',
  'RAG与向量检索': 'from-cyan-500 to-teal-500',
  'Agent开发': 'from-emerald-500 to-green-500',
  '模型与API': 'from-blue-500 to-indigo-500',
  'Prompt Engineering': 'from-amber-500 to-orange-500',
  '编程语言': 'from-rose-500 to-pink-500',
  'Web与工具': 'from-slate-500 to-zinc-500',
};

export default function SkillsSection() {
  const { skills } = MOCK_RESUME;

  const groupedSkills = useMemo(() => {
    const groups: Record<string, ISkill[]> = {};
    skills.forEach((skill) => {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category].push(skill);
    });
    return groups;
  }, [skills]);

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              专业技能
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            熟练大模型应用开发全栈技术，从 Agent 架构到 RAG 系统落地
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIdx) => {
            const Icon = CATEGORY_ICONS[category] || Code2;
            const gradient = CATEGORY_COLORS[category] || 'from-cyan-500 to-violet-500';
            const categorySkills = groupedSkills[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))`,
                  }}
                />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-7 hover:border-border/80 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                      <Icon className="size-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, idx) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground/90">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground tabular-nums">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap justify-center gap-2.5"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-card/60 border border-border/50 text-foreground/80 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/10 cursor-default transition-shadow"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
