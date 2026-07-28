import { CheckCircle2 } from 'lucide-react'
import { problems } from '@/data/siteContent'

const ProblemsList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {problems.map((problem) => (
        <div key={problem} className="flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-blue" />
          <p className="text-sm leading-7 text-slate-700">{problem}</p>
        </div>
      ))}
    </div>
  )
}

export default ProblemsList
