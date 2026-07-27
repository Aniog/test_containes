import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { TrendingUp, Shield, Package, ArrowRight, CheckCircle, DollarSign, Clock, Users } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    category: 'Electronics',
    title: 'Electronics Importer Saves 22% on Component Costs',
    challenge: 'A US-based electronics company was struggling with rising component costs from their existing supplier. They needed to find alternative manufacturers without compromising on quality or delivery timelines.',
    solution: 'We identified 3 verified PCB manufacturers in Shenzhen and Dongguan, collected competitive quotations, and coordinated sample production. After the buyer approved samples, we negotiated a 22% price reduction and managed quality control for their first 50,000-unit order.',
    results: [
      '22% cost reduction on component pricing',
      'Zero defect rate on first shipment',
      'Production completed 3 days ahead of schedule',
      'Long-term supplier relationship established',
    ],
    quote: 'SSourcing China helped us find a reliable supplier that saved us significant money without any quality issues.',
    quoteAuthor: 'Procurement Manager, US Electronics Company',
  },
  {
    icon: Shield,
    category: 'Quality Control',
    title: 'European Retailer Avoids $80K in Defective Goods',
    challenge: 'A European home goods retailer placed a large order for kitchen products. Without proper quality oversight, they risked receiving products that did not meet their specifications.',
    solution: 'During our pre-shipment inspection, our QC team discovered that 30% of the order did not meet the agreed color and dimension specifications. We documented the issues with photos, reported them to the buyer immediately, and helped negotiate a rework plan with the supplier.',
    results: [
      '$80,000 in potential losses prevented',
      'Supplier reworked defective units at their cost',
      'Final shipment met all quality standards',
      'Improved supplier quality processes for future orders',
    ],
    quote: 'The inspection report saved us from a costly mistake. We would have received defective products without their intervention.',
    quoteAuthor: 'Buyer, European Home Goods Retailer',
  },
  {
    icon: Package,
    category: 'Full Sourcing',
    title: 'Australian Brand Launches Private Label Kitchenware Line',
    challenge: 'An Australian startup wanted to launch a private label kitchenware line but had no experience sourcing from China. They needed end-to-end support from supplier selection to delivery.',
    solution: 'We handled the entire process: identifying suitable manufacturers, coordinating samples, negotiating pricing, monitoring production, conducting quality inspections, and arranging freight forwarding to Australia. We provided regular updates and photo reports at every stage.',
    results: [
      'Product launched on time and 15% under budget',
      'All products passed Australian safety standards',
      'Successful first order of 5,000 units',
      'Ongoing production relationship established',
    ],
    quote: 'As a first-time importer, we could not have done this without their guidance. They made the whole process smooth and stress-free.',
    quoteAuthor: 'Founder, Australian Kitchenware Brand',
  },
  {
    icon: DollarSign,
    category: 'Price Negotiation',
    title: 'UK Distributor Reduces Packaging Costs by 18%',
    challenge: 'A UK distribution company was paying above-market rates for custom packaging from their current supplier. They wanted to explore alternatives while maintaining quality.',
    solution: 'We sourced 4 packaging manufacturers, collected detailed quotations, and created a comparison report. We then negotiated with the top 2 candidates, leveraging volume commitments and long-term partnership potential to secure better pricing.',
    results: [
      '18% reduction in packaging costs',
      'Improved print quality and material specifications',
      'Faster production lead times',
      'Consolidated shipping reduced freight costs',
    ],
    quote: 'They found us a better supplier at a lower price, and the quality actually improved. Excellent service.',
    quoteAuthor: 'Operations Director, UK Distribution Company',
  },
  {
    icon: Clock,
    category: 'Production Follow-up',
    title: 'Canadian Retailer Meets Holiday Season Deadline',
    challenge: 'A Canadian retailer needed a large order of seasonal products delivered before the holiday shopping season. Their previous supplier had missed deadlines, putting their sales at risk.',
    solution: 'We took over production management, established a detailed production schedule with milestone checkpoints, and conducted weekly factory visits to monitor progress. When a delay was identified, we worked with the factory to add an extra production shift.',
    results: [
      'Order delivered 2 weeks before holiday deadline',
      'Weekly progress reports with photos',
      'Production delay identified and resolved early',
      'Buyer confidence restored for future orders',
    ],
    quote: 'Their production follow-up gave us peace of mind. We knew exactly where our order stood at all times.',
    quoteAuthor: 'Purchasing Manager, Canadian Retail Chain',
  },
  {
    icon: Users,
    category: 'Supplier Verification',
    title: 'German Manufacturer Verifies Potential Partner',
    challenge: 'A German manufacturing company was considering a long-term partnership with a Chinese supplier but needed independent verification of the factory capabilities before committing.',
    solution: 'We conducted a comprehensive factory audit including business license verification, production capacity assessment, quality management system review, and working conditions evaluation. We provided a detailed report with photos and recommendations.',
    results: [
      'Comprehensive factory audit report delivered',
      'Production capacity confirmed at stated levels',
      'Quality management system verified',
      'Buyer proceeded with confidence to place order',
    ],
    quote: 'The factory audit report was thorough and gave us the confidence we needed to move forward with this supplier.',
    quoteAuthor: 'Sourcing Director, German Manufacturing Company',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Real Results for Global Buyers</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              See how we have helped businesses around the world source from China with confidence,
              save costs, and avoid quality issues.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <study.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-1">Challenge</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Our Solution</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-green-800">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm">
                    "{study.quote}"
                    <footer className="not-italic text-xs text-muted-foreground mt-1">— {study.quoteAuthor}</footer>
                  </blockquote>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    data-strk-bg-id={`casestudy-${index}`}
                    data-strk-bg="[casestudy-title]"
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="w-full aspect-[4/3] bg-secondary rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden text for image queries */}
        <h2 id="casestudy-title" className="sr-only">China sourcing case study factory quality inspection</h2>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want Similar Results?</h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your sourcing needs and we will show you how we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
