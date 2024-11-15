import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgba(38, 55, 70, 0.05)',
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        exo: ["var(--font-exo)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
