import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { MOCK_RESUME } from '@/data/resume';

export default function EducationSection() {
  const { education } = MOCK_RESUME;

  return (
    <section id="education" className="w-full py-20 md:py-28 bg-card/20">
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
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              教育背景
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            软件工程专业背景，扎实的计算机基础与核心课程成绩优异
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-violet-500/5 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

              <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-7 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative p-3.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-primary/20">
                        <GraduationCap className="size-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.school}
                      </h3>
                      <span className="text-sm text-muted-foreground tabular-nums">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="size-4 text-cyan-400" />
                        <span className="text-sm font-medium text-foreground/90">
                          {edu.major}
                        </span>
                      </div>
                      <span className="text-muted-foreground/50">·</span>
                      <div className="flex items-center gap-1.5">
                        <Award className="size-4 text-violet-400" />
                        <span className="text-sm text-foreground/80">{edu.degree}</span>
                      </div>
                    </div>

                    <p className="text-base font-bold text-[#bcc3cc] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
