import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Search, ShieldCheck, TrendingUp, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] flex items-center pt-20 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-9922aa"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Save time, reduce risk, and cut costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-12 px-8 text-base">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-full sm:w-auto h-12 px-8 text-base">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
              <div className="font-semibold text-slate-900 text-lg">100% Verified</div>
              <div className="text-sm text-slate-500">Factory direct suppliers</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-8 w-8 text-blue-600 mb-3" />
              <div className="font-semibold text-slate-900 text-lg">Quality Guaranteed</div>
              <div className="text-sm text-slate-500">Strict QC inspections</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
              <div className="font-semibold text-slate-900 text-lg">Cost Effective</div>
              <div className="text-sm text-slate-500">Negotiated factory pricing</div>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-8 w-8 text-blue-600 mb-3" />
              <div className="font-semibold text-slate-900 text-lg">Door to Door</div>
              <div className="text-sm text-slate-500">Global shipping & logistics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problems-title" className="text-3xl font-bold text-slate-900 mb-4">Common Sourcing Problems We Solve</h2>
            <p id="problems-subtitle" className="text-slate-600 text-lg">Sourcing from China can be challenging. We act as your boots on the ground to mitigate risks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Language & Culture Barrier</h3>
              <p className="text-slate-600 leading-relaxed">
                Miscommunication leads to costly mistakes. Our bilingual team ensures your specifications are exactly understood and followed by the factory.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Supplier Scams</h3>
              <p className="text-slate-600 leading-relaxed">
                Trading companies posing as factories or outright scams. We perform on-site audits to verify factory legitimacy, capacity, and credentials.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Poor Quality Control</h3>
              <p className="text-slate-600 leading-relaxed">
                Receiving defective goods is a nightmare. Our QC team inspects products before they leave the factory to ensure they meet your standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
              <p id="services-subtitle" className="text-slate-600 text-lg">End-to-end support for your supply chain.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-700">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id="service-verification-c3a1b"
                  data-strk-img="[srv-verify-desc] [srv-verify-title] [services-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Supplier Verification"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 id="srv-verify-title" className="text-2xl font-bold text-slate-900 mb-3">Supplier Verification</h3>
                <p id="srv-verify-desc" className="text-slate-600 mb-6 line-clamp-2">
                  We audit factories on-site, check business licenses, review production lines, and ensure they have the real capability to produce your orders.
                </p>
                <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id="service-qc-d4b2c"
                  data-strk-img="[srv-qc-desc] [srv-qc-title] [services-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 id="srv-qc-title" className="text-2xl font-bold text-slate-900 mb-3">Quality Control (QC)</h3>
                <p id="srv-qc-desc" className="text-slate-600 mb-6 line-clamp-2">
                  Pre-shipment inspections based on AQL standards. We check product appearance, functionality, packaging, and provide detailed reports.
                </p>
                <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to source safely and securely?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your sourcing needs. We offer customizable solutions whether you need a quick factory audit or full supply chain management.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 h-14 px-8 text-lg font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
