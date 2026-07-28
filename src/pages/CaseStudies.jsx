import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/home/InquiryForm'

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM for European Retailer',
    category: 'Electronics',
    summary: 'A European electronics retailer needed a certified OEM manufacturer for their private-label smart home devices. We identified three qualified factories in Shenzhen, conducted on-site audits, and helped them select the best match.',
    challenge: 'The buyer had previously worked with a supplier that failed quality audits and missed delivery deadlines. They needed a reliable partner with ISO certification and proven OEM experience.',
    solution: 'We shortlisted three ISO-certified factories, conducted detailed audits including production line assessment and quality system review, and coordinated sample production. The selected factory passed all requirements.',
    results: [
      { icon: TrendingUp, value: '22%', label: 'Cost Reduction' },
      { icon: Clock, value: '6 weeks', label: 'Time to Production' },
      { icon: DollarSign, value: '$180K', label: 'Order Value' },
    ],
    imgId: 'case-electronics-b2c3d4',
  },
  {
    id: 'furniture-usa',
    title: 'Furniture Sourcing for US Distributor',
    category: 'Home & Garden',
    summary: 'A US furniture distributor wanted to source solid wood dining sets from Foshan. We managed the entire process from supplier identification to container shipping coordination.',
    challenge: 'The buyer needed FSC-certified wood suppliers with experience in US market compliance, including CARB and EPA standards for formaldehyde emissions.',
    solution: 'We identified Foshan factories with FSC certification and US export experience, verified their compliance documentation, and managed quality inspections for each production batch.',
    results: [
      { icon: TrendingUp, value: '15%', label: 'Cost Savings' },
      { icon: Clock, value: '4 weeks', label: 'Lead Time' },
      { icon: DollarSign, value: '$320K', label: 'Annual Orders' },
    ],
    imgId: 'case-furniture-e5f6g7',
  },
  {
    id: 'apparel-australia',
    title: 'Apparel Manufacturing for Australian Brand',
    category: 'Apparel & Textiles',
    summary: 'An Australian fashion brand needed a reliable garment manufacturer in Guangzhou for their seasonal collections. We managed sampling, production follow-up, and pre-shipment inspections.',
    challenge: 'The brand required consistent quality across multiple fabric types and complex garment constructions, with tight seasonal deadlines.',
    solution: 'We connected them with a Guangzhou factory experienced in Australian market requirements, managed the sampling process through three rounds of revisions, and conducted inspections on every production batch.',
    results: [
      { icon: TrendingUp, value: '30%', label: 'Margin Improvement' },
      { icon: Clock, value: '8 weeks', label: 'First Order' },
      { icon: DollarSign, value: '$95K', label: 'Initial Order' },
    ],
    imgId: 'case-apparel-h8i9j1',
  },
  {
    id: 'packaging-uk',
    title: 'Custom Packaging for UK E-commerce Brand',
    category: 'Packaging',
    summary: 'A UK e-commerce brand needed custom printed packaging for their product line. We sourced a printing factory in Dongguan with experience in high-quality offset printing and fast turnaround.',
    challenge: 'The buyer needed complex die-cut boxes with custom printing, requiring precise color matching and strict dimensional tolerances.',
    solution: 'We found a Dongguan factory specializing in premium packaging, coordinated color-proof samples, and managed production with strict quality checks on print quality and dimensions.',
    results: [
      { icon: TrendingUp, value: '35%', label: 'Cost Savings' },
      { icon: Clock, value: '3 weeks', label: 'Production Time' },
      { icon: DollarSign, value: '$45K', label: 'Order Value' },
    ],
    imgId: 'case-packaging-k2l3m4',
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
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Real Sourcing Success Stories
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              See how we have helped buyers around the world source from China successfully — with real challenges, real solutions, and real results.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.map((study, index) => (
        <section key={study.id} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <div
                  className="aspect-video rounded-lg bg-slate-100 mb-6"
                  data-strk-bg-id={study.imgId}
                  data-strk-bg={`[${study.id}-title] [case-${index}-summary]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">{study.category}</span>
                <h2 id={`${study.id}-title`} className="heading-2 mt-1 mb-4">{study.title}</h2>
                <p id={`case-${index}-summary`} className="body-text mb-6">{study.summary}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                    <p className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Our Solution</h4>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center bg-slate-50 rounded-lg p-3">
                      <result.icon className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <div className="text-xl font-bold text-slate-900">{result.value}</div>
                      <div className="text-xs text-slate-500">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will create a plan tailored to your requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  )
}
