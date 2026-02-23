import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/site-data";

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of our finest work.</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">View Portfolio</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.featuredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold">{project.title}</h3>
              <p className="text-secondary font-medium">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
