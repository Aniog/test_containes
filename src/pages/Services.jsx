import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Search, ShieldCheck, CheckCircle2, Factory, Truck, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useImageLoader();
  const services = [
    {
      title: "Product Sourcing",
      icon: Search,
      desc: "Our deep knowledge of China's industrial clusters allows us to find the most competitive manufacturers for your products. We don't just search Alibaba; we tap into our local network of direct factories.",
      features: [
        "Direct factory sourcing (no middleman)",
        "Comprehensive price comparisons",
        "Detailed supplier background checks",
        "Sample collection and consolidation"
      ],
      imgId: "service-sourcing-1"
    },
    {
      title: "Supplier Verification & Audit",
      icon: ShieldCheck,
      desc: "Avoid scams and unreliable suppliers. We conduct on-site factory audits to verify their business licenses, manufacturing capacity, quality management systems, and ethical standards.",
      features: [
        "On-site factory inspections",
        "Legal document verification",
        "Capacity and machinery check",
        "Social compliance audits (BSCI, SEDEX)"
      ],
      imgId: "service-audit-1"
    },
    {
      title: "Quality Control (QC)",
      icon: CheckCircle2,
      desc: "Ensuring your products meet your specifications is our top priority. We use international standard AQL protocols to perform rigorous quality inspections throughout the production cycle.",
      features: [
        "Pre-production inspection (PPI)",
        "During production inspection (DUPRO)",
        "Pre-shipment inspection (PSI)",
        "Defect sorting and reporting"
      ],
      imgId: "service-qc-1"
    },
    {
      title: "Production Monitoring",
      icon: Factory,
      desc: "Stay updated without being there. We move into the factory during production to ensure your timeline is met and any issues are resolved immediately before they become costly delays.",
      features: [
        "Daily production reporting",
        "Schedule bottleneck identification",
        "Technical spec communication",
        "Video updates from assembly lines"
      ],
      imgId: "service-production-1"
    },
    {
      title: "Shipping & Logistics",
      icon: Truck,
      desc: "Getting your goods from China to your warehouse efficiently. We handle container loading, customs clearance documentation, and coordinate with reliable freight forwarders.",
      features: [
        "Container loading supervision",
        "Documentation and HS code audit",
        "LCL/FCL shipping coordination",
        "Amazon FBA logistics expertise"
      ],
      imgId: "service-shipping-1"
    },
    {
      title: "Price & Terms Negotiation",
      icon: BarChart3,
      desc: "Leveraging our local team and language advantage, we negotiate better prices, payment terms, and lead times than overseas buyers can achieve independently.",
      features: [
        "Cost breakdown analysis",
        "Payment term negotiation (Net terms)",
        "Lead time optimization",
        "Contract drafting and enforcement"
      ],
      imgId: "service-negotiation-1"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end supply chain management tailored to your business needs, ensuring quality, transparency, and efficiency.
          </p>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid gap-24">
            {services.map((service, idx) => (
              <div key={idx} className={cn(
                "grid lg:grid-cols-2 gap-16 items-center",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-flex p-3 bg-secondary/10 rounded-xl text-secondary mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-3 text-slate-800 font-medium">
                        <CheckCircle2 size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="font-bold">Inquire About This Service</Button>
                  </Link>
                </div>
                <div className={cn(
                  "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
                  idx % 2 !== 0 ? "lg:order-1" : ""
                )}>
                  <img 
                    data-strk-img-id={service.imgId}
                    data-strk-img={`China factory ${service.title} professional service`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for conditional classes (in case it wasn't imported globally or path issues)
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Services;
