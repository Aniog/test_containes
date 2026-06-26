import SectionHeader from '@/components/SectionHeader'
import { TrendingUp, ArrowRight, Building2, Clock, DollarSign, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const cases = [
  {
    client: 'Nordic Home Co.',
    location: 'Sweden',
    industry: 'Home & Furniture',
    challenge: 'Nordic Home Co. struggled with inconsistent furniture quality and late deliveries from their previous China suppliers. Defect rates were as high as 12%.',
    solution: 'We conducted on-site audits of 8 factories, shortlisted 3 qualified candidates, and implemented a 3-stage QC protocol with weekly progress reports.',
    results: [
      { icon: DollarSign, label: 'Cost Reduction', value: '23%' },
      { icon: Shield, label: 'Defect Rate', value: '<2%' },
      { icon: Clock, label: 'On-Time Delivery', value: '96%' },
      { icon: Building2, label: 'Factories Audited', value: '8' },
    ],
    quote: 'SSourcing China transformed our supply chain. We finally have predictability and quality we can trust.',
    quoteAuthor: 'Erik Johansson',
    quoteRole: 'Procurement Director, Nordic Home Co.',
  },
  {
    client: 'TechGear Solutions',
    location: 'USA',
    industry: 'Electronics',
    challenge: 'TechGear needed a new PCB manufacturer after their previous partner shut down. Time-to-market was critical for a new product launch.',
    solution: 'Within 10 days we identified 3 ISO-certified PCB manufacturers, coordinated sample production, and completed factory verification for all three.',
    results: [
      { icon: Clock, label: 'Supplier Shortlist', value: '10 Days' },
      { icon: Shield, label: 'Sample Pass Rate', value: '100%' },
      { icon: DollarSign, label: 'Cost vs. Target', value: '-8%' },
      { icon: Building2, label: 'Factories Verified', value: '3' },
    ],
    quote: 'The speed and thoroughness was impressive. We launched on time with zero quality issues in the first 10,000 units.',
    quoteAuthor: 'David Chen',
    quoteRole: 'COO, TechGear Solutions',
  },
  {
    client: 'GreenWear Ltd.',
    location: 'UK',
    industry: 'Apparel',
    challenge: 'GreenWear needed GOTS-certified organic cotton suppliers for a new sustainable clothing line. Previous attempts resulted in fake certifications.',
    solution: 'We traced certification documents back to issuing bodies, visited dye houses and knitting mills, and established a fully documented supply chain.',
    results: [
      { icon: Shield, label: 'Certification Valid', value: '100%' },
      { icon: DollarSign, label: 'Cost vs. Budget', value: 'On Target' },
      { icon: Clock, label: 'Time to Production', value: '6 Weeks' },
      { icon: Building2, label: 'Supply Chain Nodes', value: '5' },
    ],
    quote: 'For the first time, we have full confidence in our sustainability claims. The audit trail is bulletproof.',
    quoteAuthor: 'Sarah Mitchell',
    quoteRole: 'Founder, GreenWear Ltd.',
  },
  {
    client: 'AutoParts Direct',
    location: 'Australia',
    industry: 'Automotive Parts',
    challenge: 'AutoParts Direct needed IATF 16949-certified manufacturers for precision brake components. Their previous supplier had quality drift over time.',
    solution: 'We sourced 4 candidate factories, conducted PPAP-level audits, and implemented ongoing production monitoring with SPC data review.',
    results: [
      { icon: Shield, label: 'PPAP Approval', value: 'Level 3' },
      { icon: DollarSign, label: 'Annual Savings', value: 'AUD 120K' },
      { icon: Clock, label: 'First Article', value: '4 Weeks' },
      { icon: Building2, label: 'Factories Audited', value: '4' },
    ],
    quote: 'The SPC monitoring catches drift before it becomes a problem. Our warranty claims dropped by 60%.',
    quoteAuthor: 'James O\'Connor',
    quoteRole: 'Quality Manager, AutoParts Direct',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Results"
            title="Client Case Studies"
            subtitle="Real projects. Real outcomes. See how we solve sourcing challenges for businesses around the world."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => (
            <div key={idx} className="p-6 lg:p-10 rounded-2xl border border-border bg-bg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{c.industry}</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">{c.client}</h3>
              <p className="text-sm text-text-muted mb-6">{c.location}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">The Challenge</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Our Solution</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {c.results.map((r, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-border text-center">
                    <r.icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                    <p className="text-lg font-bold text-text-primary">{r.value}</p>
                    <p className="text-xs text-text-muted">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-text-secondary italic leading-relaxed mb-3">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-text-primary">{c.quoteAuthor}</p>
                <p className="text-xs text-text-muted">{c.quoteRole}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want results like these?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Every project starts with a conversation. Tell us about your sourcing goals and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
