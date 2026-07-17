/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E8",
        creamLight: "#FBF7F0",
        beige: "#EDE2D0",
        beigeDark: "#E2D4BC",
        taupe: "#C9B89F",
        taupeLight: "#DDCFB6",
        gold: {
          DEFAULT: "#B8956A",
          light: "#D4B584",
          dark: "#8B6F47",
          deep: "#6E5535",
        },
        espresso: {
          DEFAULT: "#1F1814",
          soft: "#2B2218",
          muted: "#3D312A",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
      maxWidth: {
        '7.5xl': '88rem',
      },
      boxShadow: {
        soft: "0 2px 24px -8px rgba(31, 24, 20, 0.08)",
        softLg: "0 12px 40px -12px rgba(31, 24, 20, 0.18)",
        card: "0 1px 2px rgba(31, 24, 20, 0.04), 0 8px 24px -10px rgba(31, 24, 20, 0.08)",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
