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
        slug: "mi-dashboard",
        title: "Omni Dashboard",
        description: "Panel de control para gestión de inventario.",
        path: "mockups/dashboard.html",
        type: "desktop",
        stack: "React, Tailwind",
        role: "Frontend",
        year: "2025",
    },
    {
        slug: "mi-app-fintech",
        title: "Wallet App",
        description: "App móvil de billetera digital.",
        path: "mockups/mockups.html",
        type: "mobile",
        stack: "React Native",
        role: "Product Design",
        year: "2025",
    },
];
