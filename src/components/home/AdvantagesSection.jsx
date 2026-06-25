import { advantages } from './content'

const AdvantagesSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Why ARTITECT MACHINERY
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Industrial capability presented with clarity and confidence.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            The site experience is intentionally elegant, but always practical. Buyers
            can quickly understand the machinery focus, the value of the range, and the
            next step toward the right folding solution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 text-slate-950 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
