export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  summary: string;
  image: string;
  slug: string;
  details: {
    client: string;
    duration: string;
    value: string;
    architect?: string;
  };
  description: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Kensington Townhouse",
    category: "Residential",
    location: "Kensington, London",
    summary: "A complete refurbishment and basement excavation of a Grade II listed townhouse.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    slug: "kensington-townhouse",
    details: {
      client: "Private",
      duration: "18 Months",
      value: "Confidential",
      architect: "Heritage Architects Ltd"
    },
    description: "This project involved the sensitive restoration of a Grade II listed property in the heart of Kensington. The scope included a full internal reconfiguration, a double-storey basement excavation to create a swimming pool and media room, and the restoration of original features including cornicing and staircases. We worked closely with heritage officers to ensure all works preserved the historic fabric of the building while integrating modern systems for comfort and efficiency.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    title: "Mayfair Office Suite",
    category: "Commercial",
    location: "Mayfair, London",
    summary: "High-end Cat B fit-out for a boutique investment firm.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    slug: "mayfair-office-suite",
    details: {
      client: "Global Capital Partners",
      duration: "12 Weeks",
      value: "£1.2m",
    },
    description: "A rapid-turnaround fit-out project in a prestigious Mayfair location. The brief required creating a sophisticated, branded environment for a leading investment firm. Works included the installation of glazed partitions, bespoke joinery for the boardroom and reception, high-specification audio-visual integration, and premium flooring throughout. The project was delivered two weeks ahead of schedule.",
    gallery: [
      "https://images.unsplash.com/photo-1497215842964-222b4bef9728?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    title: "Surrey Extension",
    category: "Residential",
    location: "Cobham, Surrey",
    summary: "Contemporary glass and timber extension to a detached family home.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    slug: "surrey-extension",
    details: {
      client: "Private",
      duration: "6 Months",
      value: "£450k",
    },
    description: "Designed to maximize natural light and connect the living space with the garden, this project involved a significant rear extension. We utilized structural glazing and sustainably sourced timber cladding to create a striking contrast with the existing brickwork. The new open-plan kitchen and living area features polished concrete floors with underfloor heating and a custom-designed kitchen island.",
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Shoreditch Loft Conversion",
    category: "Residential",
    location: "Shoreditch, London",
    summary: "Industrial-chic renovation of a former warehouse space.",
    image: "https://images.unsplash.com/photo-1534576571475-35e78dd03fdf?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "shoreditch-loft",
    details: {
      client: "Private",
      duration: "5 Months",
      value: "£300k",
    },
    description: "We stripped back a dated apartment to reveal its original brickwork and steel beams, embracing the building's industrial heritage. The renovation included a new mezzanine level for the master bedroom, a custom steel kitchen, and Crittall-style internal doors. The result is a spacious, light-filled home that perfectly suits the vibrant local area.",
    gallery: [
      "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
    ]
  },
   {
    id: "5",
    title: "City Law Firm HQ",
    category: "Commercial",
    location: "City of London",
    summary: "Full floor fit-out for a tier-one law firm.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    slug: "city-law-firm",
    details: {
      client: "Legal Partners LLP",
      duration: "16 Weeks",
      value: "£2.5m",
      architect: "Modern Spaces"
    },
    description: "Detailed to the highest specification, this project delivered a world-class working environment. Features include high-acoustic performance meeting suites, a client entertainment lounge with a bar, and a flexible seminar space. The logistics of working in a busy city center tower required meticulous planning and coordination.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];
