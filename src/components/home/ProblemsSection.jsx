import { useEffect, useRef } from 'react'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'

const PROBLEMS = [
  {
    problem: 'Your "factory" turns out to be a middleman',
    solution: 'We verify business licenses and visit the production site, so you know exactly who manufactures your goods.',
  },
  {
    problem: 'Sample quality is great, mass production is not',
    solution: 'During-production and pre-shipment inspections catch deviations before goods leave the factory.',
  },
  {
    problem: 'Suppliers go quiet after the deposit is paid',
    solution: 'Weekly production reports with photos keep you informed — and keep the factory accountable.',
  },
  {
    problem: 'Delays discovered too late to fix',
    solution: 'Milestone tracking flags schedule risks early, while there is still time to adjust.',
  },
  {
    problem: 'Hidden costs erode your margin',
    solution: 'Transparent quotes, verified freight options, and no markups on factory prices.',
  },
  {
    problem: 'Time zones and language slow everything down',
    solution: 'A bilingual team on the ground answers suppliers in hours, not days — in their language and yours.',
  },
]

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Problems We Solve"
              title="Sourcing from China shouldn't feel like a gamble"
              description="Most sourcing problems come down to the same root cause: nobody on the ground looking out for your interests. That is exactly the gap we fill."
            />
            <ul className="mt-8 space-y-5">
              {PROBLEMS.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-accent-500" />
                    <span className="my-1 w-px flex-1 bg-slate-200" />
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  </div>
                  <div className="pb-1">
                    <p className="font-medium text-slate-900">{item.problem}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.solution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              alt="Quality inspector checking products on a factory production line in China"
              className="w-full rounded-2xl object-cover shadow-lg"
              data-strk-img-id="problems-qc-inspector-d4e5f6"
              data-strk-img="[problems-img-caption] [problems-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p id="problems-img-caption" className="text-sm font-medium text-slate-700">
                On-site quality inspection during production at a supplier factory in Guangdong
              </p>
              <p id="problems-title" className="sr-only">Problems we solve with on-the-ground factory verification and quality control inspection in China</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
