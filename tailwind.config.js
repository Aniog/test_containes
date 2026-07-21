/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet-luxury warm editorial palette
        ivory: {
          50:  "#FBF7F1",
          100: "#F5EFE6",
          200: "#EDE3D2",
          300: "#E1D3BC",
        },
        espresso: {
          DEFAULT: "#1F1714",
          50:  "#3A2D27",
          100: "#2A1F18",
          200: "#231A14",
        },
        taupe: {
          300: "#B8A99A",
          400: "#9C8A78",
          500: "#7A6B5F",
          600: "#5A4F46",
        },
        hairline: "#D9CFC2",
        gold: {
          DEFAULT: "#A88A5C",
          300: "#C7A878",
          400: "#B8956A",
          500: "#A88A5C",
          600: "#8E7349",
        },
        sand: "#E8D5C4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.32em',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 23, 20, 0.06)",
        "soft-lg": "0 20px 60px rgba(31, 23, 20, 0.10)",
        drawer: "-20px 0 60px rgba(31, 23, 20, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-up": "fadeUp 0.7s ease-out both",
        "slide-in-right": "slideInRight 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
