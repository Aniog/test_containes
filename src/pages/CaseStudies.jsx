import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const caseStudies = [
  {
    industry: 'Consumer Electronics',
    title: 'Electronics Manufacturer Sourcing for US Startup',
    challenge: 'A US-based startup needed a reliable manufacturer for custom PCB assemblies with strict quality requirements. They had previously worked with a supplier that delivered inconsistent quality and missed deadlines.',
    approach: [
      'Identified 8 potential suppliers through our network and market research',
      'Conducted on-site audits of 5 shortlisted factories',
      'Evaluated production capacity, quality systems, and past client references',
      'Negotiated pricing and terms with the top 2 candidates',
      'Arranged sample production and testing',
    ],
    result: 'Client reduced unit cost by 22% compared to their previous supplier and achieved consistent quality across 50,000+ units. On-time delivery rate improved to 97%.',
    testimonial: 'SSourcing China found us a supplier that exceeded our expectations. The quality has been consistent and the communication is excellent.',
    testimonialAuthor: 'Product Manager, US Electronics Startup',
  },
  {
    industry: 'Apparel & Textiles',
    title: 'Textile Supply Chain Optimization for European Fashion Brand',
    challenge: 'A European fashion brand faced recurring quality issues and delayed shipments from their existing supplier in Guangdong. Defect rates were around 8% and on-time delivery was below 70%.',
    approach: [
      'Sourced 6 alternative factories in Zhejiang and Jiangsu provinces',
      'Conducted factory audits focusing on quality control processes',
      'Implemented pre-shipment inspection protocols',
      'Set up production monitoring with weekly progress reports',
      'Negotiated improved payment terms and quality guarantees',
    ],
    result: 'Defect rate dropped from 8% to under 1%. On-time delivery improved to 96%. The client was able to scale production by 40% without quality issues.',
    testimonial: 'The difference in quality and reliability has been remarkable. We now have full visibility into our production process.',
    testimonialAuthor: 'Supply Chain Director, European Fashion Brand',
  },
  {
    industry: 'Manufacturing',
    title: 'Industrial Equipment Procurement for Australian Company',
    challenge: 'An Australian manufacturing company needed custom CNC machines with specific technical specifications. They were concerned about quality, after-sales support, and shipping logistics for heavy equipment.',
    approach: [
      'Verified factory capabilities and engineering team qualifications',
      'Supervised production with regular progress reports and photos',
      'Conducted factory acceptance testing before shipment',
      'Arranged specialized freight forwarding for heavy machinery',
      'Coordinated installation support and warranty documentation',
    ],
    result: 'Equipment delivered on spec, 15% below initial budget, with full documentation and warranty. The machines have been operating reliably for over 2 years.',
    testimonial: 'The level of oversight and support throughout the process gave us complete confidence. The machines arrived exactly as specified.',
    testimonialAuthor: 'Operations Manager, Australian Manufacturing Company',
  },
  {
    industry: 'Home & Garden',
    title: 'Furniture Sourcing for UK Retail Chain',
    challenge: 'A UK retail chain wanted to diversify their furniture supply chain beyond their existing European suppliers. They needed competitive pricing without compromising on quality and design standards.',
    approach: [
      'Identified furniture manufacturers in Foshan and Dongguan',
      'Evaluated design capabilities and material sourcing',
      'Conducted factory audits and sample reviews',
      'Set up quality inspection protocols for each order',
      'Coordinated container loading and sea freight',
    ],
    result: 'Client achieved 30% cost savings while maintaining quality standards. Successfully launched a new furniture line with 12 SKUs.',
    testimonial: 'We were able to launch a completely new product line at a much better margin. The quality inspections gave us peace of mind.',
    testimonialAuthor: 'Buyer, UK Retail Chain',
  },
  {
    industry: 'Automotive',
    title: 'Auto Parts Sourcing for US Distributor',
    challenge: 'A US automotive parts distributor needed a reliable source for aftermarket brake components. Quality and safety certifications were critical requirements.',
    approach: [
      'Verified IATF 16949 and ISO 9001 certifications',
      'Conducted factory audit with focus on testing capabilities',
      'Arranged third-party lab testing for sample products',
      'Set up ongoing quality inspection for each shipment',
      'Coordinated logistics for regular monthly shipments',
    ],
    result: 'All products passed US safety standards. Client established a long-term supply relationship with consistent quality across 200+ SKUs.',
    testimonial: 'Safety is non-negotiable in our business. SSourcing China ensured every requirement was met before we committed to production.',
    testimonalAuthor: 'Procurement Manager, US Auto Parts Distributor',
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
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Real results from real clients. See how we have helped businesses source from China successfully.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border-b border-slate-200 pb-12 last:border-0 last:pb-0">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{cs.industry}</span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-4">{cs.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Our Approach</h3>
                    <ul className="space-y-1.5">
                      {cs.approach.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-slate-900 mb-1">Result</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{cs.result}</p>
                </div>

                {cs.testimonial && (
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-slate-600 italic">"{cs.testimonial}"</p>
                    <p className="text-xs text-slate-500 mt-2">{cs.testimonialAuthor}</p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Want Similar Results?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tell us about your sourcing needs and we will show you how we can help.
              </p>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
