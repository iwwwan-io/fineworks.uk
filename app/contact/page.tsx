"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { submitContactForm } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, MapPin, Phone, Mail, Clock } from "lucide-react"

const initialState = {
  message: "",
  error: null,
  success: false
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
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
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you have a specific project in mind or just want to explore what's possible, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 High Street<br />
                      Kensington, London<br />
                      W8 5SA, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">07512 649216</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@fineworks.uk</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[300px] w-full bg-neutral-200 rounded-lg relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-neutral-100">
                    <span className="flex items-center gap-2"><MapPin size={16} /> Google Maps Embed Placeholder</span>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
              
              {state.success ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg flex items-center gap-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">Message Sent!</h3>
                    <p>{state.message}</p>
                  </div>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {state.error && (
                    <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-3 text-sm">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>{state.error}</div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                        placeholder="John Doe"
                      />
                       {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                        placeholder="john@example.com"
                      />
                      {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                        placeholder="+44 7123 456789"
                      />
                       {state.errors?.phone && <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>}
                    </div>
                     <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">Budget Guide (Optional)</label>
                      <select 
                        id="budget" 
                        name="budget" 
                        className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      >
                        <option value="">Select a range</option>
                        <option value="under50k">Under £50k</option>
                        <option value="50k-150k">£50k - £150k</option>
                        <option value="150k-500k">£150k - £500k</option>
                        <option value="500k+">£500k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                    <select 
                      id="projectType" 
                      name="projectType" 
                      required
                      className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Renovation</option>
                      <option value="extension">Extension / New Build</option>
                      <option value="commercial">Commercial Fit-Out</option>
                      <option value="other">Other</option>
                    </select>
                     {state.errors?.projectType && <p className="text-red-500 text-xs">{state.errors.projectType[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow resize-none"
                      placeholder="Tell us a bit about your project..."
                    ></textarea>
                     {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
                  </div>

                  <SubmitButton />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
