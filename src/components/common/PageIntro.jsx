const PageIntro = ({ eyebrow, title, description }) => (
  <section className="border-b border-stone-200/10 bg-stone-950 px-6 pb-10 pt-32 lg:px-10">
    <div className="mx-auto max-w-7xl space-y-4">
      <p className="tracking-kicker text-xs uppercase text-amber-200">{eyebrow}</p>
      <h1 className="font-display text-5xl font-semibold leading-none text-stone-50 md:text-6xl">{title}</h1>
      <p className="max-w-2xl text-base leading-7 text-stone-300">{description}</p>
    </div>
  </section>
)

export default PageIntro
