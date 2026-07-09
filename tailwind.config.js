/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#1C1917',
        card: '#FFFFFF',
        'card-foreground': '#1C1917',
        muted: '#F5F0EB',
        'muted-foreground': '#78716C',
        border: '#E7E0D8',
        accent: '#C49A5C',
        'accent-foreground': '#1C1917',
        destructive: '#B91C1C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'nav': '0.05em',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(28, 25, 23, 0.06)',
        'card-hover': '0 8px 24px rgba(28, 25, 23, 0.12)',
        'drawer': '0 0 40px rgba(28, 25, 23, 0.15)',
      },
    },
  },
  plugins: [],
}
