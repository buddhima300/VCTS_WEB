import {
  PortfolioItem,
  ClientLogo,
  Testimonial,
  ProcessStep,
  BlogPost,
  Stat,
} from "../types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Eco-Breath Logo",
    category: "Design Works",
    description:
      "A modern, minimalist logo for a sustainable resort brand, inspired by nature and eco-conscious living.",
    imageUrl:
      "https://i.pinimg.com/736x/ff/73/79/ff7379177b739de3a5c6ade59420fce0.jpg",
    client: "Eco-Breath cabana resort",
  },
  {
    id: "2",
    title: "Food Packaging Design",
    category: "Design Works",
    description:
      "Vibrant and eye-catching packaging for a new line of organic snacks, combining bold typography with playful illustrations.",
    imageUrl:
      "https://i.pinimg.com/736x/34/03/68/340368ca25fa1d4c85dab0ecdf7690cc.jpg",
    client: "Sri Lakmal Productions",
  },
  {
    id: "3",
    title: "Escot Service Branding",
    category: "Design Works",
    description:
      "Sleek and sophisticated branding for a high-end escot service, featuring a luxurious color palette and elegant typography.",
    imageUrl:
      "https://i.pinimg.com/736x/e2/72/9d/e2729d71b8e3cb9d9d5bf4b7a927619d.jpg",
    client: "Escot Service",
  },
  {
    id: "4",
    title: "Social Media post",
    category: "Design Works",
    description:
      "A vibrant and engaging social media post design for a luxury lifestyle brand.",
    imageUrl:
      "https://i.pinimg.com/736x/86/94/ce/8694ce086079355e381fb4fa9c1203c7.jpg",
    client: "Escort Service",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategic Analysis",
    description:
      "Every successful project begins with a deep understanding of the client’s objectives, technical scope, constraints, and performance expectations. We conduct structured analysis and requirement evaluation to create a clear roadmap aligned with measurable outcomes.",
  },
  {
    number: "02",
    title: "Architecture & Structured Planning",
    description:
      "Before execution, we design a comprehensive framework that outlines system architecture, module breakdowns, timelines, and technical specifications. This structured planning phase ensures efficiency, scalability, and seamless project progression.",
  },
  {
    number: "03",
    title: "Development & Precision Execution",
    description:
      "With a clear plan in place, our team executes using industry best practices, clean development standards, and rigorous documentation processes. Continuous validation and quality control ensure that every deliverable meets international performance and reliability standards.",
  },
  {
    number: "04",
    title: "Quality Assurance, Delivery & Ongoing Support",
    description:
      "Prior to final delivery, we conduct thorough testing, verification, and optimisation to ensure accuracy, security, and compliance. Beyond completion, we provide structured support and enhancement options to maintain long-term value and performance.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title:
      "Forget ChatGPT & Gemini — Here Are New AI Tools That Will Blow Your Mind",
    date: "Feb 10, 2026",
    readTime: "5 min",
    category: "Insight",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*2U5qU1qnwUjgjrvR8l3h9w.jpeg",
    content:
      "We all know that OpenAI sparked the massive AI trend with the release of ChatGPT, which quickly shifted the attention of developers, big companies, and even individuals toward artificial intelligence. Since then, we’ve seen an explosion of AI tools like RunwayML, Lovable, Claude, Gemini, Perplexity, Cursor, Stitch, NotebookLM, Leonardo AI, Framer AI, and many more and the list keeps growing. New tools are launching every single day, making it harder than ever to identify which ones are actually worth using. That’s why I spend a significant amount of time testing the latest AI tools and share curated posts each month highlighting the ones that truly stand out and deliver real value.",
  },
];

export const stats: Stat[] = [
  { label: "Software Developments", value: 3, suffix: "+" },
  { label: "Academic Services", value: 15, suffix: "+" },
  { label: "Graphic Design Works", value: 20, suffix: "+" },
  // { label: "Cups of Coffee", value: 2400, suffix: "" },
  { label: "Happy Clients", value: 98, suffix: "%" },
];

export const clientLogos: ClientLogo[] = [
  {
    id: "c1",
    name: "BMW",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    id: "c2",
    name: "Audi",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
  },
  {
    id: "c3",
    name: "Samsung",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    id: "c4",
    name: "Toyota",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },
  {
    id: "c5",
    name: "Honda",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
  },
  {
    id: "c6",
    name: "Huawei",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Huawei_Logo.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Marketing Director, Lumina",
    content:
      "The level of creativity and attention to detail is unmatched. Our rebrand has completely changed how customers perceive us.",
    avatarUrl: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "t2",
    name: "Michael Chen",
    role: "Founder, Solstice Records",
    content:
      "Professional, responsive, and incredibly talented. They understood our vision perfectly from the first draft.",
    avatarUrl: "https://i.pravatar.cc/150?u=michael",
  },
];
