/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          cream: '#F5F0EB',
          sand: '#E8DDD0',
          gold: '#C8A96E',
          'gold-light': '#D4BC8A',
          'gold-dark': '#A68B56',
          charcoal: '#2C2C2C',
          'charcoal-light': '#4A4A4A',
          taupe: '#8B7D72',
          'taupe-light': '#B5A89B',
          ivory: '#FAF7F4',
          'warm-white': '#FDFCFA',
          rose: '#E8C4B8',
          blush: '#F2DFD8',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.15em',
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}
