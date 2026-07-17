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
        background: "hsl(38 30% 98%)",
        foreground: "hsl(20 10% 18%)",
        muted: "hsl(38 15% 90%)",
        "muted-foreground": "hsl(20 8% 45%)",
        border: "hsl(38 15% 88%)",
        accent: "hsl(38 65% 52%)",
        "accent-foreground": "hsl(0 0% 100%)",
        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(20 10% 18%)",
        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(20 10% 18%)",
        primary: "hsl(20 10% 18%)",
        "primary-foreground": "hsl(0 0% 100%)",
        secondary: "hsl(38 20% 94%)",
        "secondary-foreground": "hsl(20 10% 18%)",
        destructive: "hsl(0 63% 31%)",
        "destructive-foreground": "hsl(0 0% 100%)",
        ring: "hsl(38 65% 52%)",
        "velmora-gold": "hsl(38 65% 52%)",
        "velmora-gold-light": "hsl(38 60% 72%)",
        "velmora-charcoal": "hsl(20 10% 18%)",
        "velmora-cream": "hsl(38 40% 96%)",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        velmora: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "velmora-sm": "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "velmora": "0 4px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
}
