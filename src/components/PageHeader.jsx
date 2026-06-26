export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
