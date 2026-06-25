import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import { ArrowRight, TrendingDown, TrendingUp, Shield, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-brand',
    title: 'European Electronics Brand',
    subtitle: 'Consumer Electronics Sourcing',
    challenge: 'A German consumer electronics brand was struggling with inconsistent quality and late deliveries from 3 different suppliers. They needed to consolidate their supply chain.',
    solution: 'We audited 12 factories across Shenzhen and Dongguan, identified one strategic partner with ISO 9001 certification, and negotiated a 2-year supply agreement with integrated QC protocols.',
    results: [
      { icon: TrendingDown, label: '35% cost reduction', desc: 'Through consolidation and volume pricing' },
      { icon: TrendingUp, label: '99.4% defect-free rate', desc: 'Up from 91% with previous suppliers' },
      { icon: Clock, label: '100% on-time delivery', desc: 'Over 24 consecutive months' },
    ],
    imgId: 'cs-electronics-brand-a1',
    titleId: 'cs-title-electronics',
    descId: 'cs-desc-electronics',
  },
  {
    id: 'furniture-retailer',
    title: 'US Furniture Retailer',
    subtitle: 'Home Furniture Sourcing',
    challenge: 'A mid-sized US furniture retailer wanted to launch a line of solid wood furniture but had no experience sourcing from China. They needed help with supplier selection, quality standards, and logistics.',
    solution: 'We identified 3 factories in Foshan specializing in solid wood furniture, conducted full audits, managed sample development, and implemented a rigorous QC process including in-line and pre-shipment inspections.',
    results: [
      { icon: TrendingDown, label: '40% below domestic cost', desc: 'Compared to US manufacturing quotes' },
      { icon: TrendingUp, label: '12 container loads', desc: 'Successfully delivered in first year' },
      { icon: Shield, label: 'Zero returns', desc: 'Due to quality defects in first year' },
    ],
    imgId: 'cs-furniture-retailer-b2',
    titleId: 'cs-title-furniture',
    descId: 'cs-desc-furniture',
  },
  {
    id: 'packaging-brand',
    title: 'Australian F&B Brand',
    subtitle: 'Custom Packaging Sourcing',
    challenge: 'An Australian food and beverage brand needed custom packaging across multiple materials (cardboard, glass, flexible packaging) from 3 different factories, with strict food-safety compliance requirements.',
    solution: 'We sourced and audited 3 specialized factories, coordinated cross-factory production timelines, ensured all materials met FDA and EU food contact standards, and managed consolidated shipping.',
    results: [
      { icon: Clock, label: '100% on-time delivery', desc: 'Across 8 production runs' },
      { icon: TrendingDown, label: '25% cost savings', desc: 'Vs. local Australian suppliers' },
      { icon: Shield, label: 'Full compliance', desc: 'FDA and EU food safety standards met' },
    ],
    imgId: 'cs-packaging-brand-c3',
    titleId: 'cs-title-packaging',
    descId: 'cs-desc-packaging',
  },
  {
    id: 'industrial-uk',
    title: 'UK Industrial Equipment Company',
    subtitle: 'Machinery Parts Sourcing',
    challenge: 'A British industrial equipment manufacturer needed precision-machined steel components with tight tolerances. Previous attempts to source from China had resulted in quality failures.',
    solution: 'We identified 5 CNC machining factories in Jiangsu province, conducted technical capability audits including sample test runs, and established a quality protocol with CMM inspection reports for every batch.',
    results: [
      { icon: TrendingDown, label: '55% cost reduction', desc: 'Vs. European suppliers' },
      { icon: TrendingUp, label: '99.8% pass rate', desc: 'On dimensional tolerances' },
      { icon: Clock, label: 'Lead time cut 50%', desc: 'From 16 weeks to 8 weeks' },
    ],
    imgId: 'cs-industrial-uk-d4',
    titleId: 'cs-title-industrial',
    descId: 'cs-desc-industrial',
  },
  {
    id: 'apparel-startup',
    title: 'Canadian Apparel Startup',
    subtitle: 'Activewear Sourcing',
    challenge: 'A Vancouver-based activewear startup needed small-batch production with high-quality fabric and printing. Most factories they contacted had MOQs that were too high for a startup.',
    solution: 'We negotiated flexible MOQ terms with a Fujian-based factory, sourced premium performance fabrics from approved mills, and managed the entire production from sample to shipment.',
    results: [
      { icon: TrendingUp, label: 'Scaled to 5,000 units/month', desc: 'From 500 units initial order' },
      { icon: Shield, label: '98.5% quality rate', desc: 'Across all production runs' },
      { icon: TrendingDown, label: '60% margin improvement', desc: 'Vs. local Canadian production' },
    ],
    imgId: 'cs-apparel-startup-e5',
    titleId: 'cs-title-apparel',
    descId: 'cs-desc-apparel',
  },
  {
    id: 'hardware-distributor',
    title: 'Middle East Hardware Distributor',
    subtitle: 'Building Materials Sourcing',
    challenge: 'A Dubai-based hardware distributor wanted to expand their product range with Chinese-sourced building materials but faced quality inconsistency and communication issues with suppliers.',
    solution: 'We audited 8 factories in Hebei and Shandong, established clear quality specifications with AQL standards, and set up a bilingual communication protocol with weekly progress reports.',
    results: [
      { icon: TrendingUp, label: '15 new product lines', desc: 'Successfully launched in 18 months' },
      { icon: TrendingDown, label: '30% cost advantage', desc: 'Vs. previous suppliers' },
      { icon: Shield, label: '97% quality acceptance', desc: 'On all incoming shipments' },
    ],
    imgId: 'cs-hardware-distributor-f6',
    titleId: 'cs-title-hardware',
    descId: 'cs-desc-hardware',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Real results from real clients. See how we've helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => {
              const csImg = getPickedImageUrl(cs.imgId)
              return (
              <div key={cs.id} className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden sticky top-24">
                    {csImg && (
                      <img
                        alt={cs.title}
                        src={csImg}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <span className="text-primary font-semibold text-sm">{cs.subtitle}</span>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-text-primary mt-2 mb-6">{cs.title}</h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">The Challenge</h3>
                    <p id={cs.descId} className="text-text-secondary leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">Our Solution</h3>
                    <p className="text-text-secondary leading-relaxed">{cs.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-4">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {cs.results.map((r, ri) => (
                        <div key={ri} className="bg-background rounded-lg p-4 border border-border">
                          <r.icon className="w-5 h-5 text-primary mb-2" />
                          <div className="font-bold text-primary text-lg">{r.label}</div>
                          <p className="text-text-secondary text-xs mt-1">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Tell us about your sourcing needs and we'll create a plan tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}