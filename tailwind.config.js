/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1A3F',
          light: '#1E2E55',
          dark: '#061024',
        },
        slate: {
          DEFAULT: '#334155',
          muted: '#64748B',
        },
        amber: {
          DEFAULT: '#D97706',
          hover: '#B45309',
          light: '#FEF3C7',
        },
        cloud: '#F1F5F9',
        border: '#E2E8F0',
        success: '#15803D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(11, 26, 63, 0.05), 0 2px 4px -2px rgba(11, 26, 63, 0.05)',
      },
    },
  },
  plugins: [],
}
