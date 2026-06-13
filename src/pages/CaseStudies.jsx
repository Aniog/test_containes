import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Quote, ArrowRight, TrendingUp, Shield, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'European Retailer Saves 30% on Electronics Sourcing',
    industry: 'Electronics',
    region: 'Europe',
    challenge: 'A mid-size European electronics retailer was struggling with unreliable suppliers and inconsistent product quality. They needed a trusted partner to identify qualified manufacturers and ensure consistent quality across their product lines.',
    solution: 'We identified three qualified manufacturers in Shenzhen and Dongguan, conducted comprehensive factory audits, and negotiated pricing based on volume commitments. We implemented a multi-stage quality inspection process and provided weekly production updates.',
    results: [
      { metric: '30%', label: 'Cost reduction on unit pricing' },
      { metric: '99.2%', label: 'Quality pass rate after implementation' },
      { metric: '2 weeks', label: 'Faster average delivery time' },
    ],
    icon: DollarSign,
  },
  {
    id: 2,
    title: 'US Brand Avoids $200K in Defective Products',
    industry: 'Consumer Goods',
    region: 'United States',
    challenge: 'A US-based consumer goods company was about to receive a shipment of 50,000 units when they engaged our pre-shipment inspection service. They had no prior experience with quality control in China.',
    solution: 'Our inspection team conducted a thorough pre-shipment inspection and discovered critical quality issues including incorrect materials, dimensional deviations, and packaging defects. We worked with the factory to implement corrective actions before any goods were shipped.',
    results: [
      { metric: '$200K', label: 'Potential loss prevented' },
      { metric: '100%', label: 'Defects caught before shipment' },
      { metric: '3 weeks', label: 'Time to implement corrections' },
    ],
    icon: Shield,
  },
  {
    id: 3,
    title: 'Australian Company Streamlines Supply Chain',
    industry: 'Home & Garden',
    region: 'Australia',
    challenge: 'An Australian home goods company was managing five different suppliers independently, resulting in inconsistent quality, communication challenges, and complex logistics coordination.',
    solution: 'We consolidated their sourcing operations, identified two primary manufacturers that could handle most of their product range, and implemented a unified quality control and shipping process. We became their single point of contact for all China sourcing needs.',
    results: [
      { metric: '40%', label: 'Faster average delivery time' },
      { metric: '60%', label: 'Reduction in supplier management overhead' },
      { metric: '25%', label: 'Overall cost savings' },
    ],
    icon: TrendingUp,
  },
  {
    id: 4,
    title: 'UK Startup Launches Product Line from Scratch',
    industry: 'Consumer Goods',
    region: 'United Kingdom',
    challenge: 'A UK-based startup wanted to launch a new line of eco-friendly products but had no experience with manufacturing in China. They needed end-to-end support from supplier identification to final delivery.',
    solution: 'We guided them through the entire process: identifying manufacturers with eco-certifications, arranging and evaluating samples, conducting factory audits, monitoring production, and coordinating shipping. We also helped them navigate certification requirements for the UK market.',
    results: [
      { metric: '8 weeks', label: 'From concept to first shipment' },
      { metric: '3', label: 'Qualified manufacturers identified' },
      { metric: '100%', label: 'Products met UK compliance standards' },
    ],
    icon: Clock,
  },
  {
    id: 5,
    title: 'German Manufacturer Finds Specialized Component Supplier',
    industry: 'Automotive',
    region: 'Germany',
    challenge: 'A German automotive manufacturer needed a specialized component supplier in China that could meet strict quality standards and provide competitive pricing for high-volume production.',
    solution: 'We conducted an extensive search across automotive manufacturing hubs, identified suppliers with relevant certifications (IATF 16949), and facilitated technical discussions between the German engineering team and Chinese manufacturers. We managed the entire qualification process.',
    results: [
      { metric: '45%', label: 'Cost savings vs. European suppliers' },
      { metric: 'IATF 16949', label: 'Certified supplier qualified' },
      { metric: '12 months', label: 'Ongoing successful partnership' },
    ],
    icon: Shield,
  },
  {
    id: 6,
    title: 'Canadian Retailer Resolves Quality Crisis',
    industry: 'Textiles',
    region: 'Canada',
    challenge: 'A Canadian textile retailer was experiencing a high return rate due to quality issues with their Chinese supplier. They needed urgent intervention to identify the root cause and implement corrective measures.',
    solution: 'We conducted an emergency factory audit and during-production inspection, identified the root causes of quality failures, and worked with the factory to implement a corrective action plan. We also helped them transition to a more reliable supplier for future orders.',
    results: [
      { metric: '85%', label: 'Reduction in return rate' },
      { metric: '2', label: 'New qualified suppliers onboarded' },
      { metric: '4 weeks', label: 'Time to implement corrective actions' },
    ],
    icon: TrendingUp,
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses around the world source confidently from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl ${
                  index % 2 === 0 ? 'bg-secondary/50' : 'bg-white border border-border'
                }`}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Quote className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-primary">{study.industry}</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">{study.region}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{study.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Challenge</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Our Solution</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 border border-border h-full">
                    <h3 className="font-semibold text-foreground mb-4">Key Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-3 bg-secondary rounded-lg">
                          <div className="text-2xl font-bold text-primary">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
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
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
