/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  extend: {
  colors: {
  brand: {
  cream: '#FAF9F6',
  gold: '#C5A059',
  charcoal: '#1A1A1A',
  sand: '#F5F2ED',
  },
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
  DEFAULT: 'hsl(var(--primary))',
  foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
  DEFAULT: 'hsl(var(--secondary))',
  foreground: 'hsl(var(--secondary-foreground))',
  },
  destructive: {
  DEFAULT: 'hsl(var(--destructive))',
  foreground: 'hsl(var(--destructive-foreground))',
  },
  muted: {
  DEFAULT: 'hsl(var(--muted))',
  foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
  DEFAULT: 'hsl(var(--accent))',
  foreground: 'hsl(var(--accent-foreground))',
  },
  popover: {
  DEFAULT: 'hsl(var(--popover))',
  foreground: 'hsl(var(--popover-foreground))',
  },
  card: {
  DEFAULT: 'hsl(var(--card))',
  foreground: 'hsl(var(--card-foreground))',
  },
  },
  fontFamily: {
  serif: ["'Cormorant Garamond'", "serif"],
  sans: ["Inter", "sans-serif"],
  },
        letterSpacing: {
            'widest-plus': '0.4em',
            'widest-xl': '0.6em',
        },
        animation: {
            'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        },
        keyframes: {
            'scroll-indicator': {
                '0%': { transform: 'translateY(-100%)' },
                '100%': { transform: 'translateY(100%)' },
            }
        }
  },
  },
  plugins: [],
}