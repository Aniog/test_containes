import { useEffect, useRef } from 'react'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { problems, trustPoints } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProblemsTrustSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p id="problems-eyebrow" className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            Problems we solve
          </p>
          <h2 id="problems-title" className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Reduce common China sourcing risks before they become expensive
          </h2>
          <p id="problems-desc" className="mt-5 text-base leading-7 text-slate-200 md:text-lg">
            Buyers often need more than a supplier name. They need clear verification, realistic communication, and active follow-up while goods are being made.
          </p>
          <div
            className="mt-8 min-h-72 rounded-3xl border border-white/10 bg-cover bg-center shadow-card"
            data-strk-bg-id="problems-qc-factory-39ad8e"
            data-strk-bg="[problems-desc] [problems-title] [problems-eyebrow]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1100"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <SectionHeader eyebrow="Risk areas" title="Common issues" inverted />
            <div className="mt-6 grid gap-4">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 rounded-2xl bg-white/10 p-4 text-slate-100">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-amber-300" />
                  <p className="text-sm leading-6">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Trust points</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">What buyers can expect</h3>
            <div className="mt-6 grid gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                  <p className="text-sm leading-6 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsTrustSection
