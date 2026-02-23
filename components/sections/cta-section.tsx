import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
          Ready to Build Your Vision?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Whether you&apos;re planning a new build, a renovation, or a commercial fit-out, let&apos;s discuss how we can bring your project to life.
        </p>
        <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 w-full sm:w-auto h-14 px-10 text-lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
    </section>
  );
}
