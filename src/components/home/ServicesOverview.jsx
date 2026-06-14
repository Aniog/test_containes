import { Link } from 'react-router-dom'
import { Search, ShieldCheck, BadgeCheck, ClipboardCheck, FlaskConical, Truck, Cog, FileText, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/content/site'

const ICONS = {
  sourcing: Search,
  verification: ShieldCheck,
  qc: BadgeCheck,
  production: ClipboardCheck,
  sampling: FlaskConical,
  shipping: Truck,
  oem: Cog,
  documentation: FileText,
}

const ServicesOverview = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {SERVICES.map((s) => {
      const Icon = ICONS[s.id] || ShieldCheck
      return (
        <div key={s.id} className="card flex flex-col h-full">
          <div className="w-11 h-11 inline-flex items-center justify-center rounded-md bg-primary-50 text-primary mb-4">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
          <p className="text-sm text-primary-600 leading-relaxed flex-1">{s.summary}</p>
        </div>
      )
    })}
  </div>
)

export default ServicesOverview
