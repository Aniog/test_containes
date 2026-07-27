import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Package } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    title: 'Electronics Retailer Saves 23% on Manufacturing Costs',
    summary: 'A US-based electronics company was overpaying for consumer accessories. We identified a direct manufacturer, negotiated better terms, and implemented quality controls that reduced defect rates from 8% to under 1%.',
    result: '23% cost reduction, 87% fewer defects',
    industry: 'Electronics',
  },
  {
    icon: Shield,
    title: 'Fashion Brand Avoids $150K in Defective Goods',
    summary: 'A European fashion brand was about to ship 50,000 units when our pre-shipment inspection revealed color inconsistencies and stitching defects. We worked with the factory to correct the issues before delivery.',
    result: '$150K in losses prevented',
    industry: 'Fashion & Apparel',
  },
  {
    icon: Package,
    title: 'Startup Launches Private Label in 8 Weeks',
    summary: 'A UK startup needed to source custom packaging and products for their new brand. We handled everything from supplier identification to quality inspection and shipping, delivering on time for their launch date.',
    result: 'Full product line launched in 8 weeks',
    industry: 'Consumer Goods',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="case-studies-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Case Studies
          </h2>
          <p className="text-muted-foreground">
            Real results from real sourcing projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <study.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {study.industry}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{study.title}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{study.summary}</p>
              <div className="rounded-md bg-secondary/50 p-3">
                <p className="text-sm font-semibold text-foreground">Result: {study.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/case-studies" className="btn-outline">
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
