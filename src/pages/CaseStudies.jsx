import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, TrendingDown, TrendingUp, CheckCircle, Quote, FileText } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-startup',
    title: 'Electronics Startup Cuts Sourcing Costs by 35%',
    category: 'Consumer Electronics',
    client: 'A US-based DTC brand launching wireless audio products',
    challenge: 'The client had been sourcing from Alibaba with inconsistent quality and was overpaying by at least 30%. They needed a reliable factory that could match their premium brand positioning.',
    solution: 'We audited 8 Bluetooth audio factories across Shenzhen and Dongguan, shortlisted 3, and negotiated competitive pricing with a factory that had previously produced for major European brands.',
    results: [
      '35% reduction in unit cost vs. previous supplier',
      'Defect rate dropped from 8% to under 1%',
      'On-time delivery rate reached 98%',
      'Production capacity scaled from 5K to 30K units/month',
    ],
    testimonial: 'SSourcing China completely transformed our supply chain. The factory they found has better quality at a significantly lower price.',
    clientName: 'James K., Founder',
    imgId: 'cs-electronics-a1b2c3',
  },
  {
    id: 'furniture-brand',
    title: 'European Furniture Brand Scales to 3 Asian Factories',
    category: 'Furniture & Home',
    client: 'A Scandinavian furniture brand expanding product lines',
    challenge: 'The brand had outgrown their single supplier and needed multiple factories to handle wood, metal, and upholstery product lines — each requiring different expertise.',
    solution: 'We sourced and audited specialized factories: a solid-wood workshop in Foshan, a metal fabrication plant in Dongguan, and an upholstery factory in Hangzhou. Coordinated cross-factory production schedules.',
    results: [
      'Successfully launched 3 new product lines simultaneously',
      'Overall manufacturing cost reduced by 22%',
      'Lead times shortened from 16 to 10 weeks',
      'All 3 factories achieved ISO 9001 certification',
    ],
    testimonial: 'Managing three factories could have been a nightmare, but SSourcing China made it seamless. Each factory excels in its specialty.',
    clientName: 'Erik L., Sourcing Director',
    imgId: 'cs-furniture-d4e5f6',
  },
  {
    id: 'apparel-importer',
    title: 'Apparel Importer Achieves 99.2% QC Pass Rate',
    category: 'Apparel & Textiles',
    client: 'An Australian fashion distributor importing seasonal collections',
    challenge: 'Previous shipments had defect rates of 12–15%, leading to chargebacks from retailers, damaged brand reputation, and high return processing costs.',
    solution: 'We implemented a comprehensive three-stage QC protocol: raw fabric inspection, inline production checks at 30% and 60%, and AQL 2.5 pre-shipment inspection with detailed reporting.',
    results: [
      'QC pass rate improved from 85% to 99.2%',
      'Retailer chargebacks eliminated within two seasons',
      'Return rate dropped below 1%',
      'Established long-term 3-factory rotation for seasonal flexibility',
    ],
    testimonial: 'The QC reports are exceptional — every inspection includes dozens of timestamped photos. Our retailers have noticed the quality improvement.',
    clientName: 'Sarah M., Operations Manager',
    imgId: 'cs-apparel-g7h8i9',
  },
  {
    id: 'hardware-distributor',
    title: 'Hardware Distributor Saves $120K Annually on Logistics',
    category: 'Hardware & Industrial',
    client: 'A UK-based hardware and tools distributor',
    challenge: 'The client was paying excessive freight costs through their existing forwarder and had no visibility into shipping consolidation opportunities across their 5 Chinese suppliers.',
    solution: 'We consolidated shipments from 5 suppliers into consolidated containers, renegotiated freight rates with 3 competing forwarders, and optimized container utilization through load planning.',
    results: [
      '$120,000 annual freight cost reduction',
      'Container utilization improved from 72% to 94%',
      'Shipping frequency optimized from weekly to bi-weekly with zero stockouts',
      'Customs clearance time reduced by 3 days',
    ],
    testimonial: 'The logistics savings alone more than cover their service fees. It was a no-brainer to continue working with them.',
    clientName: 'David R., CFO',
    imgId: 'cs-hardware-j1k2l3',
  },
  {
    id: 'beauty-brand',
    title: 'Beauty Brand Launches Private Label Line in 10 Weeks',
    category: 'Beauty & Personal Care',
    client: 'A European beauty influencer launching her own skincare line',
    challenge: 'First-time product entrepreneur with no manufacturing experience. Needed a turnkey solution: formulation, packaging design, production, and regulatory compliance for EU market.',
    solution: 'We connected her with a GMP-certified cosmetics factory in Guangzhou, coordinated packaging design with a Shanghai studio, managed sample iterations, and arranged EU cosmetic product notification.',
    results: [
      'Full product line (5 SKUs) launched in 10 weeks from first contact',
      'GMP & ISO 22716 certified production',
      'All products passed EU cosmetic safety assessment',
      'First production run of 10,000 units sold out in 6 weeks',
    ],
    testimonial: 'I had zero manufacturing knowledge when I started. SSourcing China guided me through every step — from formula to finished product on my warehouse shelf.',
    clientName: 'Elena V., Founder & CEO',
    imgId: 'cs-beauty-m4n5o6',
  },
  {
    id: 'pet-products',
    title: 'Pet Products Company Reduces Lead Time by 40%',
    category: 'Pet Products',
    client: 'A fast-growing US pet accessories brand',
    challenge: 'With rapid growth came supply constraints. Their existing supplier couldn\'t scale fast enough, causing 6-week stockouts during peak seasons. They needed additional production capacity urgently.',
    solution: 'We qualified 2 additional factories within 2 weeks, split production across 3 suppliers using a coordinated quality framework, and implemented weekly WIP tracking across all production sites.',
    results: [
      'Lead time reduced from 12 weeks to 7 weeks',
      'Production capacity tripled with 3-factory network',
      'Peak season stockouts eliminated',
      'Backup supplier redundancy established',
    ],
    testimonial: 'When we urgently needed to scale, SSourcing China delivered. Two new factories onboarded in two weeks — incredible speed.',
    clientName: 'Mark T., Supply Chain Director',
    imgId: 'cs-pet-p7q8r9',
  },
]

export default function CaseStudies() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Real Results for Real Clients
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              See how we've helped businesses across industries source smarter, reduce costs, and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study List */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                      <FileText size={56} className="text-brand-300" />
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-6 md:p-8">
                    <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide">{cs.category}</span>
                    <h2 id={`cs-title-${cs.id}`} className="text-xl md:text-2xl font-bold text-text mt-1 mb-3">{cs.title}</h2>
                    <p id={`cs-client-${cs.id}`} className="text-text-secondary text-sm mb-4">
                      <strong>Client:</strong> {cs.client}
                    </p>

                    {expanded === cs.id ? (
                      <div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-text mb-1">Challenge</h4>
                          <p className="text-text-secondary text-sm">{cs.challenge}</p>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-text mb-1">Our Solution</h4>
                          <p className="text-text-secondary text-sm">{cs.solution}</p>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-text mb-2">Results</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cs.results.map((r) => (
                              <div key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                                <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                                {r}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-surface-alt rounded-lg p-4 flex items-start gap-3">
                          <Quote size={20} className="text-brand-300 shrink-0" />
                          <div>
                            <p className="text-text-secondary text-sm italic">&ldquo;{cs.testimonial}&rdquo;</p>
                            <p className="text-text-muted text-xs mt-1">&mdash; {cs.clientName}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpanded(null)}
                          className="mt-4 text-sm text-brand-800 font-semibold hover:text-accent-500 transition-colors"
                        >
                          Show Less
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                          {cs.results.slice(0, 2).map((r) => (
                            <div key={r} className="flex items-center gap-1.5 text-sm text-green-700 bg-green-50 rounded-full px-3 py-1">
                              <TrendingDown size={14} />
                              {r}
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setExpanded(cs.id)}
                          className="inline-flex items-center gap-1.5 text-sm text-brand-800 font-semibold hover:text-accent-500 transition-colors"
                        >
                          Read Full Case Study
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Every great partnership starts with a conversation. Tell us about your sourcing challenges and goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}