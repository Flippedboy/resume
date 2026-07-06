import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Sparkles, Calendar, User, Briefcase, Clock, Award } from 'lucide-react';
import { MOCK_RESUME } from '@/data/resume';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
  const { profile } = MOCK_RESUME;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 size-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 size-96 bg-violet-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full blur-md opacity-70 animate-pulse" />
            {/* Avatar border */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-card">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/50 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-foreground">Open to work</span>
            </div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">求职意向 · AI应用开发实习</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-medium mb-4">
            {profile.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            {profile.bio}
          </p>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/60 border border-border/50 text-xs text-foreground/80">
              <User className="size-3.5 text-cyan-400" />
              <span>23岁 · 男</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/60 border border-border/50 text-xs text-foreground/80">
              <Award className="size-3.5 text-violet-400" />
              <span>团员</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/60 border border-border/50 text-xs text-foreground/80">
              <Briefcase className="size-3.5 text-emerald-400" />
              <span>随时到岗</span>
            </div>

          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
        >
          <UniversalLink
            to={`mailto:${profile.email}`}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <Mail className="size-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-foreground">{profile.email}</span>
          </UniversalLink>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
            <Phone className="size-4 text-violet-400" />
            <span className="text-sm text-foreground">{profile.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
            <MapPin className="size-4 text-cyan-400" />
            <span className="text-sm text-foreground">{profile.location}</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3"
        >
          <UniversalLink
            to={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
            className="group size-11 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="size-5 group-hover:scale-110 transition-transform" />
          </UniversalLink>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">向下滚动</span>
            <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-muted-foreground/50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
