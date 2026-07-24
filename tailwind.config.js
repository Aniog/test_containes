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
        foreground: '#1A1A1A',
        card: '#FFFFFF',
        'card-foreground': '#1A1A1A',
        popover: '#FFFFFF',
        'popover-foreground': '#1A1A1A',
        primary: '#B8860B',
        'primary-foreground': '#FFFFFF',
        secondary: '#F0EDE8',
        'secondary-foreground': '#6B6560',
        muted: '#F0EDE8',
        'muted-foreground': '#6B6560',
        accent: '#B8860B',
        'accent-foreground': '#FFFFFF',
        destructive: '#DC2626',
        'destructive-foreground': '#FFFFFF',
        border: '#E8E2DA',
        ring: '#B8860B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
