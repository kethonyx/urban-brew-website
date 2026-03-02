import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Warm, sunny caramel tones inspired by the café interior
        coffee: {
          50: "#fff7ec",
          100: "#ffe7c2",
          200: "#ffd199",
          300: "#f6b36a",
          400: "#e2953f",
          500: "#c87724",
          600: "#a45e1a",
          700: "#834515",
          800: "#5f3210",
          900: "#3e200b"
        },
        // Soft plaster / cream wall tones
        cream: {
          50: "#f9f3e8",
          100: "#f2e2c7",
          200: "#e4c79b"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;

