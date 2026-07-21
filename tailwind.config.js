/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, editorial, premium demi-fine jewelry palette
        ivory: {
          DEFAULT: "#FBF7F2",
          50: "#FDFBF8",
          100: "#FBF7F2",
          200: "#F4ECE1",
          300: "#EBE0CF",
        },
        espresso: {
          DEFAULT: "#1F1612",
          900: "#0E0A08",
          800: "#1F1612",
          700: "#2E211A",
          600: "#3D2D24",
          500: "#5A463C",
        },
        gold: {
          DEFAULT: "#B08D5C",
          50: "#F5EFE4",
          100: "#E8DAC0",
          200: "#D6BC95",
          300: "#C8A26E",
          400: "#B08D5C",
          500: "#9A7747",
          600: "#7E5F38",
        },
        taupe: {
          DEFAULT: "#8C7E72",
          200: "#D9D2CA",
          300: "#B7AEA3",
          400: "#9D9285",
          500: "#8C7E72",
          600: "#6F635A",
        },
        line: "rgba(31, 22, 18, 0.10)",
        "line-soft": "rgba(31, 22, 18, 0.06)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'wider-3': '0.25em',
      },
      maxWidth: {
        'screen-2xl': '1440px',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(31, 22, 18, 0.10)',
        'soft-lg': '0 12px 40px -12px rgba(31, 22, 18, 0.18)',
        'drawer': '-12px 0 40px -12px rgba(31, 22, 18, 0.15)',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
