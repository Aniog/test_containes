import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react'
import { problems, trustPoints } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProblemsTrustSection = () => (
  <section className="bg-brand-mist py-16 text-brand-navy md:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="rounded-3xl border border-brand-line bg-white p-6 shadow-soft md:p-8">
        <SectionHeader
          eyebrow="Problems we solve"
          title="Reduce the common risks of buying from overseas suppliers"
          description="Good sourcing is not only about finding a low price. It is about confirming fit, quality, timing, and communication before each decision."
        />
        <div className="mt-8 grid gap-3">
          {problems.map((problem) => (
            <p key={problem} className="flex gap-3 rounded-2xl bg-brand-mist px-4 py-3 text-sm font-medium text-brand-navy">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              {problem}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-brand-line bg-brand-navy p-6 text-white shadow-soft md:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-gold">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">Trust points for practical sourcing work</h2>
        <p className="mt-4 text-base leading-7 text-white/78">
          SSourcing China provides local coordination and clear English reporting so overseas buyers can make sourcing decisions with better context.
        </p>
        <div className="mt-8 grid gap-3">
          {trustPoints.map((point) => (
            <p key={point} className="flex gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default ProblemsTrustSection
