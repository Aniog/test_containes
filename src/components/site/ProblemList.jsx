import { AlertCircle } from 'lucide-react'

const ProblemList = ({ items }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-4 rounded-3xl border border-brand-line bg-white p-5 shadow-card">
          <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-amber-50 text-brand-gold">
            <AlertCircle className="h-5 w-5" />
          </div>
          <p className="text-base leading-7 text-brand-slate">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ProblemList
