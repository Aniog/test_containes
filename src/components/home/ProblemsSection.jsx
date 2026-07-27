import { AlertTriangle, XCircle, HelpCircle, FileX, Clock, DollarSign } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Finding trustworthy manufacturers is difficult. Many suppliers on B2B platforms are trading companies, not factories.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Without on-site inspections, defective products may only be discovered after they arrive at your warehouse.',
  },
  {
    icon: HelpCircle,
    title: 'Communication Barriers',
    description: 'Language differences and time zone gaps lead to misunderstandings, delays, and costly mistakes.',
  },
  {
    icon: FileX,
    title: 'No Factory Verification',
    description: 'It is hard to verify if a supplier actually owns the factory they claim or has the capacity to fulfill your order.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Without someone monitoring production locally, delays go unnoticed until it is too late to adjust.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees for shipping, customs, and quality issues can quickly erode your profit margins.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="problems-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Problems We Solve
          </h2>
          <p className="text-muted-foreground">
            Sourcing from China comes with real challenges. We address each one directly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
