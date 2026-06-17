import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Truck, Search, PhoneCall, ChevronRight } from 'lucide-react'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title] modern port shipping container logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for <span className="text-amber-500">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              From finding reliable suppliers to quality control and shipping. We handle the complexity of sourcing in China so you can grow your business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                View Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span>Pre-shipment QC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span>On-site Audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Problem Solved Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Businesses Trust SSourcing China</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              We eliminate the common risks associated with overseas manufacturing through localized expertise and rigorous processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Supplier Verification</h3>
              <p className="text-slate-600 leading-relaxed">
                Avoid trading companies posing as factories. We verify licenses, financial health, and true manufacturing capabilities on-site.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Control</h3>
              <p className="text-slate-600 leading-relaxed">
                Don't wait until the goods arrive. Our inspectors conduct pre-production, during-production, and pre-shipment inspections.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Shipping & Logistics</h3>
              <p className="text-slate-600 leading-relaxed">
                We consolidate samples, negotiate freight rates, and manage export documentation to ensure your goods reach you on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
              <p className="text-lg text-slate-600">Tailored to your business needs, from startups to enterprise-level procurement.</p>
            </div>
            <Link to="/services" className="text-amber-600 font-semibold inline-flex items-center hover:text-amber-700">
              View All Services <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 's1', title: 'Product Sourcing', desc: 'Finding the right manufacturer at the best price.', img: 'industrial manufacturing supplier search' },
              { id: 's2', title: 'Factory Audits', desc: 'Verifying manufacturing standards and ethics.', img: 'factory inspection auditing production line' },
              { id: 's3', title: 'QC Inspection', desc: 'Rigorous checks to ensure product perfection.', img: 'quality control product testing electronics textile' },
              { id: 's4', title: 'Sample Consolidation', desc: 'Saving you shipping costs on initial prototypes.', img: 'shipping boxes parcels sample collection' },
            ].map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`service-${service.id}`}
                    data-strk-img={service.img}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">A clear, documented process to ensure sourcing success.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-100" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Inquiry', icon: Search, desc: 'Submit your requirements.' },
                { step: '02', title: 'Sourcing', icon: Factory, desc: 'Suppliers identified & quoted.' },
                { step: '03', title: 'Sampling', icon: CheckCircle2, desc: 'Prototypes built & tested.' },
                { step: '04', title: 'Production', icon: ShieldCheck, desc: 'Quality closely monitored.' },
                { step: '05', title: 'Shipping', icon: Truck, desc: 'Final QC & delivery.' },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white border-2 border-amber-500 text-amber-600 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply opacity-30 blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl text-slate-800 mb-10 font-medium">Get a detailed quote and supplier analysis for your project today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-slate-900 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl"
            >
              Get My Free Quote
            </Link>
            <a 
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              <PhoneCall className="h-5 w-5" />
              Call us +86 138-0000-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
