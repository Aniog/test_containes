import { ShieldCheck, Search, Box, Plane, Factory, FileSignature, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        try {
            if (strkImgConfig) {
                return ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        } catch (e) {
            console.log('ImageHelper config not found yet');
        }
    }, []);

  const services = [
    {
      id: "supplier-sourcing",
      icon: Search,
      title: "Supplier Sourcing",
      description: "We don't just use Alibaba. We leverage our local networks to find direct manufacturers that meet your specific requirements for price, quality, and production capacity.",
      benefits: ["Direct factory pricing (no middlemen)", "Evaluation of production capabilities", "Detailed supplier profiles and comparisons", "Sample consolidation and forwarding"]
    },
    {
      id: "factory-audit",
      icon: Factory,
      title: "Factory Verification & Audit",
      description: "Never wire money to an unverified supplier. Our on-the-ground team visits factories in person to ensure they are legitimate, capable, and ethical.",
      benefits: ["Business license & registration checks", "On-site facility inspections", "Production line assessment", "Social compliance audits (optional)"]
    },
    {
      id: "product-development",
      icon: FileSignature,
      title: "Sample & Product Development",
      description: "Turn your ideas into reality. We work closely with engineers and factories to develop prototypes, customize packaging, and ensure specifications are clearly understood.",
      benefits: ["OEM/ODM project management", "Mold and tooling negotiations", "Packaging customization", "English/Chinese specification translation"]
    },
    {
      id: "quality-control",
      icon: Box,
      title: "Quality Control & Inspections",
      description: "Identify defects before your goods leave China. We perform comprehensive quality inspections based on strict AQL standards.",
      benefits: ["Pre-production inspections (PPI)", "During production inspections (DUPRO)", "Pre-shipment inspections (PSI)", "Container loading supervision (CLS)"]
    },
    {
      id: "logistics",
      icon: Plane,
      title: "Logistics & Shipping",
      description: "Seamless door-to-door delivery. We coordinate with freight forwarders to ensure your goods are shipped efficiently via air, sea, or rail.",
      benefits: ["Freight rate negotiation", "Customs clearance documentation", "Amazon FBA prep and routing", "Consolidation of multiple orders"]
    }
  ];

  return (
    <div ref={containerRef} className="pb-20">
      
      {/* Page Header */}
      <div className="bg-secondary py-16 text-white relative overflow-hidden">
        <div 
            className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
            data-strk-bg-id="services-header-bg"
            data-strk-bg="[page-title] logistics factory warehouse china"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300">Comprehensive, on-the-ground support to manage every step of your China supply chain.</p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-md">
                    <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`service-detail-img-${service.id}`}
                        data-strk-img={`[service-title-${service.id}] factory b2b sourcing ${service.title}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                    />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-secondary mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="container mx-auto px-4 mt-24 text-center border-t border-slate-200 pt-16">
        <h2 className="text-3xl font-bold mb-6">Not sure which services you need?</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Contact us for a free consultation. We can tailor a sourcing package specific to your business requirements.</p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
            <Link to="/contact">Get a Free Consultation</Link>
        </Button>
      </div>

    </div>
  );
};

export default Services;