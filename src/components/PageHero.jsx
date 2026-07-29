export default function PageHero({ eyebrow, title, description, imageQueryId = 'page-hero-title' }) {
  return (
    <section className="relative overflow-hidden bg-sourcing-navy py-20 text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id={`${imageQueryId}-bg-82c4d1`}
        data-strk-bg={`[${imageQueryId}]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sourcing-navy via-sourcing-navy/90 to-sourcing-navy/70" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sourcing-gold">{eyebrow}</p>
        <h1 id={imageQueryId} className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-sourcing-mist">{description}</p>
      </div>
    </section>
  )
}
