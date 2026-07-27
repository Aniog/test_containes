import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    imgId: 'case-study-electronics-m4n8p2',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
    query: '[case-electronics-desc] [case-electronics-title]',
    industry: 'Consumer Electronics',
    title: 'Reduced Defect Rate by 95% for a US Electronics Brand',
    description: 'A US-based electronics importer was receiving inconsistent quality from their existing supplier. We audited the factory, identified root causes, and helped transition to a verified supplier.',
    result: '2% defect rate',
    savings: '$45,000/year',
    timeframe: '8 weeks',
  },
  {
    imgId: 'case-study-furniture-k2l7q5',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
    query: '[case-furniture-desc] [case-furniture-title]',
    industry: 'Home & Furniture',
    title: 'Cut Sourcing Costs 30% for an Australian Retailer',
    description: 'An Australian home goods retailer wanted to reduce costs without sacrificing quality. We sourced alternative suppliers, negotiated pricing, and streamlined the logistics process.',
    result: '30% cost reduction',
    savings: '$120,000/year',
    timeframe: '12 weeks',
  },
  {
    imgId: 'case-study-apparel-j9r3s1',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
    query: '[case-apparel-desc] [case-apparel-title]',
    industry: 'Apparel & Fashion',
    title: 'Launched Private Label Clothing Line in 10 Weeks',
    description: 'A European fashion startup needed to launch a private label clothing line quickly. We managed OEM production, custom labeling, and international shipping from factory to warehouse.',
    result: 'On-time launch',
    savings: 'Full brand control',
    timeframe: '10 weeks',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="label-tag mb-4 inline-block">Case Studies</span>
            <h2 className="heading-section mb-4">Real Results for Real Businesses</h2>
            <p className="text-body text-base md:text-lg">
              See how we have helped companies around the world source from China with confidence.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:gap-3 transition-all"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="group card-base card-hover overflow-hidden p-0">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={study.query}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-800/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  id={study.titleId}
                  className="heading-card text-lg mb-3"
                >
                  {study.title}
                </h3>
                <p
                  id={study.descId}
                  className="text-body text-sm mb-5"
                >
                  {study.description}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-steel-50 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-500 mx-auto mb-1" />
                    <p className="text-xs font-bold text-brand-800">{study.result}</p>
                  </div>
                  <div className="text-center p-3 bg-steel-50 rounded-lg">
                    <DollarSign className="w-4 h-4 text-accent-500 mx-auto mb-1" />
                    <p className="text-xs font-bold text-brand-800">{study.savings}</p>
                  </div>
                  <div className="text-center p-3 bg-steel-50 rounded-lg">
                    <Clock className="w-4 h-4 text-brand-500 mx-auto mb-1" />
                    <p className="text-xs font-bold text-brand-800">{study.timeframe}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
