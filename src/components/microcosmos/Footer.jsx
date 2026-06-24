import { Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500">
              <span className="absolute inset-1 rounded-full bg-slate-950" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>
            <span className="text-slate-100 font-extrabold tracking-tight">
              Micro<span className="text-cyan-300">Cosmos</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
            A celebration of the living world below the threshold of sight. Built
            with curiosity for naturalists, students, and anyone who has ever held
            a magnifying glass and wondered.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/80">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="text-slate-300 hover:text-cyan-300 transition-colors">About</a></li>
            <li><a href="#explore" className="text-slate-300 hover:text-cyan-300 transition-colors">Inhabitants</a></li>
            <li><a href="#scale" className="text-slate-300 hover:text-cyan-300 transition-colors">Sense of scale</a></li>
            <li><a href="#gallery" className="text-slate-300 hover:text-cyan-300 transition-colors">Gallery</a></li>
            <li><a href="#contact" className="text-slate-300 hover:text-cyan-300 transition-colors">Newsletter</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/80">
            Follow the lens
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Github, label: 'GitHub' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/40 transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} MicroCosmos. All organisms welcome.
          </p>
        </div>
      </div>
    </footer>
  )
}
