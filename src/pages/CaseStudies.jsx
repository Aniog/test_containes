import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, ShieldCheck, Clock, DollarSign } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'European Home Goods Retailer Cuts Costs by 22%',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'A German home goods retailer was sourcing through trading companies and paying inflated prices. They needed to source 15 product lines directly from factories but lacked contacts and on-ground presence in China.',
    solution: 'We identified and verified 8 factories across 3 manufacturing regions. We conducted quality inspections, negotiated pricing, and consolidated shipments from multiple suppliers into single containers to reduce shipping costs.',
    results: [
      { icon: DollarSign, label: '22% cost reduction vs. previous supplier' },
      { icon: TrendingUp, label: '15 product lines sourced and verified' },
      { icon: Clock, label: 'Completed in 8 weeks from inquiry to first shipment' },
      { icon: ShieldCheck, label: '98.5% quality pass rate on first inspection' },
    ],
    quote: 'SSourcing China transformed our supply chain. The cost savings alone paid for their service many times over, and the quality has been consistently excellent.',
    quoteAuthor: 'Thomas M., Purchasing Director',
    imgQuery: 'European home goods retail store furniture interior design',
  },
  {
    title: 'US Corporate Gifting Brand Launches Custom Product Line',
    industry: 'Promotional Products',
    location: 'United States',
    challenge: 'A US-based corporate gifting company wanted to launch a new line of custom-branded products for their clients. They needed suppliers who could handle small-batch customization with consistent quality across 4 different product types.',
    solution: 'We sourced specialized factories for each product type, managed the sample approval process across all product lines, coordinated custom branding specifications, and oversaw production of 50,000 units across 4 categories.',
    results: [
      { icon: ShieldCheck, label: '50,000 units delivered on time' },
      { icon: TrendingUp, label: '4 product types from 4 different factories' },
      { icon: DollarSign, label: '18% below their initial budget estimate' },
      { icon: Clock, label: 'Full order completed in 12 weeks' },
    ],
    quote: 'Managing 4 different product lines from 4 different factories seemed overwhelming, but SSourcing China made it seamless. Every detail was handled professionally.',
    quoteAuthor: 'Sarah K., Brand Manager',
    imgQuery: 'custom branded corporate promotional gifts merchandise display',
  },
  {
    title: 'Australian Electronics Importer Avoids Quality Crisis',
    industry: 'Electronics',
    location: 'Australia',
    challenge: 'An Australian electronics importer had previously experienced quality issues with a new supplier. They needed comprehensive quality control for their next order of 10,000 consumer electronics units to avoid costly returns and brand damage.',
    solution: 'We conducted an in-depth factory audit before production began, implemented a 3-stage inspection process (pre-production, mid-production, and pre-shipment), and documented every step with photos and detailed reports for the client.',
    results: [
      { icon: ShieldCheck, label: '15% defect rate caught during mid-production inspection' },
      { icon: DollarSign, label: 'Factory agreed to full rework at no extra cost' },
      { icon: TrendingUp, label: 'Final shipment achieved 99.2% quality pass rate' },
      { icon: Clock, label: 'Zero returns from end customers' },
    ],
    quote: 'Without SSourcing China\'s mid-production inspection, we would have received thousands of defective units. Their QC process saved us from a costly disaster.',
    quoteAuthor: 'James W., Import Manager',
    imgQuery: 'electronics quality control inspection testing laboratory',
  },
  {
    title: 'UK Fashion Brand Builds Reliable Supply Chain',
    industry: 'Apparel & Fashion',
    location: 'United Kingdom',
    challenge: 'A growing UK fashion brand was struggling with inconsistent product quality and delayed shipments from their existing Chinese suppliers. They needed to build a more reliable supply chain to support their expansion.',
    solution: 'We conducted a full supply chain audit, replaced two underperforming suppliers with verified alternatives, implemented regular quality inspections, and established clear communication protocols with all suppliers.',
    results: [
      { icon: Clock, label: 'On-time delivery improved from 65% to 96%' },
      { icon: ShieldCheck, label: 'Quality rejection rate dropped from 12% to under 2%' },
      { icon: TrendingUp, label: '3 new reliable supplier relationships established' },
      { icon: DollarSign, label: 'Supply chain costs reduced by 15%' },
    ],
    quote: 'Building a reliable supply chain in China seemed impossible until we started working with SSourcing China. The difference in consistency has been remarkable.',
    quoteAuthor: 'Emma L., Operations Manager',
    imgQuery: 'fashion brand clothing apparel manufacturing supply chain',
  },
  {
    title: 'Canadian Retail Chain Sources 200+ SKUs',
    industry: 'Retail & Consumer Goods',
    location: 'Canada',
    challenge: 'A Canadian retail chain wanted to expand their private label range with 200+ SKUs across home, kitchen, and garden categories. Managing this many products across multiple suppliers seemed logistically impossible.',
    solution: 'We organized suppliers by category, appointed dedicated sourcing managers for each product group, implemented a centralized QC process, and consolidated all shipments through our logistics coordination team.',
    results: [
      { icon: ShieldCheck, label: '200+ SKUs sourced across 3 categories' },
      { icon: TrendingUp, label: '35 verified suppliers in our network for their products' },
      { icon: DollarSign, label: 'Average 25% cost savings vs. domestic alternatives' },
      { icon: Clock, label: 'Full range launched within 6 months' },
    ],
    quote: 'Managing 200+ SKUs from China sounded like a nightmare, but SSourcing China\'s systematic approach made it manageable. Their project management is excellent.',
    quoteAuthor: 'David C., Category Manager',
    imgQuery: 'retail store shelf products consumer goods variety display',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Client Success Stories
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Case Studies
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            Real examples of how we have helped businesses around the world source
            from China more efficiently, reduce risks, and achieve better outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div
                key={cs.title}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                {/* Image */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img
                    data-strk-img-id={`cs-detail-${index}-img-d${index}r${index}`}
                    data-strk-img={`[cs-detail-${index}-desc]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div id={`cs-detail-${index}-desc`} className="hidden">{cs.imgQuery}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/90 text-xs font-semibold text-brand-600 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="px-3 py-1 bg-white/90 text-xs font-semibold text-gray-600 rounded-full">
                      {cs.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {cs.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                        Challenge
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-2">
                        Our Solution
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-4">
                    Results
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {cs.results.map((result) => (
                      <div
                        key={result.label}
                        className="flex items-start gap-3 p-3 bg-green-50 rounded-lg"
                      >
                        <result.icon className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-green-800">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-brand-500 pl-5 py-2">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{cs.quote}"
                    </p>
                    <cite className="text-sm text-gray-500 mt-2 block not-italic">
                      — {cs.quoteAuthor}
                    </cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want Similar Results?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help
            your business achieve better outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
