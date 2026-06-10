/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          500: "#64748B",
          600: "#475569",
          700: "#2B3441",
          800: "#1A212B",
          900: "#0F1419",
        },
        accent: {
          100: "#F5EBD3",
          500: "#C8A24A",
          600: "#A8842F",
        },
        signal: {
          500: "#D14343",
        },
        ink: {
          500: "#475569",
          700: "#1F2937",
          900: "#0A0F18",
        },
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        wider2: '0.18em',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
