import { Home, Hammer, Building2, ClipboardList } from "lucide-react";

export const siteData = {
  company: {
    name: "Fineworks.uk",
    tagline: "Precision in Every Detail.",
    description: "At Fineworks, we believe that true quality lies in the details. With over 15 years of experience in the UK construction industry, we have built a reputation for delivering high-end residential and commercial projects with uncompromising standards.",
    experience: "15+ years",
    location: "Blisworth, Northampton",
    email: "info@fineworks.uk",
    phone: "07512 649216",
    address: {
      street: "Unit 29, J B J Business Park, Northampton Road",
      city: "Blisworth",
      state: "Northampton",
      postcode: "NN7 3DW",
      country: "United Kingdom",
    },
    hours: "Mon-Fri, 9am - 6pm",
  },
  services: [
    {
      id: "residential",
      title: "Bespoke Residential Construction",
      description: "Bespoke new builds and structural alterations tailored to your lifestyle.",
      longDescription: "From concept to keys, we build luxury homes tailored to your exacting standards.",
      image: "https://images.unsplash.com/photo-1681352238705-add3586d86e0?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Home,
      details: [
        "Luxury yachts",
        "Extensions & Renovations",
        "Loft Conversions",
        "Custom kitchens and wardrobes",
        "High-end finishing",
        "Smart home integration"
      ]
    },
    {
      id: "extensions",
      title: "Extensions & Renovations",
      description: "Transforming existing spaces with modern design and premium finishes.",
      longDescription: "Add space and value to your property with our seamless extension and renovation services.",
      image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2067&auto=format&fit=crop",
      icon: Hammer,
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
      description: "Creating inspiring work environments that reflect your brand identity.",
      longDescription: "We create productive, stylish, and functional workspaces for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      icon: Building2,
      details: [
        "Office fit-outs",
        "Retail spaces",
        "Hospitality venues",
        "Cat A & Cat B fit-outs"
      ]
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "End-to-end management ensuring projects are delivered on time and budget.",
      longDescription: "Expert oversight ensuring your project is delivered on time, on budget, and to specification.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      icon: ClipboardList,
      details: [
        "Budget planning",
        "Timeline management",
        "Subcontractor coordination",
        "Quality control & compliance"
      ]
    },
  ],
  featuredProjects: [
    {
      id: "kensington-townhouse",
      title: "Kensington Townhouse",
      category: "Residential Construction",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    },
    {
      id: "mayfair-office-suite",
      title: "Mayfair Office Suite",
      category: "Commercial Fit-Out",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "surrey-extension",
      title: "Surrey Extension",
      category: "Extensions & Renovations",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  values: [
    {
      title: "Quality",
      desc: "We never compromise on materials or workmanship. Perfection is our benchmark.",
    },
    {
      title: "Integrity",
      desc: "Honest pricing, transparent timelines, and clear communication at every stage.",
    },
    {
      title: "Innovation",
      desc: "Embracing modern techniques and sustainable practices for future-proof builds.",
    },
  ],
  about: {
    story: [
      "Fineworks.uk began as a small team of dedicated craftsmen with a shared vision: to elevate the standard of construction in the UK. Over the years, we have grown into a full-service construction firm, but our core philosophy remains unchanged.",
      "We believe that every project is unique and deserves a bespoke approach. Whether it's a heritage restoration or a contemporary commercial fit-out, we apply the same level of rigorous attention to detail and project management expertise.",
      "Our success is built on transparent communication, strict adherence to timelines, and an unwavering commitment to quality. We don't just build structures; we build relationships.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1667922578520-61558e79aa7e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Craftsman working",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        alt: "Project planning",
      },
      {
        src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop",
        alt: "Modern architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Interior finish",
      },
    ],
  },
};
