import { useEffect, useRef } from 'react'
import { XCircle, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const problems = [
  { id: 'unknown-suppliers', text: 'Hard to identify reliable suppliers from thousands of options online' },
  { id: 'quality-risks', text: 'Quality inconsistencies and no way to verify before shipment arrives' },
  { id: 'communication', text: 'Language barriers and time zone differences slow everything down' },
  { id: 'hidden-costs', text: 'Unexpected costs, hidden fees, and unclear pricing from middlemen' },
  { id: 'factory-claims', text: 'Factories claiming certifications and capacity they do not actually have' },
  { id: 'logistics', text: 'Complex shipping, customs clearance, and delivery coordination' },
]

const solutions = [
  { id: 'sourcing-network', text: 'Access a vetted network of 5,000+ pre-qualified manufacturers' },
  { id: 'qc-inspections', text: 'On-site quality inspections at every stage — before, during, and after production' },
  { id: 'bilingual-team', text: 'Bilingual team based in China working in your time zone with clear communication' },
  { id: 'transparent-pricing', text: 'Transparent pricing with factory-direct costs and clear service fees' },
  { id: 'factory-audits', text: 'In-person factory audits verifying certifications, equipment, and production lines' },
  { id: 'shipping-mgmt', text: 'Full logistics management from factory door to your warehouse' },
]

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            Sourcing from China comes with challenges. We have the solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Common Challenges
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p.id} className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 p-4">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-600">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s.id} className="flex items-start gap-3 bg-white rounded-lg border border-green-100 p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-600">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] bg-gray-100">
              <img
                alt="Quality inspection team at Chinese factory"
                data-strk-img-id="problems-solution-img-f6a9d2"
                data-strk-img="quality control inspection team Chinese factory warehouse"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                We are your eyes and ears on the ground in China
              </h3>
              <p className="text-navy-500 leading-relaxed mb-4">
                Our team of sourcing specialists, quality engineers, and logistics coordinators works directly with factories across China. We do not just match you with suppliers — we manage the entire relationship.
              </p>
              <p className="text-navy-500 leading-relaxed">
                When you work with SSourcing China, you get a dedicated team that treats your business like their own. No middlemen, no surprises — just reliable sourcing you can count on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}