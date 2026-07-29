import React, { useEffect, useRef } from 'react';
import { Search, Factory, CheckSquare, Truck, ClipboardList, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: "product-sourcing",
      title: "Product Sourcing & Supplier Search",
      desc: "Not all suppliers on Alibaba are factories. We filter out middlemen and find direct manufacturers that meet your specific quality standards and pricing requirements.",
      img: "Warehouse search",
      icon: Search
    },
    {
      id: "factory-audit",
      title: "Factory Audits & Verification",
      desc: "We physically visit the factory to check their business licenses, production machinery, staff certifications, and manufacturing processes. Don't send money to a ghost factory.",
      img: "Factory interior",
      icon: ClipboardList
    },
    {
      id: "quality-inspection",
      title: "Quality Control Inspections (QC)",
      desc: "Our trained inspectors perform Initial Production, During Production, and Pre-Shipment inspections using international AQL standards to ensure your goods meet your quality expectations.",
      img: "Quality inspection check",
      icon: CheckSquare
    },
    {
      id: "production-monitoring",
      title: "Production Monitoring",
      desc: "We stay on-site during production to ensure they use the correct materials and follow your specified timeline, preventing delays and material substitution before they happen.",
      img: "Production line",
      icon: ShieldAlert
    },
    {
      id: "shipping-logistics",
      title: "Shipping & Logistics Coordination",
      desc: "We manage the consolidation of goods from multiple suppliers and handle the entire export process, from documentation and customs to sea freight or courier delivery.",
      img: "Cargo containers",
      icon: Truck
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight uppercase tracking-wider">Our Professional Sourcing Services</h1>
          <p id="services-hero-subtitle" className="text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
            A comprehensive suite of services designed to protect your investments and streamline your global supply chain in China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {services.map((item, idx) => (
            <div key={item.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="lg:w-1/2 w-full">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-muted relative border border-slate-100"
                >
                  <img 
                    data-strk-img-id={`service-img-${item.id}`}
                    data-strk-img={`[${item.id}-title] [${item.id}-desc]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="800"
                    alt={item.title}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                  />
                  <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex p-4 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                  <item.icon className="w-10 h-10" />
                </div>
                <h2 id={`${item.id}-title`} className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight">{item.title}</h2>
                <p id={`${item.id}-desc`} className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                <div className="pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-bold px-8 shadow-lg">
                    <Link to="/contact">Interested in this service?</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-secondary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">Ready to find your next top-tier supplier?</h2>
          <Button asChild variant="outline" size="lg" className="bg-white text-secondary border-white hover:bg-slate-100 font-bold px-12 py-8 text-xl shadow-xl border-none">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
