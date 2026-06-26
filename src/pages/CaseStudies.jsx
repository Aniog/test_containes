import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, TrendingDown, ShieldCheck } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-usa',
    title: 'Consumer Electronics for US E-commerce Brand',
    client: 'US-based Amazon Seller',
    location: 'Shenzhen, China',
    category: 'Electronics',
    challenge: 'A US-based Amazon seller needed reliable suppliers for Bluetooth speakers with consistent quality and FCC certification. Previous suppliers had delivered inconsistent quality and missed deadlines.',
    approach: 'We sourced and verified 5 factories in Shenzhen, conducted on-site audits, and arranged sample testing for FCC compliance. We implemented AQL-based pre-shipment inspections for every order.',
    results: [
      '3 verified factories added to client\'s supply chain',
      'Defect rate reduced to below 1.5%',
      'Unit cost reduced by 22% through supplier negotiation',
      'Zero customs holds due to proper FCC documentation',
    ],
    quote: 'SSourcing China transformed our supply chain. We went from constant quality issues to reliable, on-time deliveries.',
    quoteAuthor: 'Operations Manager, US E-commerce Brand',
  },
  {
    id: 'furniture-europe',
    title: 'Custom Furniture for European Retailer',
    client: 'Furniture Chain in Germany',
    location: 'Foshan, China',
    category: 'Home & Garden',
    challenge: 'A German furniture retailer required custom-designed furniture meeting EU safety standards (EN 12520/12521) with large MOQs. They had difficulty finding factories that could meet both quality and compliance requirements.',
    approach: 'We identified Foshan-based factories with EN standard experience, coordinated compliance testing through certified labs, and managed full production from prototype to container loading.',
    results: [
      'Found 2 factories meeting EN safety standards',
      'All products passed EU compliance testing on first attempt',
      'Delivered 8 x 40-foot containers on schedule',
      'Established ongoing supply relationship',
    ],
    quote: 'Their knowledge of EU compliance requirements saved us months of trial and error. Highly professional team.',
    quoteAuthor: 'Procurement Director, German Furniture Chain',
  },
  {
    id: 'apparel-australia',
    title: 'Sportswear Collection for Australian Brand',
    client: 'Activewear Brand in Sydney',
    location: 'Guangzhou & Dongguan, China',
    category: 'Apparel',
    challenge: 'An Australian activewear brand needed performance fabrics with moisture-wicking properties and ethical manufacturing. They required BSCI-audited factories with experience in technical sportswear.',
    approach: 'We sourced BSCI-audited factories in Guangzhou and Dongguan, coordinated fabric testing for performance specifications, and managed the full production cycle from sample development to shipment.',
    results: [
      'Connected with 2 BSCI-audited factories',
      'Sourced certified moisture-wicking fabrics',
      'Managed full production from sample to shipment',
      'First order delivered 2 weeks ahead of schedule',
    ],
    quote: 'Finding ethical factories for performance sportswear was our biggest challenge. SSourcing China made it straightforward.',
    quoteAuthor: 'Founder, Australian Activewear Brand',
  },
  {
    id: 'auto-parts-middleeast',
    title: 'Auto Parts for Middle East Distributor',
    client: 'Auto Parts Distributor in UAE',
    location: 'Ningbo & Wenzhou, China',
    category: 'Industrial',
    challenge: 'A UAE-based auto parts distributor needed a reliable source for CNC-machined components with consistent dimensional accuracy and ISO/TS 16949 certification.',
    approach: 'We verified factories with ISO/TS 16949 certification in Ningbo and Wenzhou, implemented dimensional inspection protocols, and coordinated sea freight to Jebel Ali port.',
    results: [
      'Identified 3 certified CNC machining factories',
      'Dimensional accuracy maintained within 0.01mm tolerance',
      'Reduced procurement cost by 18%',
      'Established quarterly inspection schedule',
    ],
    quote: 'Their technical understanding of CNC machining requirements sets them apart from other sourcing agents.',
    quoteAuthor: 'General Manager, UAE Auto Parts Distributor',
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real results from real projects. See how we help global buyers overcome sourcing challenges.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="border border-border-gray rounded-xl overflow-hidden">
                <div className="bg-section-bg px-6 md:px-8 py-5 flex flex-wrap items-center gap-3">
                  <span className="bg-sky-blue/10 text-sky-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <span className="text-muted-text text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {cs.location}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">{cs.title}</h2>
                  <p className="text-muted-text text-sm mb-6">Client: {cs.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-body-text uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-muted-text text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-body-text uppercase tracking-wider mb-2">Our Approach</h3>
                      <p className="text-muted-text text-sm leading-relaxed">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-trust-green uppercase tracking-wider mb-2">Results</h3>
                      <ul className="space-y-2">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <ShieldCheck className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-section-bg rounded-lg p-5 border-l-4 border-sky-blue">
                    <p className="text-body-text text-sm italic mb-2">"{cs.quote}"</p>
                    <p className="text-muted-text text-xs">— {cs.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your sourcing needs and see how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-blue-dark px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
