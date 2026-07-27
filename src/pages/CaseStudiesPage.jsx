import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Package, DollarSign, Clock, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    title: 'Electronics Retailer Saves 23% on Manufacturing Costs',
    industry: 'Electronics',
    client: 'US-based electronics retailer',
    challenge: 'A US-based electronics company was overpaying for consumer accessories through a middleman trading company. They needed direct factory access, better pricing, and consistent quality control.',
    solution: 'We identified a direct manufacturer in Shenzhen with ISO 9001 certification. After factory verification and sample approval, we negotiated a 23% lower unit price and implemented a three-stage quality inspection process.',
    results: [
      '23% reduction in unit cost',
      'Defect rate reduced from 8% to under 1%',
      'Lead time shortened by 2 weeks',
      'Annual savings of over $180,000',
    ],
    quote: 'SSourcing China helped us cut costs significantly while improving quality. Their on-the-ground team made all the difference.',
  },
  {
    icon: Shield,
    title: 'Fashion Brand Avoids $150K in Defective Goods',
    industry: 'Fashion & Apparel',
    client: 'European fashion brand',
    challenge: 'A European fashion brand was about to ship 50,000 units of a new clothing line when they engaged our services for a pre-shipment inspection.',
    solution: 'Our inspectors discovered color inconsistencies and stitching defects that did not meet the approved sample standards. We worked with the factory to correct the issues, re-inspected the corrected batch, and only approved shipment after quality standards were met.',
    results: [
      '$150,000 in potential losses prevented',
      '100% of units met quality standards',
      'Shipment delayed by only 5 days for corrections',
      'Long-term supplier relationship established',
    ],
    quote: 'Without their inspection, we would have received 50,000 defective units. They saved our product launch.',
  },
  {
    icon: Package,
    title: 'Startup Launches Private Label in 8 Weeks',
    industry: 'Consumer Goods',
    client: 'UK-based startup',
    challenge: 'A UK startup needed to source custom packaging and products for their new private label brand. They had no experience sourcing from China and needed end-to-end support within a tight timeline.',
    solution: 'We handled everything from supplier identification to quality inspection and shipping. We sourced both the products and custom packaging from coordinated suppliers, managed the production timeline, and ensured everything arrived in time for their launch date.',
    results: [
      'Full product line launched in 8 weeks',
      'Custom packaging designed and produced',
      'All products passed quality inspection',
      'On-time delivery for launch date',
    ],
    quote: 'As a first-time importer, we could not have done this without SSourcing China. They handled everything professionally.',
  },
  {
    icon: DollarSign,
    title: 'Automotive Parts Distributor Reduces Lead Time by 40%',
    industry: 'Automotive',
    client: 'Australian automotive parts distributor',
    challenge: 'An Australian distributor was experiencing long lead times and inconsistent quality from their existing Chinese supplier. They needed a more reliable manufacturing partner.',
    solution: 'We identified a larger, more capable manufacturer with better production systems. After thorough verification and a trial order, we transitioned their entire product line to the new supplier and implemented regular quality inspections.',
    results: [
      'Lead time reduced from 10 weeks to 6 weeks',
      'Quality consistency improved to 99.2%',
      'Unit cost reduced by 12%',
      'Zero defective shipments in 12 months',
    ],
    quote: 'The switch to a better supplier transformed our business. SSourcing China made the transition seamless.',
  },
  {
    icon: Clock,
    title: 'Home Goods Brand Scales from 10 to 200 SKUs',
    industry: 'Home & Garden',
    client: 'Canadian home goods brand',
    challenge: 'A Canadian home goods brand wanted to expand their product range from 10 to over 200 SKUs but lacked the resources to manage multiple suppliers and quality control processes.',
    solution: 'We built a supplier network across multiple categories, coordinated production schedules, and implemented a standardized quality inspection process for all products. We also consolidated shipments to reduce logistics costs.',
    results: [
      'Product range expanded to 200+ SKUs',
      'Shipping costs reduced by 18% through consolidation',
      'Consistent quality across all product lines',
      'Single point of contact for all sourcing needs',
    ],
    quote: 'They became an extension of our team. We scaled our product range without scaling our overhead.',
  },
  {
    icon: CheckCircle,
    title: 'Medical Device Company Achieves Full Compliance',
    industry: 'Medical & Health',
    client: 'German medical device company',
    challenge: 'A German medical device company needed a Chinese manufacturer that could meet strict EU regulatory requirements including ISO 13485 and CE marking standards.',
    solution: 'We identified and verified a manufacturer with the required certifications, conducted thorough audits of their quality management system, and coordinated the regulatory documentation needed for CE marking.',
    results: [
      'Full ISO 13485 compliance verified',
      'CE marking documentation completed',
      'Successful regulatory audit passed',
      'Ongoing production with zero compliance issues',
    ],
    quote: 'Their understanding of regulatory requirements and attention to detail gave us complete confidence in our Chinese manufacturing partner.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground">
              Real results from real sourcing projects. See how we have helped businesses like yours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <study.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{study.title}</h2>
                  <p className="mb-4 text-sm text-muted-foreground">Client: {study.client}</p>

                  <div className="mb-4 space-y-4">
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-foreground">Challenge</h3>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-foreground">Solution</h3>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">Results</h3>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="rounded-lg bg-secondary/50 p-4 text-sm italic text-muted-foreground">
                    "{study.quote}"
                  </blockquote>
                </div>

                <div className="flex-1">
                  <div
                    className="aspect-video w-full rounded-lg bg-secondary"
                    data-strk-bg-id={`case-study-bg-${index}`}
                    data-strk-bg={`[case-study-title-${index}] [case-studies-page-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <study.icon className="h-16 w-16 opacity-20" />
                    </div>
                  </div>
                  <span id={`case-study-title-${index}`} className="sr-only">
                    {study.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Tell us about your sourcing needs and let us help you achieve similar results.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
