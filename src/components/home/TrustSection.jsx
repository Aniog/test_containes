import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Users, Building2, BadgeCheck, Globe, BarChart3, Ship } from 'lucide-react'

const stats = [
  { icon: Building2, value: '500+', label: 'Verified Suppliers' },
  { icon: BadgeCheck, value: '98%', label: 'Inspection Pass Rate' },
  { icon: Ship, value: '1000+', label: 'Shipments Managed' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Users, value: '200+', label: 'Active Clients' },
  { icon: BarChart3, value: '12+', label: 'Years Experience' },
]

const trustPoints = [
  'Registered company in Guangzhou, China with a physical office',
  'On-site factory audits conducted by our experienced QC team',
  'Transparent pricing with detailed cost breakdowns',
  'Dedicated account manager for every client',
  'NDA protection for your product designs and sourcing needs',
  'Payment terms structured to protect your interests',
]

export default function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-brand-500" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-brand-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}