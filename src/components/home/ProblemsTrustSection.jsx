import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { problems, trustPoints } from '@/data/siteContent.js'

const ProblemsTrustSection = () => (
  <section className="bg-white py-16 text-slate-950 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
          <SectionHeading
            eyebrow="Problems we solve"
            title="Reduce common sourcing uncertainty before it becomes expensive"
            description="International buying can be difficult when supplier information, quality expectations, and shipping details are unclear."
            theme="dark"
          />
          <div className="mt-8 space-y-4">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-amber-300" />
                <p className="text-sm font-medium leading-6 text-slate-100">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-950 lg:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">Trust points for practical B2B buying</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            SSourcing China supports decisions with clear checks, structured communication, and local follow-up. We aim to make risks visible, not hidden.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point.value} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-blue-700" />
                <p className="mt-4 text-lg font-bold text-slate-950">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProblemsTrustSection
