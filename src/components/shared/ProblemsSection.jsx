import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { problemsSolved } from '../../data/siteContent'
import SectionHeader from './SectionHeader'
import StockImage from './StockImage'

const ProblemsSection = () => (
  <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <StockImage
          alt="Quality inspection and packaging checks before shipment"
          className="h-80 w-full object-cover md:h-[520px]"
          id="problems-qc-packaging-4d92a7"
          query="[problems-section-description] [problems-section-title]"
          ratio="3x4"
          width="900"
        />
      </div>
      <div>
        <SectionHeader
          eyebrow="Problems we solve"
          title="Reduce sourcing risk before it reaches your shipment"
          description="Many sourcing issues start with unclear supplier fit, incomplete requirements, or weak production follow-up. We help buyers organize the details earlier."
        />
        <p className="sr-only" id="problems-section-title">China sourcing quality control supplier verification packaging shipment coordination</p>
        <p className="sr-only" id="problems-section-description">Factory checks inspection production follow-up overseas buyer sourcing problems</p>
        <div className="mt-8 grid gap-3">
          {problemsSolved.map((item) => (
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm" key={item}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p className="text-sm leading-6">
            We do not promise unrealistic results. Our role is to provide practical local support, clearer information, and better coordination so buyers can make informed decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default ProblemsSection
