import Image from "next/image";
import { siteData } from "@/data/site-data";

export const metadata = {
  title: "About Us | Fineworks.uk",
  description: "Learn about Fineworks.uk, our history, and our commitment to bespoke construction excellence.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground min-h-[40vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
            Founded on the principles of precision, integrity, and innovation.
          </p>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Crafting Excellence Since 2010</h2>
              {siteData.about.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image 
                  src={siteData.about.images[0].src} 
                  alt={siteData.about.images[0].alt} 
                  width={400} 
                  height={600} 
                  className="rounded-lg object-cover h-64 w-full"
                />
                 <Image 
                  src={siteData.about.images[1].src} 
                  alt={siteData.about.images[1].alt} 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
               <div className="space-y-4 pt-8">
                <Image 
                  src={siteData.about.images[2].src} 
                  alt={siteData.about.images[2].alt} 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-cover h-48 w-full"
                />
                 <Image 
                  src={siteData.about.images[3].src} 
                  alt={siteData.about.images[3].alt} 
                  width={400} 
                  height={600} 
                  className="rounded-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
