import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { problems, trustPoints } from '../../data'
import SectionHeader from '../common/SectionHeader'

export default function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader eyebrow="Problems we solve" title="Reduce sourcing risk before it becomes expensive" text="Many sourcing problems start with unclear information, weak supplier checks, or poor follow-up. SSourcing China helps create visibility at each step." tone="dark" />
            <div className="mt-8 grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-amber-500" />
                  <span className="text-sm leading-6 text-white/84">{problem}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl md:p-8">
            <h3 className="text-2xl font-bold text-slate-900">Trust points</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Clear communication, practical checks, and documented updates help overseas buyers make better decisions.</p>
            <div className="mt-8 grid gap-5">
              {trustPoints.map((point) => (
                <div key={point.value} className="flex gap-4 rounded-2xl bg-slate-100 p-5 text-slate-900">
                  <CheckCircle2 className="h-6 w-6 flex-none text-sky-700" />
                  <div>
                    <p className="font-black text-slate-900">{point.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{point.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
