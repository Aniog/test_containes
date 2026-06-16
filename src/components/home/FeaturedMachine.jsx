import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { products } from '@/data/catalog'

const featured = products[0]
const detailBullets = [
  'Two independently controlled folding beams in a single pass',
  'Closed-loop hydraulics with laser angle feedback',
  'Welded and stress-relieved frame, machined in one setup',
  '15" multi-touch HMI with saved recipes for repeat parts',
]

export default function FeaturedMachine() {
  return (
    <section
      className="bg-paper py-24 md:py-32"
      aria-labelledby="featured-title"
    >
      <div className="container-page">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-2 bg-bone">
              <img
                alt={featured.name}
                data-strk-img-id="featured-double-folding-machine-7b3a91"
                data-strk-img="[featured-specs] [featured-title] [featured-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-paper/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-brass">
                  Flagship
                </span>
                <span className="rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-white">
                  Up to 4000 mm
                </span>
                <span className="rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-white">
                  3.0 mm mild steel
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <p
              id="featured-eyebrow"
              className="eyebrow eyebrow-line text-brass-2"
            >
              <span>Featured machine</span>
            </p>
            <h2
              id="featured-title"
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl"
            >
              The Double Folding Machine.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ash">
              Two synchronized beams fold both edges of a sheet in a single
              pass — so a deep pan, a cleanroom panel, or an architectural
              cladding section comes off the machine fully formed, with
              perfectly symmetrical edges and zero part flipping.
            </p>

            <ul
              id="featured-specs"
              className="mt-8 space-y-3"
            >
              {detailBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brass/40 bg-paper text-brass-2">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{bullet}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line-2 bg-line-2">
              {Object.entries(featured.specs).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 bg-paper px-4 py-3"
                >
                  <dt className="text-[10px] font-medium uppercase tracking-eyebrow text-ash">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/products/${featured.id}`}
                className="btn-primary"
              >
                See full specifications
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <Link to="/contact" className="btn-secondary-light">
                Book a live demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
