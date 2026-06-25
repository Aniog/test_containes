import { highlights } from '@/data/siteContent'

const StatsStrip = () => {
  return (
    <section className="px-6 py-8 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur md:grid-cols-3 md:p-8">
        {highlights.map((item) => (
          <div
            key={item.value}
            className="rounded-3xl border border-white/8 bg-slate-950/40 p-5 text-white"
          >
            <p className="text-3xl font-semibold text-amber-300 md:text-4xl">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
