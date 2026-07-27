import { CheckCircle, Globe2, Languages, Clock, ShieldCheck, DollarSign } from 'lucide-react'

const trustPoints = [
  {
    icon: Globe2,
    title: 'On-the-Ground Team',
    description: 'Our team is based in China with direct access to factories and suppliers across all major manufacturing regions.',
  },
  {
    icon: Languages,
    title: 'Bilingual Communication',
    description: 'We bridge the language gap with fluent English and Chinese communication, ensuring nothing gets lost in translation.',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    description: 'We work during China business hours so you get real-time updates while you sleep. Wake up to progress reports.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Suppliers Only',
    description: 'Every supplier goes through our verification process including license checks, factory audits, and reference validation.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. We provide clear pricing for our services and help you negotiate the best factory prices.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guarantee',
    description: 'Our inspection process catches issues before shipment. We do not release payment until quality standards are met.',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="trust-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Buyers Trust Us
          </h2>
          <p className="text-muted-foreground">
            We remove the risk and complexity of sourcing from China.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
