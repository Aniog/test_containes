import { AlertCircle, Check } from 'lucide-react'
import { PROBLEMS } from '@/content/site'

const Problems = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
    {PROBLEMS.map((p, idx) => (
      <div
        key={p.title}
        className="relative bg-white border border-slate-200 rounded-lg p-6 md:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-50 text-accent flex-shrink-0">
            <AlertCircle className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-1.5">"{p.title}"</h3>
            <p className="text-sm md:text-base text-primary-600 leading-relaxed">{p.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Problems
