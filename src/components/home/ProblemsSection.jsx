import { AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const problems = [
  'Language barriers making communication difficult',
  'Unreliable suppliers delivering poor quality',
  'No visibility into production progress',
  'Hidden costs and unexpected fees',
  'Complicated shipping and customs paperwork',
  'Difficulty verifying factory legitimacy',
]

const solutions = [
  'Bilingual sourcing team fluent in English and Chinese',
  'Rigorous supplier vetting and on-site verification',
  'Real-time production updates and photo reports',
  'Transparent pricing with no hidden charges',
  'End-to-end logistics and documentation handled',
  'Verified factory audits with detailed reports',
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Sourcing from China Shouldn't Be a Gamble"
          subtitle="We solve the most common problems overseas buyers face when dealing directly with Chinese suppliers."
          light
        />
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 md:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Common Problems</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">How We Fix Them</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
