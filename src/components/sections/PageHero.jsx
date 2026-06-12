import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, text, cta = true }) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">{text}</p>
          {cta && (
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700">
              Get a Free Sourcing Quote
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
