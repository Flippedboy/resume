import { Github, Mail, MapPin } from 'lucide-react';
import { MOCK_RESUME } from '@/data/resume';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function Footer() {
  const { profile } = MOCK_RESUME;

  return (
    <footer className="w-full border-t border-border/40 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{profile.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <UniversalLink
              to={`mailto:${profile.email}`}
              className="size-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </UniversalLink>
            <UniversalLink
              to={`https://${profile.github}`}
              target="_blank"
              rel="noreferrer"
              className="size-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </UniversalLink>

          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin className="size-3" />
            {profile.location}
          </p>
          <p className="text-xs text-muted-foreground"></p>
        </div>
      </div>
    </footer>
  );
}
