import { trustPoints } from '@/data/siteContent'

const TrustPointGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {trustPoints.map((item) => (
        <article key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default TrustPointGrid
