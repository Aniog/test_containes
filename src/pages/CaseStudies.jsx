import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Quote, 
  TrendingUp, 
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    location: 'Munich, Germany',
    challenge: 'EuroTech needed a reliable USB-C hub manufacturer in Shenzhen after their previous supplier failed multiple quality audits. They required a supplier capable of consistent quality at scale with CE/FCC certification.',
    solution: 'We identified 8 potential manufacturers, conducted on-site audits of 5 factories, and shortlisted 3 that met all requirements. We negotiated pricing, verified certifications, and established quality checkpoints throughout production.',
    results: [
      'Certified factory with verified production capacity',
      '15% cost reduction compared to previous supplier',
      '10,000 units delivered on time, first order',
      '99.3% quality pass rate on pre-shipment inspection',
      'Ongoing monthly quality monitoring program',
    ],
    badge: 'Cost Reduction',
    quote: 'SSourcing China saved us months of supplier research. Their factory audit revealed issues we would never have caught from remote communication alone.',
    quoteAuthor: 'Thomas Mueller, Procurement Director',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Home & Kitchen',
    location: 'Sydney, Australia',
    challenge: 'Pacific Home Goods wanted to source bamboo kitchenware for the Australian market but struggled to find suppliers meeting EU food safety standards. Multiple suppliers claimed compliance but could not provide documentation.',
    solution: 'We conducted thorough supplier searches focusing on certified manufacturers. Our team visited 4 factories, verified their food-grade certifications, and coordinated SGS testing of samples.',
    results: [
      '3 verified, certified suppliers identified',
      'All products passed SGS food safety testing',
      'First order of 5,000 units shipped in 6 weeks',
      'Packaging customized for Australian market',
      'Established quality checkpoints for repeat orders',
    ],
    badge: 'Quality Compliance',
    quote: 'The food safety documentation from SSourcing China gave us full confidence. They handled all the verification we could not do from Sydney.',
    quoteAuthor: 'Sarah Chen, Founder',
  },
  {
    company: 'Nordic Fitwear',
    industry: 'Apparel & Textiles',
    location: 'Stockholm, Sweden',
    challenge: 'Nordic Fitwear was scaling their activewear line and needed a manufacturer with GOTS certification and sustainable production capabilities. They had been rejected by several factories due to small initial order quantities.',
    solution: 'We leveraged our network of sustainable textile manufacturers and found a GOTS-certified factory willing to accommodate their initial MOQ. We negotiated favorable terms for phased scaling.',
    results: [
      'GOTS-certified factory secured',
      '30% reduction in lead time (12 to 8 weeks)',
      '99% quality rate maintained across first 3 orders',
      'MOQ reduced by 40% through negotiation',
      'Scalable pricing agreed for volume growth',
    ],
    badge: 'Sustainability',
    quote: 'Finding a sustainable manufacturer willing to work with our order size was a game-changer. SSourcing China made it happen.',
    quoteAuthor: 'Erik Larsson, CEO',
  },
  {
    company: 'MediEquip Asia',
    industry: 'Medical Equipment',
    location: 'Singapore',
    challenge: 'MediEquip needed ISO 13485 certified manufacturers for medical device components. They required strict quality control and full traceability across the supply chain.',
    solution: 'We identified qualified medical-grade manufacturers, conducted comprehensive audits against ISO 13485 standards, and implemented a full traceability system with batch tracking.',
    results: [
      'ISO 13485 certified manufacturer verified',
      'Full batch traceability system implemented',
      'Zero defects across initial 3 production runs',
      '20% cost savings vs. previous European supplier',
      'Weekly quality reports with photo documentation',
    ],
    badge: 'Medical Grade',
    quote: 'The level of detail in their factory audits gave us complete confidence in the supply chain. Highly recommended for medical sourcing.',
    quoteAuthor: 'Dr. Alan Tan, Supply Chain Director',
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
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Case Studies</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              Real results from real clients. See how we have helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <Badge variant="success" className="text-xs">{cs.badge}</Badge>
                      <span className="text-sm text-gray-400">{cs.industry}</span>
                      <span className="text-sm text-gray-400">|</span>
                      <span className="text-sm text-gray-400">{cs.location}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{cs.company}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">The Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Our Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {cs.results.map((result, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-50 rounded-xl p-6">
                      <Quote className="w-5 h-5 text-brand-300 mb-2" />
                      <p className="text-gray-700 italic leading-relaxed mb-3">"{cs.quote}"</p>
                      <p className="text-sm font-medium text-brand-500">— {cs.quoteAuthor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Tell us about your sourcing needs and let us deliver results for your business.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl">
              Start Your Sourcing Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}