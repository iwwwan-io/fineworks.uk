import { MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "@/data/site-data";

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Whether you have a specific project in mind or just want to explore what&apos;s possible, we&apos;re here to help.
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
              {siteData.company.address.street}<br />
              {siteData.company.address.city}, {siteData.company.address.state}<br />
              {siteData.company.address.postcode}, {siteData.company.address.country}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary/10 rounded-full text-secondary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg mb-1">Phone</h3>
            <p className="text-muted-foreground">{siteData.company.phone}</p>
            <p className="text-sm text-muted-foreground mt-1">{siteData.company.hours}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary/10 rounded-full text-secondary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg mb-1">Email</h3>
            <p className="text-muted-foreground">{siteData.company.email}</p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-[300px] w-full bg-neutral-200 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-neutral-100">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Google Maps Embed Placeholder
          </span>
        </div>
      </div>
    </div>
  );
}
