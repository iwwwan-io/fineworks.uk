import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { siteData } from "@/data/site-data";

export const metadata = {
  title: "Our Services | Fineworks.uk",
  description: "Comprehensive construction services including Residential Construction, Extensions & Renovations, Commercial Fit-Out, and Project Management.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of construction services, each delivered with our signature attention to detail.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {siteData.services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col gap-12 items-center scroll-mt-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
                  0{index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
                <ul className="space-y-3">
                  {service.details?.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden group shadow-lg">
                <Image
                  src={service.image || ""}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Not sure what you need?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team is happy to discuss your requirements and provide expert advice on the best approach for your project.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </main>
  )
}
