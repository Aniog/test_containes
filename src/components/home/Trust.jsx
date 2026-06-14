import { TRUST_POINTS } from '@/content/site'

const Trust = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {TRUST_POINTS.map((t) => (
      <div
        key={t.label}
        className="bg-white border border-slate-200 rounded-lg p-6 md:p-7 text-center"
      >
        <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
          {t.stat}
        </div>
        <div className="mt-2 text-sm font-semibold text-accent uppercase tracking-wider">
          {t.label}
        </div>
        <p className="mt-3 text-sm text-primary-600 leading-relaxed max-w-xs mx-auto">
          {t.desc}
        </p>
      </div>
    ))}
  </div>
)

export default Trust
