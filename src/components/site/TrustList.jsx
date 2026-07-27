import { ShieldCheck } from 'lucide-react'

const TrustList = ({ items }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <p className="text-sm leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default TrustList
