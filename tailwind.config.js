/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        gold: {
          50: '#fbf7f1',
          100: '#f5efe5',
          200: '#eadbc4',
          300: '#dec29a',
          400: '#d0a36e',
          500: '#c48a4e',
          600: '#b87640',
          700: '#995e35',
          800: '#7d4d31',
          900: '#66402b',
        },
        charcoal: {
          50: '#f6f5f5',
          100: '#e7e6e5',
          200: '#d1cfcd',
          300: '#b2afab',
          400: '#908c87',
          500: '#75716d',
          600: '#5e5b57',
          700: '#4e4b48',
          800: '#42403e',
          900: '#3a3837',
          950: '#1f1e1d',
        },
        cream: '#f9f7f4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
