export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  problem: string;
  approach: string;
  infrastructure: string;
  result: string;
  image: string;
}