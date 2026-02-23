import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  
  return {
    title: `${project.title} | Fineworks.uk Projects`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
           <div className="flex gap-2 mb-4">
             <span className="bg-secondary text-primary px-3 py-1 text-sm font-semibold rounded uppercase tracking-wider">
               {project.category}
             </span>
             <span className="bg-black/50 backdrop-blur-sm px-3 py-1 text-sm font-medium rounded uppercase tracking-wider">
               {project.location}
             </span>
           </div>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
             {project.title}
           </h1>
           <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl">
             {project.summary}
           </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Sidebar / Specs */}
            <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
              <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100">
                <h3 className="font-serif text-xl font-bold mb-6 border-b pb-2">Project Details</h3>
                <dl className="space-y-4">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm text-muted-foreground capitalize">{key}</dt>
                      <dd className="text-base font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">Interested in something similar?</h3>
                <p className="text-white/80 mb-6 text-sm">
                  We specialize in bespoke projects like {project.title}. Let&apos;s discuss your vision.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Main Description */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <h2 className="text-3xl text-foreground font-serif font-bold mb-6">Overview</h2>
                <p>{project.description}</p>
              </div>

              {/* Gallery */}
              <div className="mt-16 space-y-8">
                <h3 className="text-2xl font-serif font-bold">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <div key={index} className={`relative rounded-lg overflow-hidden h-[300px] ${index === 0 ? 'md:col-span-2 md:h-[500px]' : ''}`}>
                      <Image
                        src={img}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project (Simple Logic) */}
      <section className="py-20 bg-neutral-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-serif font-bold mb-8">View Other Projects</h2>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/projects">View Portfolio</Link>
            </Button>
            <Button asChild>
               <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
