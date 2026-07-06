import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import AwardsSection from './sections/AwardsSection';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="w-full">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AwardsSection />
      </main>
      <Footer />
    </div>
  );
}
