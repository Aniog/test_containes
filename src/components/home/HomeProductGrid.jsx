import { productItems } from './home-content'

const HomeProductGrid = () => {
  return (
    <section id="machines" className="px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
              Product range
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              A polished lineup for buyers searching for folding systems with clarity.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            ARTITECT MACHINERY can present every core search intent in a clean, premium
            layout so visitors quickly understand your machine categories and strengths.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.id}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
                  {item.blurb}
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  Built to support refined sheet metal production stories.
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeProductGrid
