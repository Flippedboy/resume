import { useState, useEffect, useCallback } from 'react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Menu, X, Brain } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_ITEMS = [
  { label: '关于我', href: '#hero' },
  { label: '专业技能', href: '#skills' },
  { label: '项目经验', href: '#projects' },
  { label: '教育背景', href: '#education' },
  { label: '荣誉证书', href: '#awards' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const isMobile = useIsMobile();

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => {
      const id = item.href.replace('#', '');
      return document.getElementById(id);
    }).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the most visible area in viewport
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of viewport
          const topEntry = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
          setActiveSection(`#${topEntry.target.id}`);
        }
      },
      {
        // Trigger when section top reaches 30% from viewport top
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setActiveSection(href);
      setMobileMenuOpen(false);
    },
    [],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink
            to="#hero"
            className="flex items-center gap-2 group"
            onClick={() => handleNavClick('#hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative size-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Brain className="size-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              莫贤文
            </span>
          </NavLink>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {/* Active indicator underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 ${
                        isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                    {/* Hover bg */}
                    <span
                      className={`absolute inset-0 rounded-md transition-opacity duration-200 ${
                        isActive ? 'bg-primary/10' : 'bg-accent/10 opacity-0 hover:opacity-100'
                      }`}
                    />
                  </NavLink>
                );
              })}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent/10 transition-colors"
              aria-label="菜单"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <nav className="pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative block px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                    )}
                  </span>
                </NavLink>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
