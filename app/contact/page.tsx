import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata = {
  title: "Contact Us | Fineworks.uk",
  description: "Ready to start your project? Get in touch with our team today to discuss your vision.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our team today to discuss your vision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}
