import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    badge: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    challenge: 'A US-based retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements and a tight 8-week timeline for a holiday season launch.',
    solution: 'We identified 3 qualified factories in Shenzhen through our supplier network, conducted comprehensive on-site audits including production line evaluation and quality system review, arranged engineering samples, and managed the entire production process with weekly quality checks and progress reports.',
    result: 'Delivered 10,000 units on time with a 98.5% pass rate on pre-shipment inspection. The client reported zero customer complaints in the first quarter of sales.',
    metrics: [
      { label: 'Units Delivered', value: '10,000' },
      { label: 'Quality Pass Rate', value: '98.5%' },
      { label: 'Timeline', value: '8 weeks' },
      { label: 'Customer Complaints', value: '0' },
    ],
  },
  {
    badge: 'Apparel',
    title: 'Custom Garment Production for European Fashion Brand',
    challenge: 'A European fashion brand wanted to manufacture a new clothing line in China but had no experience with Chinese suppliers, fabric sourcing, or quality standards for their target market.',
    solution: 'We sourced fabric suppliers in Guangzhou, found a garment factory with EU export experience and relevant certifications, managed 3 rounds of sampling with detailed feedback loops, and coordinated pre-production and pre-shipment inspections.',
    result: 'Successfully launched the collection with 3 production runs totaling 25,000 garments and zero quality disputes. The client has since made us their exclusive China sourcing partner.',
    metrics: [
      { label: 'Total Garments', value: '25,000' },
      { label: 'Production Runs', value: '3' },
      { label: 'Quality Disputes', value: '0' },
      { label: 'Partnership', value: 'Ongoing' },
    ],
  },
  {
    badge: 'Industrial',
    title: 'CNC Machined Parts for Australian Industrial Distributor',
    challenge: 'An Australian company needed custom CNC-machined parts with tight tolerances (+/- 0.01mm) and consistent quality across large recurring orders. Previous suppliers had quality consistency issues.',
    solution: 'We verified factory capabilities including their CNC equipment, quality management system (ISO 9001), and inspection equipment. We set up a detailed inspection protocol for each batch with dimensional checks and material certification.',
    result: 'Ongoing partnership with 15+ orders completed over 18 months, maintaining consistent quality and competitive pricing. The client has expanded their product range through our sourcing support.',
    metrics: [
      { label: 'Orders Completed', value: '15+' },
      { label: 'Partnership Duration', value: '18 months' },
      { label: 'Tolerance', value: '+/- 0.01mm' },
      { label: 'Quality Issues', value: '0' },
    ],
  },
  {
    badge: 'Home & Garden',
    title: 'Furniture Sourcing for UK Online Retailer',
    challenge: 'A UK-based online furniture retailer needed a manufacturer for a new line of solid wood furniture with FSC certification and compliance with UK safety standards.',
    solution: 'We identified factories in Shandong with FSC certification and UK export experience, verified their quality systems, arranged samples with material testing, and coordinated third-party lab testing for UK compliance.',
    result: 'Successfully launched 12 SKUs with all compliance documentation. The client achieved a 4.7/5 average customer rating and has reordered 4 times.',
    metrics: [
      { label: 'SKUs Launched', value: '12' },
      { label: 'Customer Rating', value: '4.7/5' },
      { label: 'Reorders', value: '4' },
      { label: 'Compliance', value: '100%' },
    ],
  },
  {
    badge: 'Consumer Goods',
    title: 'Toy Manufacturing for Canadian Distributor',
    challenge: 'A Canadian toy distributor needed a manufacturer for a new line of educational toys with strict safety certifications (EN71, ASTM, CPSIA) for multiple markets.',
    solution: 'We sourced factories with existing toy certifications, verified their testing lab partnerships, managed sample development with safety testing, and coordinated production with batch-level quality inspections.',
    result: 'All products passed safety testing for US, EU, and Canadian markets. First order of 50,000 units delivered on schedule with a 99.2% quality pass rate.',
    metrics: [
      { label: 'Units Delivered', value: '50,000' },
      { label: 'Quality Pass Rate', value: '99.2%' },
      { label: 'Markets Certified', value: '3' },
      { label: 'Safety Tests', value: 'All Passed' },
    ],
  },
  {
    badge: 'Custom OEM',
    title: 'Private Label Cosmetics for Australian Beauty Brand',
    challenge: 'An Australian beauty brand wanted to develop a private label skincare line manufactured in China with custom formulations, packaging, and branding.',
    solution: 'We found a cosmetics manufacturer with GMP certification and FDA registration, coordinated formulation development with their R&D team, managed packaging design and production, and arranged stability testing.',
    result: 'Successfully launched 8-product skincare line with full regulatory documentation. The client achieved $500K in first-year sales through their online store.',
    metrics: [
      { label: 'Products Launched', value: '8' },
      { label: 'First-Year Sales', value: '$500K' },
      { label: 'Certifications', value: 'GMP + FDA' },
      { label: 'Regulatory', value: 'Full Compliance' },
    ],
  },
]

export function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Real Results for Global Buyers
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              See how we have helped businesses around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader className="pb-4">
                  <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 mb-3">
                    {study.badge}
                  </Badge>
                  <h2 className="text-2xl font-bold text-slate-900">{study.title}</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <p className="text-xs font-semibold text-green-700 uppercase tracking-wider">Result</p>
                      </div>
                      <p className="text-sm text-green-800 leading-relaxed">{study.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                    {study.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-center">
                        <p className="text-2xl font-bold text-blue-700">{metric.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
