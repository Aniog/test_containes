import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, TrendingDown, TrendingUp, Clock, ShieldCheck } from 'lucide-react'

const cases = [
  {
    client: 'European Kitchenware Brand',
    industry: 'Home & Kitchen',
    challenge:
      'The client was experiencing an 8% defect rate from their existing supplier in Zhejiang. Returns were hurting their Amazon seller rating and margins were shrinking.',
    solution:
      'We conducted a full factory audit, identified root causes in the finishing process, and sourced an alternative factory with better QC systems. We implemented AQL-based inspections at three stages.',
    results: [
      { label: 'Defect rate reduced', value: '8% → <1%', icon: TrendingDown },
      { label: 'Return rate drop', value: '-85%', icon: TrendingDown },
      { label: 'Amazon rating recovery', value: '4.2 → 4.7', icon: TrendingUp },
    ],
    tags: ['Quality Control', 'Supplier Switch', 'Amazon FBA'],
  },
  {
    client: 'US Electronics Startup',
    industry: 'Consumer Electronics',
    challenge:
      'A hardware startup needed to source PCBs, plastic enclosures, and packaging for a new IoT device. They had no experience dealing with Chinese manufacturers and were worried about IP protection.',
    solution:
      'We identified 4 qualified PCB houses and 3 enclosure molders, coordinated prototype rounds, and managed NDA execution. We also handled BOM optimization and component substitutions to lower cost without compromising spec.',
    results: [
      { label: 'BOM cost reduction', value: '-18%', icon: TrendingDown },
      { label: 'Prototype lead time', value: '3 weeks', icon: Clock },
      { label: 'Suppliers qualified', value: '4', icon: ShieldCheck },
    ],
    tags: ['Electronics', 'Cost Reduction', 'NPI'],
  },
  {
    client: 'Australian Furniture Retailer',
    industry: 'Furniture',
    challenge:
      'The retailer had a peak-season container order that was running 3 weeks behind schedule. Missing the holiday window would mean significant lost revenue.',
    solution:
      'We deployed a project manager to the factory floor in Dongguan, identified a bottleneck in the upholstery workshop, and negotiated overtime shifts. We also pre-booked vessel space to avoid port delays.',
    results: [
      { label: 'Delivery vs original schedule', value: '+2 weeks early', icon: TrendingUp },
      { label: 'Revenue protected', value: '$1.2M season', icon: ShieldCheck },
      { label: 'Repeat orders secured', value: '3 seasons', icon: TrendingUp },
    ],
    tags: ['Furniture', 'On-Time Delivery', 'Crisis Management'],
  },
  {
    client: 'Canadian Fitness Brand',
    industry: 'Sports & Fitness',
    challenge:
      'A D2C fitness brand wanted to launch a new line of resistance bands and yoga mats. They needed custom colors, branded packaging, and compliance with California Prop 65.',
    solution:
      'We sourced a factory with existing Prop 65 compliant materials, managed color matching and custom packaging design, and arranged third-party lab testing for each SKU before shipment.',
    results: [
      { label: 'SKUs launched', value: '12', icon: TrendingUp },
      { label: 'Compliance pass rate', value: '100%', icon: ShieldCheck },
      { label: 'Time to market', value: '10 weeks', icon: Clock },
    ],
    tags: ['Fitness', 'Compliance', 'Custom Development'],
  },
  {
    client: 'UK Packaging Distributor',
    industry: 'Packaging & Printing',
    challenge:
      'The distributor needed a reliable supplier for custom rigid boxes at medium volumes (2,000-5,000 units) with consistent color accuracy across reorders.',
    solution:
      'We matched them with a mid-size factory specializing in short-run rigid boxes. We implemented a color reference system and pre-shipment checks for every batch.',
    results: [
      { label: 'Color consistency', value: 'ΔE <2', icon: ShieldCheck },
      { label: 'Reorder lead time', value: '3 weeks', icon: Clock },
      { label: 'Customer retention', value: '+40%', icon: TrendingUp },
    ],
    tags: ['Packaging', 'Color Management', 'Medium Volume'],
  },
  {
    client: 'German Automotive Parts Wholesaler',
    industry: 'Automotive',
    challenge:
      'The wholesaler needed aftermarket brake pad and rotor suppliers with E-Mark certification. Previous suppliers had inconsistent quality and poor communication.',
    solution:
      'We audited 6 potential suppliers, shortlisted 2 with E-Mark and IATF 16949 certifications, and set up a quarterly performance review process with clear KPIs.',
    results: [
      { label: 'Defective parts per million', value: '<500', icon: TrendingDown },
      { label: 'Communication response time', value: '<4 hours', icon: Clock },
      { label: 'Annual cost savings', value: '€180K', icon: TrendingDown },
    ],
    tags: ['Automotive', 'Certification', 'Supplier Management'],
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Case Studies</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Real-world results from clients across industries. See how we solve sourcing challenges and deliver measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container space-y-16 md:space-y-20">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal/10 text-teal-dark">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">{c.client}</h2>
                <p className="text-sm text-text-muted mb-5">{c.industry}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-1.5">The Challenge</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-1.5">Our Solution</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-surface rounded-xl p-6 md:p-8 border border-border">
                  <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Key Results</h3>
                  <div className="space-y-5">
                    {c.results.map((r) => (
                      <div key={r.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                            <r.icon className="w-5 h-5 text-teal" />
                          </div>
                          <span className="text-sm text-text-muted">{r.label}</span>
                        </div>
                        <span className="text-lg font-bold text-navy">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every case study started with a single conversation. Tell us about your product and your challenges, and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-bold text-teal hover:bg-white/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
