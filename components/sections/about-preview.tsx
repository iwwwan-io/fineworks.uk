import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/site-data";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              {siteData.company.tagline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteData.company.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of skilled craftsmen and project managers work collaboratively to bring your vision to life, ensuring a seamless process from concept to completion.
            </p>
            <Button asChild variant="link" className="px-0 text-secondary text-lg">
              <Link href="/about">
                Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
              alt="Construction details"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
