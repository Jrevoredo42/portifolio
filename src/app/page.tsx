import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
