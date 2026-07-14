/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: warm ivory base, deep espresso, antique gold accent
        cream: {
          50: "#FDFBF7",
          100: "#F9F6EF",
          200: "#F3EEE3",
          300: "#EBE3D3",
        },
        espresso: {
          900: "#1C1612",
          800: "#2A211B",
          700: "#3E3228",
          600: "#574439",
          500: "#7A6253",
        },
        gold: {
          50: "#FBF6EE",
          100: "#F5ECD6",
          200: "#EAD6A6",
          300: "#DDB96E",
          400: "#D4A04A",
          500: "#B8832F",
          600: "#9A6726",
          700: "#7C4E22",
          800: "#664020",
        },
        warmgray: {
          400: "#A89B8C",
          500: "#8C7F70",
          600: "#6B6156",
          700: "#4F4740",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.35s ease-out forwards",
        "slide-out-right": "slide-out-right 0.3s ease-in forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        soft: "0 8px 40px -12px rgba(28, 22, 18, 0.12)",
        glow: "0 0 40px -10px rgba(184, 131, 47, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
