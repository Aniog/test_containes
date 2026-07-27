const PageHero = ({ eyebrow, title, children }) => (
  <section className="border-b border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {children}
        </div>
      )}
    </div>
  </section>
)

export default PageHero
