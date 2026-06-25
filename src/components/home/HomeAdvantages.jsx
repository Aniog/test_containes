import { advantageItems } from './home-content'

const HomeAdvantages = () => {
  return (
    <section id="advantages" className="px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 px-6 py-10 text-white md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-amber-300">
              Why this style works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Elegant design makes industrial products feel easier to trust.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              The visual direction keeps the site premium and calm while still making
              key machine details easy to read for busy procurement teams and shop owners.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {advantageItems.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAdvantages
