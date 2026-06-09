export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          {children ? <div className="pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
