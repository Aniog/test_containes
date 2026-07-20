/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B4975A", // Warm gold metallic accent
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F2ED", // Soft paper/editorial neutral
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#6D5F4D", // Deep earthy charcoal
          foreground: "#F5F2ED",
        },
        muted: {
          DEFAULT: "#F9F7F5",
          foreground: "#6B7280",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
