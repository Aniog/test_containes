export default function Footer() {
  return (
    <footer className="bg-[#2c1a0e] py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h3
          className="text-amber-400 text-2xl font-bold mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          🥚 The World of Eggs
        </h3>
        <p
          className="text-amber-100/50 text-sm"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Celebrating nature's most perfect food — one egg at a time.
        </p>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p
            className="text-amber-100/30 text-xs"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            © {new Date().getFullYear()} The World of Eggs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
