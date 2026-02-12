export type Category =
  | "All"
  | "Software Projects"
  | "Design Works"
  | "Social Media"
  | "Academic Services"
  | "Other";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  client?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  thumbnail: string;
  content: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
