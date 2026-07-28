import ButtonLink from '@/components/common/ButtonLink'

export default function PageHero({ eyebrow, title, description, primaryLabel = 'Get a Free Sourcing Quote' }) {
  return (
    <section className="border-b border-slate-950/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700/75 md:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <ButtonLink to="/contact">{primaryLabel}</ButtonLink>
        </div>
      </div>
    </section>
  )
}
