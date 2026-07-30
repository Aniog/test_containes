import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingDown, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import CTASection from '@/components/CTASection'

const caseStudies = [
  {
    id: 'case-led',
    title: 'LED Lighting for US Distributor',
    client: 'LightPro Distribution, USA',
    industry: 'Electronics',
    challenge: 'Client needed a reliable LED panel manufacturer with UL certification and consistent color temperature across large batches.',
    solution: 'We audited 8 factories in Zhongshan, shortlisted 3 with valid UL certifications, coordinated samples, and negotiated a 15% volume discount.',
    results: ['22% cost reduction vs. previous supplier', 'Zero defects across 50,000 units', 'On-time delivery for 6 consecutive orders', 'UL-certified production maintained'],
    imgId: 'case-led-img-a1b2c3',
    stat: { icon: TrendingDown, value: '22%', label: 'Cost Reduction' },
  },
  {
    id: 'case-furniture',
    title: 'Custom Office Furniture for European Chain',
    client: 'Nordic Office Solutions, Sweden',
    industry: 'Furniture',
    challenge: 'Client required custom-designed office desks meeting EU safety standards with specific sustainable wood certifications (FSC).',
    solution: 'We identified FSC-certified manufacturers in Foshan, managed custom design iterations, and conducted 3 rounds of quality inspections.',
    results: ['First container delivered in 45 days', 'FSC certification verified on-site', '30% savings vs. European manufacturing', 'Ongoing monthly orders established'],
    imgId: 'case-furniture-img-d4e5f6',
    stat: { icon: Clock, value: '45 days', label: 'First Delivery' },
  },
  {
    id: 'case-packaging',
    title: 'Sustainable Packaging for Australian Brand',
    client: 'GreenBox Co., Australia',
    industry: 'Packaging',
    challenge: 'Client needed biodegradable food packaging that met Australian food safety standards at a competitive price point.',
    solution: 'We sourced from 5 eco-packaging specialists in Dongguan, verified food-grade certifications, and arranged third-party lab testing.',
    results: ['30% cost savings vs. local suppliers', 'All food safety certifications passed', 'Biodegradable material verified by lab', 'Scalable supply for seasonal demand'],
    imgId: 'case-packaging-img-g7h8i9',
    stat: { icon: TrendingDown, value: '30%', label: 'Cost Savings' },
  },
  {
    id: 'case-textiles',
    title: 'Activewear Line for UK Brand',
    client: 'FitWear London, UK',
    industry: 'Textiles',
    challenge: 'Startup brand needed a manufacturer capable of small MOQ (500 pcs/style) with high-quality moisture-wicking fabrics and custom branding.',
    solution: 'We found a Guangzhou factory specializing in small-batch activewear, negotiated favorable MOQ terms, and managed 2 sample rounds.',
    results: ['MOQ reduced from 3,000 to 500 pcs', 'Fabric quality matched premium brands', 'Full branding package included', 'Reorder placed within 60 days'],
    imgId: 'case-textiles-img-j1k2l3',
    stat: { icon: ShieldCheck, value: '500', label: 'Min. MOQ Achieved' },
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Real Results from Real Projects
            </h1>
            <p id="cases-page-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we have helped businesses worldwide source products from China successfully, reducing costs and ensuring quality.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.id}-challenge] [${cs.id}-title] [cases-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 md:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-navy bg-navy/10 px-2 py-1 rounded-full">{cs.industry}</span>
                      <span className="text-xs text-slate-500">{cs.client}</span>
                    </div>
                    <h2 id={`${cs.id}-title`} className="text-2xl font-bold text-slate-900 mb-4">{cs.title}</h2>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                      <p id={`${cs.id}-challenge`} className="text-slate-600 text-sm">{cs.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                      <p className="text-slate-600 text-sm">{cs.solution}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-slate-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                      <cs.stat.icon className="w-5 h-5 text-navy" />
                      <span className="text-xl font-bold text-slate-900">{cs.stat.value}</span>
                      <span className="text-sm text-slate-600">{cs.stat.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
