/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^(bg|text|border|ring|fill|stroke|from|to|via)-(cream|ivory|bone|mist|mocha|espresso|charcoal|gold|gold-soft|gold-deep)$/ },
    { pattern: /^(bg|text|border|ring)-(cream|ivory|bone|mist|mocha|espresso|charcoal|gold|gold-soft|gold-deep)(\/\d+)?$/ },
    { pattern: /^(tracking)-(eyebrow|product)$/ },
    { pattern: /^(max-w)-(editorial)$/ },
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F0E6",
        ivory: "#FAF6EE",
        bone: "#EBE3D3",
        mist: "#D9CFBC",
        mocha: "#7A6A57",
        espresso: "#3D2F22",
        charcoal: "#1B1611",
        gold: {
          DEFAULT: "#B08A4A",
          soft: "#D8BC85",
          deep: "#876631",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        product: "0.18em",
      },
      maxWidth: {
        editorial: "1280px",
      },
      boxShadow: {
        editorial: "0 1px 2px rgba(27,22,17,0.04), 0 8px 24px rgba(27,22,17,0.06)",
        "editorial-md": "0 2px 4px rgba(27,22,17,0.04), 0 16px 40px rgba(27,22,17,0.08)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
