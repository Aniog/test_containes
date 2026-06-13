import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Search, Box, Plane, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if strkImgConfig exists, otherwise swallow error gracefully
    try {
      if (strkImgConfig) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper config not found yet');
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] shipping port factory cargo"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping—acting as your dedicated team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 bg-transparent">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Verified Suppliers Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>100% Quality Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>End-to-end Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problems-title" className="text-3xl font-bold text-secondary mb-4">Sourcing from China shouldn't be a gamble.</h2>
            <p className="text-lg text-slate-600">Language barriers, poor quality control, and unreliable suppliers can cost you time and money. We eliminate these risks.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Avoid Scams & Middlemen", desc: "We verify factories in person to ensure you're dealing with direct manufacturers, not trading companies pretending to be factories." },
              { title: "Ensure Consistent Quality", desc: "Our on-the-ground QC team inspects your products before they leave China, preventing defective goods from reaching your customers." },
              { title: "Streamline Communication", desc: "We bridge the cultural and language gap, ensuring your specifications are understood exactly as intended by the factory." }
            ].map((problem, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-6">
                  <X className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600">Everything you need to successfully import from China, managed by professionals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Supplier Sourcing", desc: "Finding the right factory with the best balance of price, quality, and reliability." },
              { icon: ShieldCheck, title: "Factory Audit", desc: "On-site verification of business licenses, production capacity, and working conditions." },
              { icon: Box, title: "Quality Control", desc: "Pre-shipment inspections and detailed reports to guarantee product standards." },
              { icon: Plane, title: "Logistics & Shipping", desc: "Coordinating freight forwarding, customs clearance, and delivery to your door." }
            ].map((service, i) => (
               <div key={i} className="group hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 w-full bg-slate-100 rounded-t-xl overflow-hidden relative">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={`home-service-img-${i}`}
                      data-strk-img={`[service-title-${i}] ${service.title} factory china business b2b`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                    />
                  </div>
                  <div className="p-6 border border-t-0 border-slate-100 rounded-b-xl">
                    <service.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 id={`service-title-${i}`} className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4 h-20">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
               </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100 font-medium">Factories Audited</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-primary-100 font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-primary-100 font-medium">Goods Inspected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-white rounded-2xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
             <div 
                className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
                data-strk-bg-id="home-cta-bg"
                data-strk-bg="manufacturing modern warehouse"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
              ></div>
             <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your China supply chain?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote for your sourcing needs. Tell us what you're looking for, and our experts will get back to you within 24 hours.</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

// Need to import X here
import { X } from 'lucide-react';

export default Home;