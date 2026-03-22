export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Course {
  badge?: string;
  badgeColor?: string;
  icon: string;
  title: string;
  boards: string[];
  subjects: string[];
}

export interface WhyPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
}
