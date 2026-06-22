import { Microscope, Instagram, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-slate-950" />
              </span>
              <span className="font-serif text-xl text-slate-100">
                Micro<span className="text-cyan-300">Cosmos</span>
              </span>
            </div>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-md">
              An independent visual journal celebrating the microscopic world.
              Founded by a small team of biologists, photographers, and writers
              who believe wonder is a renewable resource.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/40 inline-flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-slate-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#gallery" className="hover:text-cyan-300">Gallery</a>
              </li>
              <li>
                <a href="#kingdoms" className="hover:text-cyan-300">Kingdoms</a>
              </li>
              <li>
                <a href="#scale" className="hover:text-cyan-300">Scale</a>
              </li>
              <li>
                <a href="#stories" className="hover:text-cyan-300">Stories</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-slate-400">
              About
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-cyan-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-cyan-300">Contributors</a></li>
              <li><a href="#" className="hover:text-cyan-300">Press Kit</a></li>
              <li><a href="#" className="hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MicroCosmos Journal. All rights reserved.</span>
          <span className="italic font-serif text-slate-400">
            "There is grandeur in this view of life." — Charles Darwin
          </span>
        </div>
      </div>
    </footer>
  )
}
