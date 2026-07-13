import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</span>
            <h1 id="cases-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">Real Results for Real Businesses</h1>
            <p id="cases-page-subtitle" className="text-lg text-slate-300 leading-relaxed">See how we have helped buyers from around the world source products from China successfully, with measurable results.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Case 1 */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img data-strk-img-id="case-elec-img-r1s2t3" data-strk-img="[case-elec-desc] [case-elec-title] [cases-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Electronics Accessories for US E-commerce Brand" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-orange bg-orange/10 px-2.5 py-1 rounded">Electronics</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3 h-3" /> United States</span>
                  </div>
                  <h2 id="case-elec-title" className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Electronics Accessories for US E-commerce Brand</h2>
                  <p id="case-elec-desc" className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Challenge:</strong> A US-based Amazon seller needed to switch suppliers after quality issues with their phone case manufacturer. They needed a reliable factory that could produce 20,000 units/month with consistent quality.</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Solution:</strong> We audited 8 factories in Shenzhen, shortlisted 3, and arranged sample production. After testing, we selected a factory with ISO 9001 certification and conducted monthly QC inspections.</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-800 mb-2">Results:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />32% cost reduction vs previous supplier</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Defect rate dropped from 5% to 0.3%</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />On-time delivery rate improved to 98%</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Scaled to 50,000 units/month within 6 months</li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-navy">32%</span>
                    <span className="text-sm text-slate-600">Cost Savings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:order-2">
                  <img data-strk-img-id="case-text-img-u4v5w6" data-strk-img="[case-text-desc] [case-text-title] [cases-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Home Textiles for German Retailer" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="p-8 md:p-10 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-orange bg-orange/10 px-2.5 py-1 rounded">Textiles</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3 h-3" /> Germany</span>
                  </div>
                  <h2 id="case-text-title" className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Home Textiles for German Retailer</h2>
                  <p id="case-text-desc" className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Challenge:</strong> A German home goods retailer needed a supplier for organic cotton bedding sets that met EU OEKO-TEX standards. Previous attempts through Alibaba resulted in non-compliant products.</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Solution:</strong> We identified certified factories in Nantong, verified OEKO-TEX certifications on-site, and managed the entire sampling and production process.</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-800 mb-2">Results:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />100% OEKO-TEX compliance achieved</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Defect rate reduced from 8% to 0.5%</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />15% below target price point</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Successful ongoing partnership for 2+ years</li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-navy">0.5%</span>
                    <span className="text-sm text-slate-600">Defect Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img data-strk-img-id="case-pack-img-x7y8z9" data-strk-img="[case-pack-desc] [case-pack-title] [cases-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Custom Packaging for Australian Food Brand" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-orange bg-orange/10 px-2.5 py-1 rounded">Packaging</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3 h-3" /> Australia</span>
                  </div>
                  <h2 id="case-pack-title" className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Custom Packaging for Australian Food Brand</h2>
                  <p id="case-pack-desc" className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Challenge:</strong> An Australian organic food company needed food-grade custom packaging with specific printing requirements. They had a tight deadline of 3 weeks for a product launch.</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Solution:</strong> We fast-tracked supplier selection, negotiated rush production terms, and stationed our QC team at the factory during the entire production run to ensure quality and timeline.</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-800 mb-2">Results:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />50,000 units delivered in 3 weeks</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />All food-grade certifications met</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />22% cost savings vs local Australian suppliers</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Zero defects in final delivery</li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-navy">3 weeks</span>
                    <span className="text-sm text-slate-600">Delivery Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:order-2">
                  <img data-strk-img-id="case-furn-img-a1b2c3" data-strk-img="[case-furn-desc] [case-furn-title] [cases-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Office Furniture for UK Distributor" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="p-8 md:p-10 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-orange bg-orange/10 px-2.5 py-1 rounded">Furniture</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3 h-3" /> United Kingdom</span>
                  </div>
                  <h2 id="case-furn-title" className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Office Furniture for UK Distributor</h2>
                  <p id="case-furn-desc" className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Challenge:</strong> A UK office furniture distributor wanted to source ergonomic chairs directly from China but was concerned about quality consistency across large orders (2,000+ units).</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-800">Solution:</strong> We conducted factory audits in Foshan, set up a quality control protocol with specific checkpoints, and managed container loading inspections for every shipment.</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-800 mb-2">Results:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />40% margin improvement vs European suppliers</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Consistent quality across 5 shipments</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Custom branding and packaging implemented</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Expanded product line to 12 SKUs</li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-navy">40%</span>
                    <span className="text-sm text-slate-600">Margin Improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Want Similar Results?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Tell us about your sourcing needs and let us show you what we can do.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
