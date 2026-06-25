import { Microscope } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-slate-50">
              <Microscope className="w-4 h-4 text-emerald-300" strokeWidth={1.5} />
              <span className="font-serif text-lg tracking-tight">MicroCosmos</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-slate-400 font-light italic leading-relaxed">
              &ldquo;The world is full of magic things, patiently waiting for our senses
              to grow sharper.&rdquo; — W. B. Yeats
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-sm text-slate-400">
            <div className="flex gap-6">
              <a href="#about" className="hover:text-emerald-300 transition">About</a>
              <a href="#gallery" className="hover:text-emerald-300 transition">Plates</a>
              <a href="#join" className="hover:text-emerald-300 transition">Dispatch</a>
            </div>
            <div className="text-xs text-slate-500 mt-3">
              © {new Date().getFullYear()} MicroCosmos · Built quietly, with care.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
