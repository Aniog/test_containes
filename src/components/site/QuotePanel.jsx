import { CheckCircle2 } from 'lucide-react'

const QuotePanel = ({ title, description, bullets }) => {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      <div className="mt-6 space-y-4">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-400" />
            <p className="text-sm leading-7 text-slate-200">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuotePanel
