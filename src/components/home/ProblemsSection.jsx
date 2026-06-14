import { useEffect, useRef } from 'react'
import { AlertTriangle, CheckCircle2, Globe2, MessageSquare, FileSearch, Scale, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const problems = [
  {
    icon: Globe2,
    pain: 'I can\'t travel to China right now',
    solution:
      'Our Shenzhen-based team visits factories, takes photos, and runs inspections on your behalf. You get the same information without the flight.',
  },
  {
    icon: MessageSquare,
    pain: 'Language and timezone friction',
    solution:
      'Daily written updates in English, with photos and short video. We work the overlap hours so your inbox is never waiting on a translation.',
  },
  {
    icon: FileSearch,
    pain: 'I don\'t know which supplier to trust',
    solution:
      'Pre-screened network plus on-site audits. We verify the business license, the actual production floor, and the company\'s export history.',
  },
  {
    icon: Scale,
    pain: 'Quality issues only show up at the port',
    solution:
      'DUPRO and pre-shipment inspections against your AQL. Defects get corrected at the factory, not in your warehouse.',
  },
  {
    icon: Clock,
    pain: 'Production is always behind schedule',
    solution:
      'Weekly photo milestones, written progress reports, and a single point of contact who escalates delays early.',
  },
  {
    icon: AlertTriangle,
    pain: 'Hidden fees and surprise costs',
    solution:
      'Transparent quotations with line items, written payment milestones, and a no-surprises policy on tooling and change orders.',
  },
]

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Problems We Solve</div>
          <h2
            id="problems-headline"
            className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy"
          >
            The headaches of sourcing from China, handled
          </h2>
          <p
            id="problems-sub"
            className="mt-4 lead"
          >
            We built SSourcing China around the practical issues overseas buyers
            told us about. Each problem below is something we deal with every
            week — and have a working solution for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.pain}
                className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-status-warning/10 text-status-warning flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {p.pain}
                    </h3>
                    <div className="mt-3 flex items-start gap-2 text-sm text-status-success">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-ink leading-relaxed">{p.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
