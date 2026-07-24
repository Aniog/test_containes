/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        ink: 'var(--color-ink)',
        'ink-secondary': 'var(--color-ink-secondary)',
        'ink-muted': 'var(--color-ink-muted)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.18em',
      },
    },
  },
  plugins: [],
}
