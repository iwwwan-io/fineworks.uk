import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Hammer, Home, Building2, ClipboardList } from "lucide-react";
import Image from "next/image";

// Placeholder data for Services
const services = [
  {
    title: "Residential Construction",
    description: "Bespoke new builds and structural alterations tailored to your lifestyle.",
    icon: Home,
  },
  {
    title: "Extensions & Renovations",
    description: "Transforming existing spaces with modern design and premium finishes.",
    icon: Hammer,
  },
  {
    title: "Commercial Fit-Out",
    description: "Creating inspiring work environments that reflect your brand identity.",
    icon: Building2,
  },
  {
    title: "Project Management",
    description: "End-to-end management ensuring projects are delivered on time and budget.",
    icon: ClipboardList,
  },
];

// Placeholder data for Featured Projects
const featuredProjects = [
  {
    title: "Kensington Townhouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
  {
    title: "Mayfair Office Suite",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Surrey Extension",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <HeroSection />

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
                Precision in Every Detail.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Fineworks, we believe that true quality lies in the details. With over 15 years of experience in the UK construction industry, we have built a reputation for delivering high-end residential and commercial projects with uncompromising standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of skilled craftsmen and project managers work collaboratively to bring your vision to life, ensuring a seamless process from concept to completion.
              </p>
              <Button asChild variant="link" className="px-0 text-secondary text-lg">
                <Link href="/about">Read Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
               {/* Placeholder image */}
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

      {/* Services Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground">Comprehensive construction services designed for discerning clients.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-secondary mb-4" />
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="default">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
            {featuredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
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

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Build Your Vision?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Whether you're planning a new build, a renovation, or a commercial fit-out, let's discuss how we can bring your project to life.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 w-full sm:w-auto h-14 px-10 text-lg">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
      </section>

      <Footer />
    </main>
  );
}
