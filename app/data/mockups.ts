export type MockupType = "desktop" | "mobile";

export interface MockupEntry {
  slug: string;
  title: string;
  description: string;
  path: string;
  type: MockupType;
  stack: string;
  role: string;
  year: string;
}

export const mockups: MockupEntry[] = [
  {
    slug: "fashion",
    title: "Editorial Fashion Store",
    description: "Minimal e-commerce experience focused on product discovery and one-click shopping.",
    path: "mockups/fashion.html",
    type: "desktop",
    stack: "Nuxt 4 - Nuxt UI",
    role: "Frontend / Backend",
    year: "2027"
  },
  {
    slug: "clinic",
    title: "Boutique Medical Clinic",
    description: "Medical tourism experience focused on trust, credentials, results, and booking.",
    path: "mockups/clinic.html",
    type: "desktop",
    stack: "Nuxt 4 - Nuxt UI",
    role: "Frontend / Backend",
    year: "2027"
  },
  {
    slug: "beauty",
    title: "AI Beauty Studio",
    description: "Beauty salon experience centered around AI hairstyle previews and bookings.",
    path: "mockups/beauty.html",
    type: "mobile",
    stack: "React, Tailwind",
    role: "Frontend / Product Design",
    year: "2027"
  },
  {
    slug: "beauty",
    title: "AI Beauty Studio",
    description: "Beauty salon experience centered around AI hairstyle previews and bookings.",
    path: "mockups/beauty-d.html",
    type: "desktop",
    stack: "React, Tailwind",
    role: "Frontend / Product Design",
    year: "2027"
  },
  {
    slug: "dining",
    title: "Immersive Restaurant",
    description: "Visual restaurant experience with an immersive menu and frictionless reservations.",
    path: "mockups/dining.html",
    type: "desktop",
    stack: "Nuxt 4 - Nuxt UI",
    role: "Frontend / Product Design",
    year: "2027"
  },
  {
    slug: "realty",
    title: "Interactive Realty",
    description: "Map-first real estate platform with property discovery and 360° tours.",
    path: "mockups/realty.html",
    type: "mobile",
    stack: "React, Tailwind",
    role: "Frontend / Backend",
    year: "2027"
  },
  {
    slug: "fintech",
    title: "Fintech Dashboard",
    description: "Dark SaaS experience featuring live financial data, dashboards, and pricing.",
    path: "mockups/fintech.html",
    type: "desktop",
    stack: "React, Tailwind",
    role: "Frontend / Product Design",
    year: "2027"
  },
  {
    slug: "consulting",
    title: "Professional Advisory",
    description: "Editorial corporate site built around authority, measurable results, and trust.",
    path: "mockups/consulting.html",
    type: "desktop",
    stack: "Nuxt 4 - Nuxt UI",
    role: "Frontend / Product Design",
    year: "2027"
  },
  {
    slug: "learning",
    title: "Online Learning Platform",
    description: "Course experience combining video, progress tracking, testimonials, and checkout.",
    path: "mockups/learning.html",
    type: "desktop",
    stack: "React, Tailwind",
    role: "Frontend / Product Design",
    year: "2027"
  }
];
