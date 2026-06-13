/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
          DEFAULT: '#2563eb', // Trustworthy blue
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#0f172a', // Slate 900
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f59e0b', // A little orange for CTA
          foreground: '#ffffff'
        },
        background: '#ffffff',
        foreground: '#0f172a',
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b'
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a'
        },
      },
    },
  },
  plugins: [],
}
