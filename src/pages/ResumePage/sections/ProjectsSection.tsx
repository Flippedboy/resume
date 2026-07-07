import { motion } from 'framer-motion';
import { Rocket, Sparkles, CheckCircle2, Zap, Database, Bot } from 'lucide-react';
import { MOCK_RESUME, type IProject } from '@/data/resume';

const PROJECT_STYLES = [
  {
    gradientFrom: 'from-cyan-500/10',
    gradientVia: 'via-blue-500/5',
    gradientTo: 'to-violet-500/10',
    accentColor: 'cyan',
    icon: Bot,
    side: 'left' as const,
  },
  {
    gradientFrom: 'from-violet-500/10',
    gradientVia: 'via-fuchsia-500/5',
    gradientTo: 'to-pink-500/10',
    accentColor: 'violet',
    icon: Database,
    side: 'right' as const,
  },
];

function ProjectShowcase({ project, index }: { project: IProject; index: number }) {
  const style = PROJECT_STYLES[index] ?? PROJECT_STYLES[0];
  const Icon = style.icon;
  const isLeft = style.side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[80vh] flex items-center py-16 md:py-24"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${style.gradientFrom} ${style.gradientVia} ${style.gradientTo}`}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orbs */}
      <div className={`absolute ${isLeft ? 'top-1/4 -left-20' : 'bottom-1/4 -right-20'} size-80 ${isLeft ? 'bg-cyan-500' : 'bg-violet-500'}/15 rounded-full blur-[120px]`} />
      <div className={`absolute ${isLeft ? 'bottom-1/4 -right-20' : 'top-1/4 -left-20'} size-64 ${isLeft ? 'bg-violet-500' : 'bg-cyan-500'}/10 rounded-full blur-[100px]`} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        {/* Project number badge */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`flex items-center gap-3 mb-6 ${isLeft ? '' : 'md:flex-row-reverse md:text-right'}`}
        >
          <span className={`text-xs font-mono font-bold tracking-[0.3em] ${isLeft ? 'text-cyan-400' : 'text-violet-400'}`}>
            PROJECT 0{index + 1}
          </span>
          <div className={`h-px w-16 ${isLeft ? 'bg-gradient-to-r from-cyan-500/50 to-transparent' : 'bg-gradient-to-l from-violet-500/50 to-transparent'}`} />
        </motion.div>

        {/* Main content - two columns */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${isLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          {/* Left: Project Info */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`space-y-6 ${isLeft ? '' : 'lg:text-right'}`}
          >
            {/* Icon + Title */}
            <div className={`flex items-start gap-4 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
              <div className="relative shrink-0">
                <div className={`absolute inset-0 ${isLeft ? 'bg-cyan-400' : 'bg-violet-400'} rounded-2xl blur-lg opacity-40`} />
                <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${isLeft ? 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30' : 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30'} border`}>
                  <Icon className={`size-7 ${isLeft ? 'text-cyan-400' : 'text-violet-400'}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <p className={`text-xs font-semibold tracking-wider uppercase mb-3 ${isLeft ? 'text-foreground/60' : 'text-foreground/60 lg:text-right'}`}>
                技术栈
              </p>
              <div className={`flex flex-wrap gap-2 ${isLeft ? '' : 'lg:justify-end'}`}>
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className={`px-3 py-1.5 text-sm font-mono rounded-lg border ${
                      isLeft
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/0 via-violet-500/20 to-cyan-500/0 rounded-2xl blur-xl opacity-30" />
            <div className="relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <Sparkles className={`size-5 ${isLeft ? 'text-amber-400' : 'text-amber-400'}`} />
                <h4 className="text-base font-semibold text-foreground">核心成果</h4>
              </div>

              <div className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className={`size-5 ${isLeft ? 'text-cyan-400' : 'text-violet-400'} group-hover:scale-110 transition-transform`} />
                    </div>
                    <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { projects } = MOCK_RESUME;

  return (
    <section id="projects" className="w-full relative">
      {/* Section Header */}
      <div className="w-full py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                项目经验
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              独立负责多个 AI 大模型应用项目，涵盖 ReAct Agent、RAG 知识库、智能客服等核心方向
            </p>
            <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500" />
          </motion.div>
        </div>
      </div>

      {/* Project Showcases */}
      <div className="w-full">
        {projects.map((project, idx) => (
          <ProjectShowcase key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-16 md:h-24" />
    </section>
  );
}
