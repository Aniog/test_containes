import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Factory, PackageSearch, ShieldCheck, Ship } from 'lucide-react'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-98a72b"
          data-strk-bg="[hero-title] [hero-subtitle] factory shipping container port"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 py-24">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping from China. Your trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg py-6" asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-slate-900 bg-white hover:bg-slate-100 text-lg py-6" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-slate-100 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm font-medium text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm font-medium text-slate-600">Verified Factories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm font-medium text-slate-600">Successful Shipments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problems-title" className="text-3xl font-bold mb-4">Sourcing from China Doesn't Have to Be Hard</h2>
            <p className="text-slate-600 text-lg">We eliminate the common risks and frustrations of international procurement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border shadow-sm drop-shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Avoid Scams</h3>
              <p className="text-slate-600">We physically verify factories and business licenses to ensure you are dealing with legitimate manufacturers, not trading companies pretending to be factories.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm drop-shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ensure Quality</h3>
              <p className="text-slate-600">Our inspectors check goods before they leave China. We catch defects early, preventing expensive returns and dissatisfied customers back home.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm drop-shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smooth Shipping</h3>
              <p className="text-slate-600">We consolidate shipments from multiple suppliers and handle all export paperwork, finding you the most cost-effective freight rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 id="services-title" className="text-3xl font-bold mb-4">End-to-End Sourcing Services</h2>
              <p className="text-slate-600 text-lg">From finding the right factory to delivering goods to your warehouse, we handle everything.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                id: 'supplier-sourcing',
                title: 'Supplier Sourcing & Verification',
                desc: 'We identify qualified manufacturers, negotiate prices, and conduct background checks to ensure legitimacy and capability.',
                icon: Factory
              },
              {
                id: 'sample-development',
                title: 'Sample Development',
                desc: 'We coordinate with factories to create prototypes, ensuring specifications meet your exact requirements before bulk production.',
                icon: PackageSearch
              },
              {
                id: 'quality-inspection',
                title: 'Quality Inspection',
                desc: 'We perform pre-shipment inspections (PSI) and during-production checks (DUPRO) based on AQL standards.',
                icon: ShieldCheck
              },
              {
                id: 'shipping-logistics',
                title: 'Shipping & Logistics',
                desc: 'We provide competitive freight quotes, consolidate goods from various suppliers, and manage customs clearance.',
                icon: Ship
              }
            ].map((service) => (
              <div key={service.id} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <service.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 id={`service-title-${service.id}`} className="text-xl font-bold mb-2">{service.title}</h3>
                  <p id={`service-desc-${service.id}`} className="text-slate-600 mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-blue-100 text-xl mb-10">Tell us what you're looking for, and we'll provide a customized sourcing plan and quote.</p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg py-6 px-10" asChild>
            <Link to="/contact">Get Your Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
