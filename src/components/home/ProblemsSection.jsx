import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { XCircle, AlertTriangle, ThumbsUp, TrendingUp, Clock, DollarSign } from 'lucide-react'

const problems = [
  {
    problem: 'Finding reliable suppliers takes too long',
    solution: 'Our database of vetted suppliers and industry connections cuts research time from weeks to days.',
    icon: XCircle,
  },
  {
    problem: 'Risk of factory scams or low-quality products',
    solution: 'We conduct on-site factory audits and rigorous quality inspections before and during production.',
    icon: AlertTriangle,
  },
  {
    problem: 'Communication barriers with Chinese suppliers',
    solution: 'Our bilingual team handles all negotiations, follow-ups, and technical discussions on your behalf.',
    icon: ThumbsUp,
  },
  {
    problem: 'Minimum order quantities are too high',
    solution: 'We negotiate flexible MOQs and can consolidate orders from multiple factories to meet your volume.',
    icon: TrendingUp,
  },
  {
    problem: 'Production delays and missed deadlines',
    solution: 'We monitor production daily and provide real-time updates, flagging issues before they become problems.',
    icon: Clock,
  },
  {
    problem: 'Hidden costs and unexpected fees',
    solution: 'Transparent pricing with detailed cost breakdowns. No surprises, no hidden markups.',
    icon: DollarSign,
  },
]

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Problems We Solve
          </h2>
          <p className="text-surface-500 text-lg">
            Sourcing from China comes with challenges. We handle them so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-surface-800 mb-1">{item.problem}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}