import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, DollarSign, Clock, MapPin, Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'us-electronics',
    imgId: 'case-us-electronics-m4n8p2',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
    query: '[case-us-electronics-desc] [case-us-electronics-title]',
    industry: 'Consumer Electronics',
    location: 'United States',
    title: 'Reduced Defect Rate by 95% for a US Electronics Brand',
    challenge: 'A US-based electronics importer was receiving shipments with 15-20% defect rates from their existing Chinese supplier. Communication issues made it difficult to resolve quality problems, and they were losing customers and revenue.',
    solution: 'We audited the existing factory and identified root causes including poor raw material sourcing and inadequate QC processes. We then sourced a replacement supplier with ISO 9001 certification, established a multi-stage QC protocol, and implemented pre-shipment inspections.',
    results: [
      'Defect rate dropped from 18% to less than 2%',
      'Annual savings of $45,000 in returns and replacements',
      'Customer complaints reduced by 90%',
      'Consistent on-time delivery rate of 98%',
    ],
    quote: 'SSourcing China completely transformed our supply chain. The quality improvement alone paid for their service many times over.',
    quoteAuthor: 'David Chen, VP of Operations',
    statResult: '2% defect rate',
    statSavings: '$45K/year saved',
    statTimeframe: '8 weeks',
  },
  {
    id: 'australia-furniture',
    imgId: 'case-australia-furniture-k2l7q5',
    titleId: 'case-australia-furniture-title',
    descId: 'case-australia-furniture-desc',
    query: '[case-australia-furniture-desc] [case-australia-furniture-title]',
    industry: 'Home & Furniture',
    location: 'Australia',
    title: 'Cut Sourcing Costs 30% for an Australian Retailer',
    challenge: 'An Australian home goods retailer was sourcing through multiple intermediaries, driving up costs significantly. They wanted to go direct to factories but lacked the local knowledge and relationships to do so safely.',
    solution: 'We identified and verified three alternative furniture factories in Foshan and conducted comparative pricing analysis. Our team negotiated directly with factory management, eliminating middleman markups. We also optimized shipping routes to reduce logistics costs.',
    results: [
      '30% reduction in product costs',
      'Annual savings of $120,000',
      'Product range expanded by 40%',
      'Lead time reduced by 2 weeks',
    ],
    quote: 'Going direct through SSourcing saved us over $100K in the first year. The supplier quality is actually better than what we had before.',
    quoteAuthor: 'Sarah Mitchell, Procurement Director',
    statResult: '30% cost cut',
    statSavings: '$120K/year saved',
    statTimeframe: '12 weeks',
  },
  {
    id: 'europe-apparel',
    imgId: 'case-europe-apparel-j9r3s1',
    titleId: 'case-europe-apparel-title',
    descId: 'case-europe-apparel-desc',
    query: '[case-europe-apparel-desc] [case-europe-apparel-title]',
    industry: 'Apparel & Fashion',
    location: 'Germany',
    title: 'Launched Private Label Clothing Line in 10 Weeks',
    challenge: 'A European fashion startup needed to launch a private label clothing line quickly for an upcoming trade show. They had designs and specs but no manufacturing contacts in China and a very tight deadline.',
    solution: 'We shortlisted three apparel factories in Guangzhou within 48 hours, managed sampling and revision cycles, coordinated custom labeling and hang tag production, and handled all shipping logistics to get products to Berlin in time for the trade show.',
    results: [
      'Full collection delivered 3 days before deadline',
      '42 SKUs produced with consistent quality',
      'Custom labels, tags, and packaging completed',
      'Successfully launched at Berlin Fashion Trade Show',
    ],
    quote: 'We would never have made our launch date without SSourcing. They managed everything from factory selection to delivery — it felt like having a team in China.',
    quoteAuthor: 'Anna Weber, Founder & CEO',
    statResult: 'On-time launch',
    statSavings: '42 SKUs produced',
    statTimeframe: '10 weeks',
  },
  {
    id: 'uk-industrial',
    imgId: 'case-uk-industrial-h5t8w3',
    titleId: 'case-uk-industrial-title',
    descId: 'case-uk-industrial-desc',
    query: '[case-uk-industrial-desc] [case-uk-industrial-title]',
    industry: 'Industrial Manufacturing',
    location: 'United Kingdom',
    title: 'Sourced 200+ Custom CNC Parts for a UK Engineering Firm',
    challenge: 'A UK engineering firm needed precision CNC machined parts with tight tolerances. Previous attempts to source from China had resulted in inconsistent quality and missed specifications.',
    solution: 'We identified specialized CNC factories in Shenzhen with ISO certification and Swiss-made equipment. Our QC team implemented first-article inspection, in-process checks, and final dimensional verification using CMM equipment.',
    results: [
      '100% parts within specified tolerances',
      '40% cost reduction vs UK domestic sourcing',
      'Reliable lead times for ongoing orders',
      'Established a long-term supply partnership',
    ],
    quote: 'The precision and consistency of parts we get through SSourcing matches what we expected from domestic suppliers, at a fraction of the cost.',
    quoteAuthor: 'James Thompson, Chief Engineer',
    statResult: '100% tolerance pass',
    statSavings: '40% cost reduction',
    statTimeframe: '6 weeks',
  },
  {
    id: 'canada-health',
    imgId: 'case-canada-health-p3q9x6',
    titleId: 'case-canada-health-title',
    descId: 'case-canada-health-desc',
    query: '[case-canada-health-desc] [case-canada-health-title]',
    industry: 'Health & Beauty',
    location: 'Canada',
    title: 'Scaled Supplement Packaging for a Canadian Wellness Brand',
    challenge: 'A Canadian wellness brand was scaling rapidly and needed to transition from domestic to overseas packaging production. They required strict compliance with Health Canada regulations and consistent quality.',
    solution: 'We sourced FDA and GMP-certified packaging factories, managed compliance documentation, supervised initial production runs, and established ongoing quality monitoring protocols.',
    results: [
      'Packaging costs reduced by 50%',
      'Full Health Canada regulatory compliance',
      'Scalable production capacity established',
      'Consistent quality across 50+ SKUs',
    ],
    quote: 'SSourcing navigated the regulatory requirements we didn\'t even know existed. They made the transition to China sourcing completely painless.',
    quoteAuthor: 'Michael Park, VP of Supply Chain',
    statResult: '50% cost savings',
    statSavings: '50+ SKUs managed',
    statTimeframe: '14 weeks',
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
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Real Results for
              <br />
              <span className="text-accent-400">Real Businesses</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              See how we have helped companies around the world source from China
              with confidence, reduce costs, and improve product quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="card-base card-hover overflow-hidden p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      alt={study.title}
                      data-strk-img-id={study.imgId}
                      data-strk-img={study.query}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-brand-800/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {study.industry}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm text-steel-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {study.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10 lg:p-12">
                    <h2 id={study.titleId} className="text-xl md:text-2xl font-bold text-brand-800 mb-4">
                      {study.title}
                    </h2>

                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">Challenge</h3>
                      <p id={study.descId} className="text-body text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-body text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-steel-600">
                            <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center p-3 bg-steel-50 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-green-500 mx-auto mb-1" />
                        <p className="text-xs font-bold text-brand-800">{study.statResult}</p>
                      </div>
                      <div className="text-center p-3 bg-steel-50 rounded-lg">
                        <DollarSign className="w-4 h-4 text-accent-500 mx-auto mb-1" />
                        <p className="text-xs font-bold text-brand-800">{study.statSavings}</p>
                      </div>
                      <div className="text-center p-3 bg-steel-50 rounded-lg">
                        <Clock className="w-4 h-4 text-brand-500 mx-auto mb-1" />
                        <p className="text-xs font-bold text-brand-800">{study.statTimeframe}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-brand-50 rounded-lg p-5 border border-brand-100">
                      <Quote className="w-5 h-5 text-brand-300 mb-2" />
                      <p className="text-sm text-brand-700 italic mb-2">{study.quote}</p>
                      <p className="text-xs font-semibold text-brand-500">— {study.quoteAuthor}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-steel-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Want Similar Results?</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Every case study started with a simple inquiry. Tell us about your
            sourcing needs and let us show you what we can do.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-4">
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
