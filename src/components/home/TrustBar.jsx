import { Globe2, Package, Building2, Users } from 'lucide-react'

const stats = [
  { icon: Globe2, value: '40+', label: 'Buyer countries served' },
  { icon: Building2, value: '600+', label: 'Audited factory partners' },
  { icon: Package, value: '1,200+', label: 'Orders shipped each year' },
  { icon: Users, value: '10 yrs', label: 'On-the-ground experience' },
]

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex w-11 h-11 items-center justify-center rounded-md bg-white border border-slate-200 text-blue-700 shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">{value}</p>
                <p className="text-xs md:text-sm text-slate-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
