export default function AdvantagesSection({ highlights, industries }) {
  return (
    <section id="advantages" className="bg-slate-950 py-16 text-stone-50 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-300">
            Why ARTITECT MACHINERY
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">
            A more elegant machine experience without losing industrial strength.
          </h2>
          <p className="text-base leading-7 text-stone-300 md:text-lg">
            We position folding equipment as a refined production asset: powerful,
            practical, and easier for people to work with every day.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-200">
              Best suited for
            </p>
            <ul className="mt-5 space-y-3">
              {industries.map((industry) => (
                <li key={industry} className="text-sm leading-6 text-stone-300">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10"
            >
              <h3 className="text-xl font-semibold text-stone-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
