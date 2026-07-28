import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import { problems, trustPoints } from '@/content.js'

const ProblemsTrustSection = () => (
  <section className="bg-brand-navy py-16 text-white md:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">Problems we solve</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Reduce sourcing uncertainty with local checks and clear communication</h2>
        <div className="mt-8 grid gap-3">
          {problems.map((problem) => (
            <p key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-amber" />{problem}</p>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-white p-8 text-brand-slate shadow-card">
        <SectionHeader align="left" eyebrow="Trust points" title="A practical sourcing partner, not a promise machine" description="Our role is to improve visibility, compare options, and help you make better sourcing decisions before money and goods move." />
        <div className="mt-8 grid gap-5">
          {trustPoints.map(({ title, text }) => <article key={title} className="border-l-4 border-brand-amber pl-5"><h3 className="font-semibold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-7 text-brand-muted">{text}</p></article>)}
        </div>
      </div>
    </div>
  </section>
)

export default ProblemsTrustSection
