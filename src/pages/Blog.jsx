import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const featured = {
  id: 'b1',
  category: 'Supplier Verification',
  title: 'How to spot a trader pretending to be a manufacturer',
  excerpt:
    'Eight practical checks you can run in 30 minutes before sending a single sample request. Includes the questions Chinese traders rarely answer well.',
  date: 'May 28, 2026',
  readMin: 8,
}

const posts = [
  {
    id: 'b2',
    category: 'Quality Control',
    title: 'AQL 2.5 explained for new importers (with example calculations)',
    excerpt: 'What AQL 2.5 actually means in a pre-shipment inspection, how sample sizes are chosen, and how to read an inspection report.',
    date: 'May 12, 2026',
    readMin: 7,
  },
  {
    id: 'b3',
    category: 'Logistics',
    title: 'FOB, EXW, DDP: choosing the right Incoterm for your first orders',
    excerpt: 'A practical breakdown of which Incoterms transfer which risks and costs, with simple recommendations by buyer profile.',
    date: 'April 30, 2026',
    readMin: 6,
  },
  {
    id: 'b4',
    category: 'Negotiation',
    title: 'Getting honest quotations: a checklist for your RFQ',
    excerpt: 'A line-item RFQ template that prevents hidden costs in tooling, packaging, and MOQ surprises.',
    date: 'April 18, 2026',
    readMin: 5,
  },
  {
    id: 'b5',
    category: 'Production',
    title: 'Reading a Chinese factory: capacity, equipment, certifications',
    excerpt: 'What to look at during a factory audit, beyond a polished showroom or a flashy company profile PDF.',
    date: 'April 02, 2026',
    readMin: 9,
  },
  {
    id: 'b6',
    category: 'Compliance',
    title: 'Common product certifications by destination market',
    excerpt: 'CE, FCC, RoHS, EN71, ASTM and CPSIA: what your factory needs to prove and what you should ask to see.',
    date: 'March 21, 2026',
    readMin: 7,
  },
  {
    id: 'b7',
    category: 'Logistics',
    title: 'Sea, air, rail or express: cost-vs-time matrix for B2B importers',
    excerpt: 'A no-nonsense framework to choose your shipping mode based on order size, margin, and lead time.',
    date: 'March 06, 2026',
    readMin: 6,
  },
]

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for buyers importing from China"
        description="Honest, no-fluff articles from our team on sourcing, quality control, negotiation, and shipping."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm grid lg:grid-cols-12 mb-14">
            <div className="lg:col-span-6">
              <img
                alt={featured.title}
                className="w-full h-full object-cover aspect-[16/9] lg:aspect-auto"
                data-strk-img-id={`blog-feat-${featured.id}-1a`}
                data-strk-img={`[blog-feat-${featured.id}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-3 text-xs">
                <span className="font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                  Featured · {featured.category}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Calendar className="w-3.5 h-3.5" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5" /> {featured.readMin} min read
                </span>
              </div>
              <h2 id={`blog-feat-${featured.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy mt-auto"
              >
                Read article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-brand-blue transition flex flex-col"
              >
                <img
                  alt={p.title}
                  className="w-full aspect-[16/9] object-cover"
                  data-strk-img-id={`blog-${p.id}-img-4d`}
                  data-strk-img={`[blog-${p.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-2 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-brand-blue">
                      {p.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{p.readMin} min read</span>
                  </div>
                  <h3 id={`blog-${p.id}-title`} className="font-semibold text-slate-900 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {p.date}
                    </span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:text-brand-navy"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Ready to apply this to your own sourcing project?
          </h2>
          <p className="mt-3 text-slate-300">
            Send us a brief. Get a clear scope and a free initial supplier shortlist.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-7 py-3 rounded-md font-semibold transition"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
