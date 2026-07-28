import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { TrendingUp, DollarSign, Clock, Shield, Users, Globe } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Reduces Product Costs by 35%',
    industry: 'Home & Kitchen',
    client: 'Mid-size US Retail Chain',
    challenge: 'A US-based retail chain with 50+ stores was sourcing kitchenware through domestic distributors, paying high markups. They wanted to source directly from Chinese factories but lacked the local expertise to verify suppliers and ensure quality.',
    solution: 'We conducted a comprehensive supplier search across Guangdong province, verified 12 potential factories through on-site audits, and shortlisted 4 suppliers based on quality, capacity, and pricing. We implemented a multi-stage QC process and coordinated all logistics.',
    results: ['35% reduction in product costs', 'Zero quality issues in first year', 'Lead time reduced from 90 to 45 days', 'Successfully launched 3 new product lines'],
    imgId: 'cs-us-retailer',
    titleId: 'cs-us-retailer-title',
    descId: 'cs-us-retailer-desc',
    resultIcon: DollarSign,
    resultText: '35% Cost Reduction',
  },
  {
    title: 'European Electronics Brand Launches in 8 Weeks',
    industry: 'Consumer Electronics',
    client: 'European Electronics Startup',
    challenge: 'A European electronics brand needed to launch a new product line of wireless earbuds within a tight 8-week window for a major trade show. They needed certified suppliers who could deliver high-quality products on an aggressive timeline.',
    solution: 'We activated our network of certified electronics manufacturers in Shenzhen, identified 3 suppliers with available capacity, expedited sample development, and closely monitored production. We arranged air freight to meet the deadline.',
    results: ['Products delivered 2 days before the deadline', 'CE certification achieved', 'All 5,000 units passed QC inspection', 'Trade show launch was successful'],
    imgId: 'cs-euro-electronics',
    titleId: 'cs-euro-electronics-title',
    descId: 'cs-euro-electronics-desc',
    resultIcon: Clock,
    resultText: '8-Week Turnaround',
  },
  {
    title: 'Australian Importer Scales to $2M Annual Orders',
    industry: 'Promotional Products',
    client: 'Australian Promotional Products Company',
    challenge: 'An Australian promotional products company was struggling to scale their China sourcing operations. Inconsistent supplier quality, communication issues, and logistics problems were limiting their growth potential.',
    solution: 'We built a dedicated supplier network of 8 verified factories, established standardized QC processes, created communication protocols, and set up a streamlined logistics pipeline. We now manage their ongoing production across multiple product categories.',
    results: ['Scaled from $400K to $2M annual orders', 'Supplier base expanded from 2 to 8 factories', 'Defect rate dropped from 8% to 1.5%', 'Delivery reliability improved to 97%'],
    imgId: 'cs-aus-importer',
    titleId: 'cs-aus-importer-title',
    descId: 'cs-aus-importer-desc',
    resultIcon: TrendingUp,
    resultText: '$2M Annual Volume',
  },
  {
    title: 'UK Fashion Brand Achieves Ethical Sourcing Goals',
    industry: 'Apparel & Textiles',
    client: 'UK Sustainable Fashion Brand',
    challenge: 'A UK-based sustainable fashion brand needed to find Chinese manufacturers that met strict ethical and environmental standards, including BSCI certification, organic material sourcing, and fair labor practices.',
    solution: 'We conducted extensive factory audits focusing on ethical compliance, verified BSCI and GOTS certifications, assessed supply chain transparency, and helped the brand establish direct relationships with compliant manufacturers.',
    results: ['BSCI-certified supplier network established', 'GOTS organic certification verified', 'Full supply chain transparency achieved', 'Brand successfully entered 3 new markets'],
    imgId: 'cs-uk-fashion',
    titleId: 'cs-uk-fashion-title',
    descId: 'cs-uk-fashion-desc',
    resultIcon: Shield,
    resultText: 'Ethical Compliance',
  },
  {
    title: 'Canadian Distributor Streamlines Multi-Category Sourcing',
    industry: 'Hardware & Tools',
    client: 'Canadian Industrial Distributor',
    challenge: 'A Canadian industrial distributor needed to source 200+ SKUs across multiple product categories — hand tools, power tool accessories, plumbing fixtures, and electrical components — from different Chinese manufacturers.',
    solution: 'We identified and verified specialized suppliers for each product category, coordinated samples across all product lines, implemented category-specific QC protocols, and consolidated shipping to reduce logistics costs.',
    results: ['200+ SKUs sourced from 12 verified suppliers', 'Consolidated shipping saved 25% on freight', 'Quality consistency maintained across all categories', 'Single point of contact for all China operations'],
    imgId: 'cs-canada-distributor',
    titleId: 'cs-canada-distributor-title',
    descId: 'cs-canada-distributor-desc',
    resultIcon: Globe,
    resultText: '200+ SKUs Managed',
  },
  {
    title: 'Middle East Construction Firm Sources Building Materials',
    industry: 'Building & Construction',
    client: 'UAE Construction Company',
    challenge: 'A UAE construction firm needed reliable Chinese suppliers for large-volume building materials — tiles, sanitary ware, aluminum profiles, and glass panels — for a major commercial project with strict quality and timeline requirements.',
    solution: 'We identified manufacturers with the capacity for large-volume orders, conducted factory audits focusing on production capacity and quality management, implemented rigorous QC processes, and coordinated sea freight with proper packaging to prevent damage.',
    results: ['$3.5M order successfully delivered', 'Zero damage claims on arrival', 'Quality met European EN standards', 'Project completed on schedule'],
    imgId: 'cs-uae-construction',
    titleId: 'cs-uae-construction-title',
    descId: 'cs-uae-construction-desc',
    resultIcon: Users,
    resultText: '$3.5M Project Delivered',
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
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Success Stories</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">Case Studies</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Real examples of how we have helped businesses worldwide source products from China more efficiently and cost-effectively.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const ResultIcon = study.resultIcon
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className={`rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}] case study success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-brand-orange bg-orange-50 px-3 py-1 rounded-full">{study.industry}</span>
                      <span className="text-xs text-gray-500">{study.client}</span>
                    </div>
                    <h2 id={study.titleId} className="text-2xl font-bold text-brand-navy mb-4">{study.title}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Challenge</h3>
                        <p id={study.descId} className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Our Solution</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Results</h3>
                      <ul className="space-y-2 mb-4">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                            <span className="text-sm text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2">
                        <ResultIcon className="h-4 w-4" />
                        <span>{study.resultText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-slate">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your sourcing needs and discover how we can help your business grow.
          </p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8">
            <Link to="/contact">Start Your Sourcing Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
