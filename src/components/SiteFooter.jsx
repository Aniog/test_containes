export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl font-bold text-amber-400 mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Wild World
            </h2>
            <p className="text-gray-400 text-sm">A journey through the animal kingdom</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <span>Mammals</span>
            <span>Birds</span>
            <span>Reptiles</span>
            <span>Ocean Life</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Wild World. Celebrating the diversity of life on Earth.
        </div>
      </div>
    </footer>
  )
}
