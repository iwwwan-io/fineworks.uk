import { HeroSection } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutPreview />

      <ServicesGrid />

      <FeaturedProjects />

      <CTASection />
    </main>
  );
}
