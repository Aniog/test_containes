import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ThumbsUp, TrendingUp, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/home/SectionHeader'

const caseStudies = [
  {
    id: 'electronics-pcb',
    title: 'Electronics Manufacturer Saves 22% on PCB Assembly',
    client: 'German Electronics Brand',
    industry: 'Electronics',
    challenge: 'A German electronics company was struggling with inconsistent quality from their existing PCB assembly supplier. Defect rates were at 3.2%, causing production delays and customer returns. They needed a reliable supplier who could deliver consistent quality at competitive pricing.',
    solution: 'We vetted 8 PCB assembly factories across Shenzhen and Dongguan, conducting on-site audits of their SMT lines, quality systems, and testing capabilities. We shortlisted 3 factories, negotiated pricing, and set up a QC protocol with inline and pre-shipment inspections.',
    result: '22% cost reduction on PCB assembly. Defect rate dropped from 3.2% to 0.4%. On-time delivery rate improved to 98%. The client has since expanded to 3 additional product lines with the same supplier.',
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingUp },
      { label: 'Defect Rate', value: '0.4%', icon: ShieldCheck },
      { label: 'On-Time Delivery', value: '98%', icon: Clock },
    ],
    imgId: 'cs-electronics-detail-1',
  },
  {
    id: 'furniture-scale',
    title: 'US Furniture Brand Scales Production 3x While Maintaining Quality',
    client: 'US Furniture Brand',
    industry: 'Furniture',
    challenge: 'A fast-growing US furniture brand was maxed out with their single supplier. They needed to scale production 3x within 6 months to meet retail demand, but were concerned about quality consistency across additional factories.',
    solution: 'We identified 3 additional factories with complementary capabilities, conducted comprehensive audits, and set up a unified quality control system across all suppliers. We implemented weekly production monitoring and coordinated consolidated shipping.',
    result: 'Production scaled 3x within 5 months. 99.2% QC pass rate across all suppliers. Shipping costs reduced by 18% through consolidation. The client successfully launched in 200 new retail locations.',
    metrics: [
      { label: 'Production Scale', value: '3x', icon: TrendingUp },
      { label: 'QC Pass Rate', value: '99.2%', icon: ShieldCheck },
      { label: 'Shipping Savings', value: '18%', icon: TrendingUp },
    ],
    imgId: 'cs-furniture-detail-2',
  },
  {
    id: 'kitchenware-launch',
    title: 'UK Retailer Launches 15-SKU Private Label Kitchenware Line',
    client: 'UK Retail Chain',
    industry: 'Kitchenware',
    challenge: 'A UK retailer wanted to launch a private label kitchenware line with 15 SKUs across stainless steel, silicone, and bamboo categories. They had no prior experience sourcing from China and needed end-to-end support from supplier selection to delivery.',
    solution: 'We sourced 5 specialized suppliers for different product categories, managed the sampling process across 45+ iterations, negotiated pricing 30% below their initial budget, and implemented stage-by-stage quality inspections.',
    result: 'All 15 SKUs launched on schedule. 98% first-article QC pass rate. Product cost 30% below initial budget. The line became the retailer\'s fastest-growing private label category.',
    metrics: [
      { label: 'SKUs Launched', value: '15', icon: TrendingUp },
      { label: 'QC Pass Rate', value: '98%', icon: ShieldCheck },
      { label: 'Cost Below Budget', value: '30%', icon: TrendingUp },
    ],
    imgId: 'cs-kitchenware-detail-3',
  },
  {
    id: 'industrial-parts',
    title: 'Australian Manufacturer Cuts Lead Times by 40% on Custom Parts',
    client: 'Australian Industrial Manufacturer',
    industry: 'Industrial Machinery',
    challenge: 'An Australian manufacturer of industrial equipment was facing 16-week lead times on custom machined components from their European supplier. They needed to find a faster, more cost-effective alternative without compromising on precision tolerances.',
    solution: 'We identified 4 CNC machining and metal fabrication factories in southern China with the required precision capabilities. We verified their equipment (5-axis CNC, CMM inspection), ran test orders, and set up a streamlined production and logistics process.',
    result: 'Lead times reduced from 16 weeks to 9.5 weeks (40% reduction). Unit cost reduced by 35%. Precision tolerances maintained at ±0.01mm. The client now sources 60% of their custom parts through this supply chain.',
    metrics: [
      { label: 'Lead Time Reduction', value: '40%', icon: Clock },
      { label: 'Cost Reduction', value: '35%', icon: TrendingUp },
      { label: 'Precision', value: '±0.01mm', icon: ShieldCheck },
    ],
    imgId: 'cs-industrial-detail-4',
  },
  {
    id: 'packaging-solution',
    title: 'European Cosmetics Brand Finds Sustainable Packaging Supplier',
    client: 'European Cosmetics Brand',
    industry: 'Packaging',
    challenge: 'A European cosmetics brand wanted to switch to sustainable packaging (bamboo, recycled glass, biodegradable plastics) but couldn\'t find suppliers in Europe that met their price points. They needed China-based suppliers with strong sustainability credentials.',
    solution: 'We identified 6 suppliers specializing in sustainable packaging materials, verified their certifications (FSC, GRS, ISO 14001), audited their facilities for environmental compliance, and coordinated sample development across multiple materials.',
    result: 'Found 2 qualified suppliers with competitive pricing. 40% cost savings vs. European alternatives. All packaging achieved the brand\'s sustainability certification requirements. Launched in 12 markets.',
    metrics: [
      { label: 'Cost Savings', value: '40%', icon: TrendingUp },
      { label: 'Suppliers Qualified', value: '2', icon: ShieldCheck },
      { label: 'Markets Launched', value: '12', icon: TrendingUp },
    ],
    imgId: 'cs-packaging-detail-5',
  },
  {
    id: 'sports-equipment',
    title: 'Canadian Sports Brand Achieves 99.5% QC Pass Rate on Complex Products',
    client: 'Canadian Sports Equipment Brand',
    industry: 'Sports Equipment',
    challenge: 'A Canadian sports brand was experiencing 12% defect rates on their composite material products (carbon fiber, fiberglass). The products required precise manufacturing and thorough testing. Previous suppliers couldn\'t maintain consistent quality.',
    solution: 'We found 3 specialized composite manufacturers, conducted detailed capability assessments including material testing, set up a rigorous multi-stage QC process (material inspection, in-process, finished product testing), and provided weekly production reports.',
    result: 'Defect rate reduced from 12% to 0.5%. Production efficiency improved by 25%. The client expanded their product line by 8 new SKUs with the same supplier. Annual savings of $180,000 in quality-related costs.',
    metrics: [
      { label: 'Defect Rate', value: '0.5%', icon: ShieldCheck },
      { label: 'Efficiency Gain', value: '25%', icon: TrendingUp },
      { label: 'Annual Savings', value: '$180K', icon: TrendingUp },
    ],
    imgId: 'cs-sports-detail-6',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">CASE STUDIES</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Real Results from Real Clients</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            See how we've helped businesses across industries source smarter, reduce costs, and build reliable supply chains in China.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <span className="inline-block bg-accent-50 text-accent-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {cs.industry}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3">{cs.title}</h2>
                  <p className="text-sm text-slate-500 mb-4 font-medium">{cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1">Challenge</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1">Solution</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1">Result</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, j) => (
                      <div key={j} className="bg-brand-50 rounded-lg p-3 text-center">
                        <m.icon className="w-4 h-4 text-brand-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-brand-900">{m.value}</div>
                        <div className="text-xs text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden shadow-lg">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[cs-detail-${cs.id}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="hidden">
                    <span id={`cs-detail-${cs.id}-title`}>{cs.title} {cs.industry} {cs.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to write your own success story?</h2>
          <p className="text-slate-200 mb-8">Tell us about your sourcing needs and we'll show you how we can help.</p>
          <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}