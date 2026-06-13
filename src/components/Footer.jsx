export default function Footer() {
  return (
    <footer className="bg-[#141820] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-white">ARTITECT</span>
            <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
              MACHINERY
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#products" className="hover:text-gold transition-colors">Products</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}