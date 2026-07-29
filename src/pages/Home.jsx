import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: 'Product Sourcing',
      desc: 'Finding reliable suppliers that match your quality and price requirements.',
      icon: <Search className="w-8 h-8 text-[#FF6B00]" />,
      imgId: 'service-sourcing-home'
    },
    {
      title: 'Supplier Verification',
      desc: 'Expert factory audits to ensure legal compliance and production capability.',
      icon: <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />,
      imgId: 'service-verify-home'
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment inspections to verify quality, quantity, and packaging.',
      icon: <ClipboardCheck className="w-8 h-8 text-[#FF6B00]" />,
      imgId: 'service-qc-home'
    },
    {
      title: 'Shipping & Logistics',
      desc: 'Coordinating sea, air, and rail freight to your doorstep.',
      icon: <Truck className="w-8 h-8 text-[#FF6B00]" />,
      imgId: 'service-shipping-home'
    }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#002D62] text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="hero-bg-999"
          data-strk-bg="China sourcing hero background factory shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Your Professional China Sourcing Agent for Global Success
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-200 mb-10 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Minimize risks and maximize profits in China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">Get a Free Sourcing Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#002D62] mb-2">10+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#002D62] mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#002D62] mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#002D62] mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Sourcing Solutions</h2>
            <p id="services-subtitle" className="text-gray-600 text-lg">
              Tailored services to handle every aspect of your procurement journey in China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 bg-white">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 id={`service-title-${index}`} className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <div className="rounded-lg overflow-hidden mb-4 h-32 bg-gray-100">
                   <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${index}] China sourcing service`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link to="/services" className="text-[#FF6B00] font-semibold flex items-center gap-2 text-sm hover:underline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#002D62]">Why overseas buyers choose SSourcing China?</h2>
              <div className="space-y-6">
                {[
                  { title: "Avoid Scams", desc: "We verify company registrations and bank accounts before you send money." },
                  { title: "Control Quality", desc: "Our local inspectors find defects before goods leave the factory floor." },
                  { title: "No Language Barrier", desc: "Fluent bilingual agents handle all nuances of negotiation and technical specs." },
                  { title: "Better Pricing", desc: "We use our local knowledge and network to negotiate better terms than direct inquiries." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-green-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  data-strk-img-id="qc-verification-photo"
                  data-strk-img="China factory quality inspection quality verification"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="QC Inspection"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#002D62] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to streamline your China sourcing?</h2>
          <Link to="/contact">
            <Button size="lg" className="bg-[#FF6B00] text-white hover:bg-orange-600 px-12 py-4 h-auto text-xl">
              Get Your Free Sourcing Quote Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
