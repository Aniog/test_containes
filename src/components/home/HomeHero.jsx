import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { STATS } from '@/data/siteContent'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3a8c1d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/92 to-brand/55" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber ring-1 ring-white/20">
            <Icon name="MapPin" className="h-3.5 w-3.5" />
            Based in Shenzhen, Yiwu & Ningbo
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping — so you can import from China with
            confidence and without the guesswork.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" variant="amber" size="lg">
              Get a Free Sourcing Quote
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button
              as={Link}
              to="/how-it-works"
              size="lg"
              className="border border-white/30 bg-white/5 text-white hover:bg-white/15"
            >
              See How It Works
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-amber sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-slate-300 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
