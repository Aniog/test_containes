export default function SimplePage({ title, eyebrow, description }) {
  return (
    <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-velmora-stone/15 bg-white px-6 py-12 text-center shadow-soft md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-stone">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-5xl text-velmora-ink md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-velmora-stone md:text-base">
          {description}
        </p>
      </div>
    </section>
  )
}
