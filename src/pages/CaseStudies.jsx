import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'us-furniture-retailer',
    country: '🇺🇸 United States',
    category: 'Furniture',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A mid-size US furniture retailer had been working with the same Chinese supplier for 4 years and suspected they were overpaying. They also had recurring quality complaints from customers.',
    solution: 'We audited their existing supplier and identified 3 alternative factories in Foshan. After comparative sampling and price negotiation, the client switched to a new supplier with better quality control and a 22% lower unit cost.',
    result: 'Annual savings of approximately $180,000. Zero quality complaints in the first two seasonal orders.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '22%' },
      { icon: ShieldCheck, label: 'Quality Complaints', value: '0' },
      { icon: Clock, label: 'Project Duration', value: '6 weeks' },
    ],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-a1b2c3',
  },
  {
    id: 'uk-electronics-brand',
    country: '🇬🇧 United Kingdom',
    category: 'Electronics',
    title: 'UK Brand Launches Private Label Electronics Line',
    challenge: 'A UK consumer electronics brand wanted to launch a private label range of smart home accessories but had no experience sourcing from China and no contacts in the industry.',
    solution: 'We identified a certified electronics manufacturer in Shenzhen, managed OEM development from prototype to production, coordinated CE and RoHS certification, and arranged sea freight to the UK.',
    result: 'First batch of 5,000 units delivered in 14 weeks. Product launched on schedule with full CE certification.',
    metrics: [
      { icon: Clock, label: 'Time to Market', value: '14 weeks' },
      { icon: Package, label: 'Units Delivered', value: '5,000' },
      { icon: ShieldCheck, label: 'Certifications', value: 'CE, RoHS' },
    ],
    titleId: 'cs-uk-electronics-title',
    descId: 'cs-uk-electronics-desc',
    imgId: 'cs-uk-electronics-img-d4e5f6',
  },
  {
    id: 'au-fashion-brand',
    country: '🇦🇺 Australia',
    category: 'Apparel',
    title: 'Australian Fashion Brand Recovers After Factory Failure',
    challenge: 'An Australian fashion brand had a failed relationship with a garment factory that delivered late and with poor quality. They needed a reliable replacement before their next season.',
    solution: 'We audited 6 garment factories in Guangzhou and shortlisted 2 that met the brand\'s quality and ethical standards. Pre-shipment inspections were conducted for each of the next 3 seasonal orders.',
    result: 'On-time delivery for 3 consecutive seasons. Defect rate reduced from 8% to under 1%.',
    metrics: [
      { icon: ShieldCheck, label: 'Defect Rate', value: '<1%' },
      { icon: Clock, label: 'On-Time Deliveries', value: '3/3' },
      { icon: Package, label: 'Factories Audited', value: '6' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-hardware-importer',
    country: '🇩🇪 Germany',
    category: 'Hardware',
    title: 'German Importer Verifies New Supplier Before Large Order',
    challenge: 'A German hardware importer found a new supplier on Alibaba offering significantly lower prices. Before placing a €120,000 order, they wanted independent verification of the factory.',
    solution: 'We conducted a full factory audit including business license verification, production capacity assessment, and equipment inspection. We identified two compliance gaps and negotiated corrective actions before the order was placed.',
    result: 'Client placed the order with confidence. Goods passed pre-shipment inspection and arrived on schedule.',
    metrics: [
      { icon: ShieldCheck, label: 'Order Value Protected', value: '€120K' },
      { icon: Clock, label: 'Audit Turnaround', value: '5 days' },
      { icon: Package, label: 'Issues Identified', value: '2 resolved' },
    ],
    titleId: 'cs-de-hardware-title',
    descId: 'cs-de-hardware-desc',
    imgId: 'cs-de-hardware-img-j1k2l3',
  },
  {
    id: 'ca-health-brand',
    country: '🇨🇦 Canada',
    category: 'Health & Beauty',
    title: 'Canadian Health Brand Sources GMP-Certified Manufacturer',
    challenge: 'A Canadian health and wellness brand needed a GMP-certified manufacturer for a new line of personal care devices. Previous attempts to find a suitable factory had failed due to language barriers and lack of local knowledge.',
    solution: 'We identified 4 GMP-certified factories, arranged factory visits, and managed the sample development process. We also coordinated Health Canada compliance documentation.',
    result: 'Suitable factory identified and first production run completed within 10 weeks of project start.',
    metrics: [
      { icon: Clock, label: 'Time to First Production', value: '10 weeks' },
      { icon: ShieldCheck, label: 'Certification', value: 'GMP' },
      { icon: Package, label: 'Factories Evaluated', value: '4' },
    ],
    titleId: 'cs-ca-health-title',
    descId: 'cs-ca-health-desc',
    imgId: 'cs-ca-health-img-m4n5o6',
  },
  {
    id: 'fr-toy-importer',
    country: '🇫🇷 France',
    category: 'Toys',
    title: 'French Toy Importer Achieves EN71 Compliance',
    challenge: 'A French toy importer was struggling to find a factory that could consistently meet EN71 safety standards. Previous shipments had failed customs inspection twice.',
    solution: 'We audited toy factories with documented EN71 experience, managed pre-production testing, and conducted pre-shipment inspections with a focus on safety compliance.',
    result: 'First compliant shipment cleared French customs without issues. No further compliance failures.',
    metrics: [
      { icon: ShieldCheck, label: 'Compliance Standard', value: 'EN71' },
      { icon: Clock, label: 'Customs Failures', value: '0 since' },
      { icon: Package, label: 'Factories Audited', value: '5' },
    ],
    titleId: 'cs-fr-toys-title',
    descId: 'cs-fr-toys-desc',
    imgId: 'cs-fr-toys-img-p7q8r9',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of sourcing projects we have completed for clients across different industries and countries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">{cs.category}</span>
                      <span className="text-xs text-gray-400">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-gray-900 mb-4">{cs.title}</h2>

                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-1">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-1">Our Approach</h4>
                        <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-1">Result</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {cs.metrics.map((m) => {
                        const Icon = m.icon
                        return (
                          <div key={m.label} className="bg-gray-50 rounded-xl p-4 text-center">
                            <Icon className="w-5 h-5 text-navy-800 mx-auto mb-1" />
                            <div className="text-lg font-bold text-gray-900">{m.value}</div>
                            <div className="text-xs text-gray-500">{m.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={cs.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing challenge and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-accent">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
