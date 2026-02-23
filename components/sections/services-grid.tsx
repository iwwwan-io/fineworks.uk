import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteData } from "@/data/site-data";

export function ServicesGrid({ showAllButton = true }: { showAllButton?: boolean }) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground">
            Comprehensive construction services designed for discerning clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((service) => (
            <Card key={service.id} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
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

        {showAllButton && (
          <div className="mt-12 text-center">
            <Button asChild variant="default">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
