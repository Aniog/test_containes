import { AlertCircle } from 'lucide-react'

function ProblemList({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
          <p className="text-base leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ProblemList
