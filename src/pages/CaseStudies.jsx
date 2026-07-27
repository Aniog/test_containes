import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Award, Truck, Star, BarChart3, ShieldCheck, Factory } from 'lucide-react'

const caseStudies = [
  {
    id: '1',
    icon: TrendingDown,
    title: 'Reducing Procurement Costs by 30% for a European Electronics Brand',
    client: 'Mid-sized electronics brand based in Germany',
    challenge: 'The client was sourcing PCBA from a single supplier at above-market rates with inconsistent quality. They needed to diversify their supply chain and reduce costs without sacrificing quality.',
    approach: 'We identified 6 potential PCB assembly suppliers in Shenzhen and Dongguan, conducted on-site audits at the top 4, coordinated sample production, and negotiated pricing with the final 3 qualified factories.',
    result: 'Cost reduction of 30% compared to previous supplier. Established relationships with 2 backup suppliers. Defect rate below 1.5% consistently. Annual savings of approximately €180,000.',
    resultStats: ['30% cost reduction', '€180K annual savings', '<1.5% defect rate'],
    bgImgId: 'case-study-1-bg',
    titleId: 'case-study-1-title',
    descId: 'case-study-1-desc',
  },
  {
    id: '2',
    icon: ShieldCheck,
    title: 'From 12% Defect Rate to Under 1% for a US Kitchenware Importer',
    client: 'E-commerce kitchenware brand based in California, USA',
    challenge: 'The client was experiencing a 12% defect rate on silicone kitchenware products, leading to high return rates and negative Amazon reviews. The existing supplier was not responsive to quality complaints.',
    approach: 'We audited the current factory and found inadequate QC processes. We sourced 4 alternative silicone product manufacturers, conducted trial production runs, and implemented in-line QC inspections throughout production.',
    result: 'Defect rate dropped from 12% to under 1%. Amazon rating improved from 3.8 to 4.5 stars. Return rate reduced by 85%. Client scaled from 3 to 12 SKUs with the new supplier.',
    resultStats: ['Defect rate <1%', '4.5★ Amazon rating', '85% fewer returns'],
    bgImgId: 'case-study-2-bg',
    titleId: 'case-study-2-title',
    descId: 'case-study-2-desc',
  },
  {
    id: '3',
    icon: Truck,
    title: 'Custom Furniture Line Launch for an Australian Retailer',
    client: 'Furniture retailer based in Melbourne, Australia',
    challenge: 'The client wanted to launch a private-label solid wood furniture line but had no experience sourcing from China. They needed help with design adaptation for manufacturing, supplier selection, and quality assurance.',
    approach: 'We sourced factories in Foshan specializing in solid wood furniture, managed design adaptation with factory engineers, coordinated 3 rounds of sampling, and supervised the first production run.',
    result: 'First 3 containers delivered on time and on budget. Product line launched successfully with 18 SKUs. Established a scalable supply chain for ongoing orders. Client expanded to 6 containers per quarter.',
    resultStats: ['18 SKUs launched', 'On-time delivery', '6 containers/quarter'],
    bgImgId: 'case-study-3-bg',
    titleId: 'case-study-3-title',
    descId: 'case-study-3-desc',
  },
  {
    id: '4',
    icon: BarChart3,
    title: 'Scaling Production for a UK Sports Equipment Brand',
    client: 'Growing sports equipment brand based in Manchester, UK',
    challenge: "The client's existing supplier couldn't scale to meet growing demand, and quality was declining as volumes increased. They needed a supplier with larger capacity while maintaining quality.",
    approach: 'We searched for medium-to-large factories in Fujian and Guangdong with sports equipment expertise. We audited production capacity, worker skill levels, and export experience, then managed a transition plan.',
    result: 'Production capacity tripled from 5,000 to 15,000 units per month. Quality consistency maintained. Lead time reduced from 45 to 30 days. Client revenue grew 200% in 12 months.',
    resultStats: ['3x production capacity', '30-day lead time', '200% revenue growth'],
    bgImgId: 'case-study-4-bg',
    titleId: 'case-study-4-title',
    descId: 'case-study-4-desc',
  },
  {
    id: '5',
    icon: Award,
    title: 'Finding a Niche Manufacturer for a Canadian Medical Device Startup',
    client: 'Medical device startup based in Vancouver, Canada',
    challenge: 'The client needed a manufacturer with ISO 13485 certification for a Class I medical device. Finding a factory with both the right certification and willingness to work with a startup was challenging.',
    approach: 'We leveraged our network to identify 3 ISO 13485-certified factories in the Yangtze River Delta. We verified certifications, assessed clean room facilities, and facilitated negotiations for startup-friendly MOQs.',
    result: 'Found a factory willing to work with startup volumes. ISO 13485 certification verified. First production run completed with zero critical defects. Client received FDA clearance for their device.',
    resultStats: ['ISO 13485 verified', 'Zero critical defects', 'FDA clearance achieved'],
    bgImgId: 'case-study-5-bg',
    titleId: 'case-study-5-title',
    descId: 'case-study-5-desc',
  },
  {
    id: '6',
    icon: Factory,
    title: 'Emergency Supplier Replacement for a Dutch Industrial Parts Distributor',
    client: 'Industrial parts distributor based in Rotterdam, Netherlands',
    challenge: "The client's long-term supplier suddenly closed due to environmental compliance issues. They had orders worth €500K pending and needed an urgent replacement to avoid losing their customers.",
    approach: 'We executed an accelerated sourcing process: identified 5 alternative factories in 3 days, conducted express factory audits, coordinated rush samples, and facilitated an urgent production start.',
    result: 'New supplier identified and production started within 2 weeks. All pending orders fulfilled within 6 weeks. Zero customer orders lost. Client now maintains relationships with 2 backup suppliers.',
    resultStats: ['2-week turnaround', '€500K orders saved', 'Zero customers lost'],
    bgImgId: 'case-study-6-bg',
    titleId: 'case-study-6-title',
    descId: 'case-study-6-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Case Studies</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Real Results for Real Businesses</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              See how we've helped companies across industries reduce costs, improve quality, and build reliable supply chains in China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding">
        <div className="container-main">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-2/5 h-64 lg:h-auto relative">
                    <div
                      data-strk-bg-id={cs.bgImgId}
                      data-strk-bg={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="lg:w-3/5 p-6 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                        <cs.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-accent-blue">{cs.client}</p>
                      </div>
                    </div>

                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-navy">{cs.title}</h2>

                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-red-600 uppercase">Challenge</p>
                        <p className="mt-1 text-slate-600">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-accent-blue uppercase">Our Approach</p>
                        <p id={cs.descId} className="mt-1 text-slate-600">{cs.approach}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-600 uppercase">Result</p>
                        <p className="mt-1 text-slate-600">{cs.result}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {cs.resultStats.map((stat) => (
                        <span key={stat} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full">
                          <Star className="w-3.5 h-3.5" />
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-navy">Ready to Become Our Next Success Story?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Tell us about your sourcing challenge and let us help you find the right solution.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
