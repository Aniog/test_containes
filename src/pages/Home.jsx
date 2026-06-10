import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, ShieldCheck, Cog, Gauge, Layers, Wrench } from 'lucide-react'

const products = [
  {
    id: 'duo-pro-2500',
    name: 'DuoFold Pro 2500',
    tagline: 'Double folding machine',
    spec: '2.5 m · 4 mm mild steel',
    descId: 'home-prod-duo-pro-2500-desc',
    titleId: 'home-prod-duo-pro-2500-title',
  },
  {
    id: 'duo-master-3200',
    name: 'DuoMaster 3200',
    tagline: 'Heavy-duty double folder',
    spec: '3.2 m · 6 mm mild steel',
    descId: 'home-prod-duo-master-3200-desc',
    titleId: 'home-prod-duo-master-3200-title',
  },
  {
    id: 'panel-edge-2000',
    name: 'PanelEdge 2000',
    tagline: 'Sheet metal folding machine',
    spec: '2.0 m · 3 mm aluminium',
    descId: 'home-prod-panel-edge-2000-desc',
    titleId: 'home-prod-panel-edge-2000-title',
  },
]

const features = [
  { icon: Ruler, title: 'Tenth-of-a-millimetre precision', body: 'Calibrated linear scales and reinforced beams for repeatable folds across long production runs.' },
  { icon: ShieldCheck, title: 'Built to outlast', body: 'Stress-relieved steel frames and hardened tooling deliver decades of reliable fabrication.' },
  { icon: Cog, title: 'Refined controls', body: 'A clear, deliberate interface — every operator productive within an hour of training.' },
  { icon: Gauge, title: 'Faster cycle times', body: 'Optimised pneumatic-hydraulic actuation reduces idle time between bends.' },
  { icon: Layers, title: 'Versatile sheet handling', body: 'Confident folding from delicate aluminium to thick mild steel, all on one frame.' },
  { icon: Wrench, title: 'Serviceable by design', body: 'Modular subassemblies and accessible fasteners keep your line moving.' },
]

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6 fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-amber-brand" />
              <span id="hero-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">
                Precision sheet metal folding
              </span>
            </div>
            <h1 id="hero-title" className="font-serif font-light text-5xl md:text-7xl leading-[1.05] text-ink">
              Folds that <em className="not-italic text-amber-brand">define</em> the work.
            </h1>
            <p id="hero-subtitle" className="mt-8 text-lg text-graphite max-w-xl leading-relaxed">
              Artitect Machinery designs and builds elegant, dependable double folding
              machines and sheet metal folders for fabricators who measure quality
              one bend at a time.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-ink text-canvas px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors"
              >
                Explore the range
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ink hover:text-canvas transition-colors"
              >
                Speak to an engineer
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
              <div>
                <div className="font-serif text-4xl text-ink">28</div>
                <div className="text-xs uppercase tracking-widest2 text-steel mt-2">Years in service</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-ink">42</div>
                <div className="text-xs uppercase tracking-widest2 text-steel mt-2">Countries shipped</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-ink">99.4%</div>
                <div className="text-xs uppercase tracking-widest2 text-steel mt-2">Uptime average</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-mist bg-canvas">
              <img
                alt="Industrial sheet metal folding machine"
                data-strk-img-id="home-hero-machine-9c4b22"
                data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-canvas border border-mist p-6 w-64 shadow-sm">
              <div className="text-xs uppercase tracking-widest2 text-steel mb-2">Featured</div>
              <div className="font-serif text-2xl text-ink leading-tight">DuoMaster 3200</div>
              <div className="text-sm text-graphite mt-1">Heavy-duty double folder</div>
              <div className="h-px w-10 bg-amber-brand mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES STRIP */}
      <section className="border-y border-mist bg-canvas">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center gap-x-10 gap-y-3 justify-center text-xs uppercase tracking-widest2 text-steel">
          <span>Double Folding Machines</span>
          <span className="hidden md:inline text-mist">·</span>
          <span>Sheet Metal Folders</span>
          <span className="hidden md:inline text-mist">·</span>
          <span>Metal Folder Machines</span>
          <span className="hidden md:inline text-mist">·</span>
          <span>Panel Benders</span>
          <span className="hidden md:inline text-mist">·</span>
          <span>Custom Tooling</span>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-brand" />
              <span id="capabilities-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">Capabilities</span>
            </div>
            <h2 id="capabilities-title" className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              Engineered with restraint.
              <br />
              <span className="text-graphite">Designed for the operator.</span>
            </h2>
            <p className="mt-6 text-graphite text-lg leading-relaxed max-w-2xl">
              Every Artitect machine is the result of patient engineering — quiet
              hydraulics, refined geometry, and intuitive controls that respect
              the craft of metal folding.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mist border border-mist">
            {features.map((f) => (
              <div key={f.title} className="bg-canvas p-8 md:p-10 hover:bg-bone transition-colors">
                <f.icon className="w-7 h-7 text-amber-brand" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-2xl text-ink">{f.title}</h3>
                <p className="mt-3 text-graphite leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-brand" />
                <span className="text-xs uppercase tracking-widest2 text-steel">The collection</span>
              </div>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
                Folding machines, refined.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest2 text-ink hover:text-amber-brand transition-colors"
            >
              View all products
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <article key={p.id} className="group">
                <div className="aspect-[4/3] overflow-hidden border border-mist bg-bone">
                  <img
                    alt={p.name}
                    data-strk-img-id={`home-prod-${p.id}-img`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <div id={p.descId} className="text-xs uppercase tracking-widest2 text-steel">
                    {p.tagline}
                  </div>
                  <h3 id={p.titleId} className="mt-2 font-serif text-2xl text-ink">
                    {p.name}
                  </h3>
                  <div className="mt-2 text-sm text-graphite">{p.spec}</div>
                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-amber-brand hover:border-amber-brand transition-colors"
                  >
                    View specifications
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / CRAFT */}
      <section className="bg-ink text-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-brand" />
              <span id="craft-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">The Artitect approach</span>
            </div>
            <h2 id="craft-title" className="font-serif font-light text-4xl md:text-5xl leading-tight">
              Fewer parts.
              <br />Better tolerances.
              <br />Quieter machines.
            </h2>
            <p id="craft-desc" className="mt-6 text-steel text-lg leading-relaxed">
              We design our metal folding machines around the bend itself —
              every component justified by the quality of the fold it produces.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border border-canvas text-canvas px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-canvas hover:text-ink transition-colors"
            >
              Our philosophy
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-graphite border border-graphite">
            {[
              { n: '01', t: 'Specify', d: 'Tell us your sheet sizes, materials and throughput goals.' },
              { n: '02', t: 'Configure', d: 'We tailor tooling, beam length, and back-gauge for your line.' },
              { n: '03', t: 'Commission', d: 'On-site installation, calibration and operator training.' },
              { n: '04', t: 'Sustain', d: 'Lifetime parts availability and remote diagnostics support.' },
            ].map((s) => (
              <div key={s.n} className="bg-ink p-8 md:p-10">
                <div className="font-serif text-3xl text-amber-brand">{s.n}</div>
                <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
                <p className="mt-2 text-steel leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <div className="flex justify-center">
            <div className="h-px w-12 bg-amber-brand" />
          </div>
          <blockquote className="mt-8 font-serif font-light text-3xl md:text-4xl leading-snug text-ink">
            “Three years on the floor, every fold to spec. The Artitect double
            folder is the calmest, most considered machine in our shop.”
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-widest2 text-steel">
            Hugo Werner · Werner Sheetworks GmbH
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas border-t border-mist py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              Ready to specify your next folder?
            </h2>
            <p className="mt-4 text-graphite text-lg max-w-xl">
              Share your application — our engineers respond within one business day.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-canvas px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors self-start md:self-auto"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
