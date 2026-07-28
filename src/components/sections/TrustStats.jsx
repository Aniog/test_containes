import { heroStats } from '@/data/siteContent'

const TrustStats = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {heroStats.map((item) => (
        <div key={item.label} className="rounded-2xl border border-line bg-white p-5">
          <p className="text-2xl font-bold text-brand-navy">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default TrustStats
