import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, ExternalLink } from 'lucide-react';
import { MOCK_RESUME } from '@/data/resume';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function AwardsSection() {
  const { awards } = MOCK_RESUME;

  return (
    <section id="awards" className="w-full py-20 md:py-28">
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
            Certifications & Awards
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              荣誉证书
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            英语与计算机能力认证，具备良好的技术文档阅读与办公软件能力
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group relative cursor-default"
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/0 to-amber-500/0 rounded-2xl group-hover:from-amber-500/10 group-hover:via-yellow-500/5 group-hover:to-amber-500/10 transition-all duration-500 blur-md opacity-0 group-hover:opacity-100" />

              <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20">
                        {idx === 2 ? (
                          <Trophy className="size-5 text-amber-400" />
                        ) : (
                          <Award className="size-5 text-amber-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-amber-300 transition-colors">
                      {award.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{award.issuer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="size-3.5" />
                        <span>{award.date}</span>
                      </div>
                      <ExternalLink className="size-3.5 text-muted-foreground/50 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-10 text-center overflow-hidden">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  期待与您合作
                </span>
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                如果您对我的技术背景和项目经验感兴趣，欢迎随时联系我，期待能有机会与您共事
              </p>
              <UniversalLink
                to={`mailto:${MOCK_RESUME.profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>谢谢</span>
                <ExternalLink className="size-4" />
              </UniversalLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
