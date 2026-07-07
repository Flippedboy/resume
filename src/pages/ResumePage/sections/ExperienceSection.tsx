import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { MOCK_RESUME } from '@/data/resume';

export default function ExperienceSection() {
  const { experience } = MOCK_RESUME;

  return (
    <section id="experience" className="w-full py-20 md:py-28 bg-card/20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Work Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              工作经历
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            多年 AI 大模型领域深耕，从算法研发到工程落地的全链路经验
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex ${
                  idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-60 animate-pulse" />
                    <div className="relative size-4 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 border-2 border-background shadow-lg" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    idx % 2 === 0 ? 'md:pr-0' : 'md:pl-0'
                  }`}
                >
                  <div className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Company & Position */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 shrink-0">
                          <Briefcase className="size-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.position}
                          </h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 mb-4 ml-0">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted/60 text-xs font-medium text-muted-foreground">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>

                      {/* Description bullets */}
                      <ul className="space-y-2.5">
                        {exp.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                          >
                            <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
