import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        modalOpen: 'modalOpen 1s ease-in-out',
        modalClose: 'modalClose 0.5s ease-in-out'
      },
      keyframes: {
        modalOpen: {
          '0%': { transform: 'scale(0.5)', opacity: '0' }, // Start small and invisible
          '20%': { transform: 'scale(0.7)', opacity: '0.3' }, // Slightly larger, still semi-transparent
          '40%': { transform: 'scale(0.9)', opacity: '0.6' }, // Near full size, more visible
          '60%': { transform: 'scale(1)', opacity: '1' }, // Full size, fully visible
          // '80%': { transform: 'scale(1.1)', opacity: '1' }, // Slight overshoot for a bounce effect
          // '100%': { transform: 'scale(1)', opacity: '1' }, // Back to normal size
        },
        modalClose: {
          '0%': { transform: 'scale(1)', opacity: '1' }, // Start full size and fully visible
          '20%': { transform: 'scale(0.9)', opacity: '0.8' }, // Start shrinking and fading out
          '40%': { transform: 'scale(0.7)', opacity: '0.6' }, // Continue shrinking and fading
          '60%': { transform: 'scale(0.5)', opacity: '0.4' }, // More shrinking and fading
          '80%': { transform: 'scale(0.3)', opacity: '0.2' }, // Near end, almost invisible
          '100%': { transform: 'scale(0.1)', opacity: '0' }, // Fully shrunk and invisible
        },
      }
    },
  },
  plugins: [],
};
export default config;
