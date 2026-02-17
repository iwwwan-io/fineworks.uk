import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata = {
  title: "Our Services | Fineworks.uk",
  description: "Comprehensive construction services including Residential, Extensions, Commercial Fit-Outs, and Project Management.",
};

const services = [
  {
    id: "residential",
    title: "Bespoke Residential Construction",
    description: "From concept to keys, we build luxury homes tailored to your exacting standards.",
    image: "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2070&auto=format&fit=crop",
    details: [
      "New build homes",
      "Structural alterations",
      "High-end finishing",
      "Smart home integration"
    ]
  },
  {
    id: "extensions",
    title: "Extensions & Renovations",
    description: "Add space and value to your property with our seamless extension and renovation services.",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2067&auto=format&fit=crop",
    details: [
      "Kitchen extensions",
      "Loft conversions",
      "Basement excavations",
      "Whole-house renovations"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Fit-Out",
    description: "We create productive, stylish, and functional workspaces for businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Office fit-outs",
      "Retail spaces",
      "Hospitality venues",
      "Cat A & Cat B fit-outs"
    ]
  },
  {
    id: "management",
    title: "Project Management",
    description: "Expert oversight ensuring your project is delivered on time, on budget, and to specification.",
     image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Budget planning",
      "Timeline management",
      "Subcontractor coordination",
      "Quality control & compliance"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
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
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
                  0{index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
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
                  src={service.image}
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

      <Footer />
    </main>
  )
}
