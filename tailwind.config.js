/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — quiet luxury for gold jewelry
        ink: {
          DEFAULT: "#1A1714",
          soft: "#2B2622",
          muted: "#5C544C",
        },
        cream: {
          DEFAULT: "#F7F2EA",
          soft: "#FBF8F2",
          deep: "#EFE7DA",
        },
        sand: {
          DEFAULT: "#E4D8C7",
          deep: "#D6C7B2",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#C9A876",
          deep: "#8A6A3E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26, 23, 20, 0.18)',
        card: '0 4px 24px -8px rgba(26, 23, 20, 0.12)',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
      },
    },
  },
  plugins: [],
}
