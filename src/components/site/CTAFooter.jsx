import { Microscope, Mail, Github, Twitter, Instagram } from 'lucide-react'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CTAFooter() {
  return (
    <footer className="relative bg-slate-950">
      {/* CTA banner */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30 bg-cover bg-center"
          data-strk-bg-id="cta-bg-microscope-zz9"
          data-strk-bg="[cta-title] microscope laboratory close up dark"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />

        <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Keep exploring</span>
          <h2 id="cta-title" className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
            Look closer. The world is bigger than it seems.
          </h2>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
            Subscribe to receive a new microscope photograph each week, along with the story
            of the creature inside it.
          </p>

          <form
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@microcosmos.org"
              className="flex-1 rounded-full bg-slate-900/80 border border-white/10 px-5 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer info */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-slate-100">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950">
                <Microscope className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-wide">MicroCosmos</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              An online journal celebrating the photographic exploration of microscopic life.
              Curated by biologists, photographers and curious wanderers.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-teal-300">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-teal-300">About</a></li>
              <li><a href="#worlds" className="hover:text-teal-300">Six small worlds</a></li>
              <li><a href="#inhabitants" className="hover:text-teal-300">Inhabitants</a></li>
              <li><a href="#scales" className="hover:text-teal-300">Powers of ten</a></li>
              <li><a href="#gallery" className="hover:text-teal-300">Photo gallery</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-teal-300">Follow</div>
            <div className="mt-4 flex gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-teal-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Twitter" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-teal-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a aria-label="GitHub" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-teal-300">
                <Github className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 relative h-24 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
              <img
                alt="Microscopic life"
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover"
                data-strk-img-id="footer-strip-life-77"
                data-strk-img="bioluminescent microbes microscope dark"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} MicroCosmos. All micrographs courtesy of their creators.</div>
            <div>Made with curiosity and a 100× objective.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
