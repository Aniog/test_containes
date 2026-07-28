import CTAButton from './CTAButton'

export default function PageHero({ eyebrow, title, description, cta = true }) {
  return (
    <section className="bg-gradient-to-br from-brand-sky via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          {cta && <CTAButton to="/contact" className="mt-8">Get a Free Sourcing Quote</CTAButton>}
        </div>
      </div>
    </section>
  )
}
