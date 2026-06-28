import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, DollarSign, Clock, TrendingUp, Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'us-retailer-kitchenware',
    title: 'US Retailer Reduces Sourcing Costs by 35%',
    client: 'HomeGoods Direct',
    location: 'California, USA',
    category: 'Home & Garden',
    challenge: 'HomeGoods Direct was purchasing kitchenware from domestic distributors at high markups, making it difficult to compete on price. They needed a reliable way to source directly from Chinese manufacturers while maintaining product quality.',
    solution: 'We identified and verified three qualified kitchenware manufacturers in Guangdong province, conducted factory audits, arranged samples, and managed the entire quality control process. We also negotiated favorable payment terms and MOQ arrangements.',
    results: [
      '35% reduction in unit sourcing costs',
      '40% increase in profit margins',
      'Zero quality complaints in the first year',
      'Supplier relationship managed for 3+ years',
    ],
    quote: 'SSourcing China transformed our supply chain. The cost savings were immediate, and the quality has been consistently excellent.',
    quoteName: 'James Mitchell',
    quoteRole: 'Procurement Director, HomeGoods Direct',
    metrics: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '40%', label: 'Margin Increase' },
      { icon: Clock, value: '6 weeks', label: 'Setup Time' },
    ],
    imgId: 'cs-detail-1-x1y2z3',
    query: 'kitchenware home goods retail warehouse',
  },
  {
    id: 'eu-brand-electronics',
    title: 'EU Tech Startup Launches Product Line on Schedule',
    client: 'TechNova GmbH',
    location: 'Munich, Germany',
    category: 'Electronics',
    challenge: 'TechNova, a German startup, needed to manufacture their first branded Bluetooth speaker product line. With no prior experience sourcing from China and strict EU compliance requirements, they needed expert guidance.',
    solution: 'We managed the complete process from supplier selection to CE certification. Our team coordinated the industrial design refinement, sourced compliant components, oversaw production, and arranged logistics with all required export documentation.',
    results: [
      'Product launched on time and within budget',
      'Achieved CE certification on first attempt',
      'Zero defects in the initial production run',
      'Successfully scaled to 3 additional product lines',
    ],
    quote: 'As a startup with no China sourcing experience, SSourcing China made the process seamless. They handled everything from factory visits to compliance documentation.',
    quoteName: 'Anna Becker',
    quoteRole: 'Co-Founder, TechNova GmbH',
    metrics: [
      { icon: DollarSign, value: '28%', label: 'Below Budget' },
      { icon: TrendingUp, value: '0%', label: 'Defect Rate' },
      { icon: Clock, value: '12 weeks', label: 'Time to Market' },
    ],
    imgId: 'cs-detail-2-a4b5c6',
    query: 'electronics bluetooth speaker manufacturing',
  },
  {
    id: 'australian-builder-materials',
    title: 'Australian Distributor Triples Product Range',
    client: 'Pacific Trade Co.',
    location: 'Sydney, Australia',
    category: 'Building Materials',
    challenge: 'Pacific Trade Co. wanted to expand their building materials catalog but faced high prices from existing suppliers. They needed competitive Chinese suppliers for tiles, fixtures, and hardware without compromising on Australian quality standards.',
    solution: 'We conducted a comprehensive sourcing project across Foshan (tiles), Wenzhou (hardware), and Zhongshan (lighting). Our team verified each supplier, arranged samples, and established a regular quality inspection schedule for ongoing orders.',
    results: [
      'Product range expanded from 200 to 600+ SKUs',
      '22% average cost reduction across categories',
      'Established reliable supply chain for 5 product categories',
      'Quarterly quality audits maintaining consistent standards',
    ],
    quote: 'The team at SSourcing China helped us expand our business in ways we didn\'t think possible. Their supplier network and quality processes are excellent.',
    quoteName: 'David Chen',
    quoteRole: 'Managing Director, Pacific Trade Co.',
    metrics: [
      { icon: DollarSign, value: '22%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '3x', label: 'Product Range' },
      { icon: Clock, value: '8 weeks', label: 'Full Onboarding' },
    ],
    imgId: 'cs-detail-3-d7e8f9',
    query: 'building materials tiles hardware distribution',
  },
  {
    id: 'uk-fashion-brand',
    title: 'UK Fashion Brand Launches Sustainable Line',
    client: 'EcoThread Ltd.',
    location: 'London, UK',
    category: 'Apparel & Textiles',
    challenge: 'EcoThread wanted to launch a sustainable fashion line made with organic materials from China. They needed suppliers with proper organic certifications and ethical manufacturing practices.',
    solution: 'We identified GOTS-certified fabric mills and factories in Jiangsu and Zhejiang provinces, conducted ethical audits, verified organic certifications, and managed sample development from fabric selection to finished garments.',
    results: [
      'GOTS and OEKO-TEX certified supply chain',
      'Successful launch of 30-piece collection',
      '30% lower production costs than UK alternatives',
      'Ethical audit passed with no major findings',
    ],
    quote: 'Finding genuinely certified organic suppliers in China seemed daunting, but SSourcing China made it straightforward. Their verification process gave us complete confidence.',
    quoteName: 'Sarah Williams',
    quoteRole: 'Founder, EcoThread Ltd.',
    metrics: [
      { icon: DollarSign, value: '30%', label: 'Cost Savings' },
      { icon: TrendingUp, value: '30', label: 'SKUs Launched' },
      { icon: Clock, value: '10 weeks', label: 'Development Time' },
    ],
    imgId: 'cs-detail-4-g1h2i3',
    query: 'sustainable fashion textile organic clothing',
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
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              See how businesses around the world have benefited from our China sourcing services.
              Every case study represents a real client with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20">
          {caseStudies.map((cs, i) => (
            <div key={cs.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <span className="text-text-muted text-sm">{cs.location}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {cs.title}
                  </h2>
                  <p className="text-text-muted text-sm mb-5">{cs.client}</p>

                  <div className="space-y-5 mb-6">
                    <div>
                      <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                        The Challenge
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                        Our Solution
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-text-primary text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-bg-light rounded-lg border border-border p-5">
                    <Quote className="w-6 h-6 text-accent mb-3" />
                    <p className="text-text-primary text-sm italic leading-relaxed mb-3">
                      "{cs.quote}"
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-primary">{cs.quoteName}</p>
                      <p className="text-xs text-text-muted">{cs.quoteRole}</p>
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="rounded-lg overflow-hidden aspect-[4/3] bg-bg-card mb-6">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[case-${cs.id}] ${cs.query}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, j) => {
                      const Icon = m.icon
                      return (
                        <div key={j} className="bg-bg-light rounded-lg border border-border p-4 text-center">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <p className="text-xl font-bold text-primary">{m.value}</p>
                          <p className="text-xs text-text-muted">{m.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              {i < caseStudies.length - 1 && (
                <hr className="border-border mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Every project starts with a conversation. Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
