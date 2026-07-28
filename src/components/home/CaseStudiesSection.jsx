import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM for European Retailer',
    category: 'Electronics',
    summary: 'Helped a European electronics brand find a certified OEM manufacturer in Shenzhen, reducing unit cost by 22% while maintaining quality standards.',
    imgId: 'case-electronics-b2c3d4',
    metrics: [
      { icon: TrendingUp, value: '22%', label: 'Cost Reduction' },
      { icon: Clock, value: '6 weeks', label: 'Time to Production' },
      { icon: DollarSign, value: '$180K', label: 'Order Value' },
    ],
  },
  {
    id: 'furniture-usa',
    title: 'Furniture Sourcing for US Distributor',
    category: 'Home & Garden',
    summary: 'Sourced solid wood furniture from Foshan factories for a US distributor, managing quality inspections and container shipping coordination.',
    imgId: 'case-furniture-e5f6g7',
    metrics: [
      { icon: TrendingUp, value: '15%', label: 'Cost Savings' },
      { icon: Clock, value: '4 weeks', label: 'Lead Time' },
      { icon: DollarSign, value: '$320K', label: 'Annual Orders' },
    ],
  },
  {
    id: 'apparel-australia',
    title: 'Apparel Manufacturing for Australian Brand',
    category: 'Apparel & Textiles',
    summary: 'Connected an Australian fashion brand with Guangzhou garment factories, managing sampling, production follow-up, and pre-shipment inspections.',
    imgId: 'case-apparel-h8i9j1',
    metrics: [
      { icon: TrendingUp, value: '30%', label: 'Margin Improvement' },
      { icon: Clock, value: '8 weeks', label: 'First Order' },
      { icon: DollarSign, value: '$95K', label: 'Initial Order' },
    ],
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
          <h2 className="heading-2 mt-2 mb-4">Case Studies</h2>
          <p className="body-text max-w-2xl mx-auto">
            Real examples of how we have helped buyers source from China successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="card overflow-hidden group">
              <div
                className="aspect-video rounded-t-lg -mx-6 -mt-6 mb-4 bg-slate-100"
                data-strk-bg-id={study.imgId}
                data-strk-bg={`[${study.id}-title] [study-category-${study.id}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <span id={`study-category-${study.id}`} className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                {study.category}
              </span>
              <h3 id={`${study.id}-title`} className="heading-3 mt-1 mb-2 group-hover:text-blue-800 transition-colors">
                {study.title}
              </h3>
              <p className="body-text text-sm mb-4">{study.summary}</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <metric.icon className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
