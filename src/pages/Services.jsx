import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, PackageSearch, ShieldCheck, Ship, FileSearch, HandCoins } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: "supplier-sourcing",
      icon: PackageSearch,
      title: "Supplier Sourcing",
      desc: "Finding the right factory is crucial. We leverage our extensive network and databases to identify reliable manufacturers capable of meeting your exact specifications, quality standards, and target pricing. We present you with a curated list of vetted options.",
    },
    {
      id: "price-negotiation",
      icon: HandCoins,
      title: "Price Negotiation",
      desc: "Our native Chinese sourcing experts understand local business culture and pricing structures. We negotiate directly with factories to secure the most competitive wholesale prices, ensuring you maximize your profit margins without compromising on quality.",
    },
    {
      id: "factory-verification",
      icon: Factory,
      title: "Factory Verification",
      desc: "Never send money blindly. We conduct rigorous on-site factory audits to verify their licenses, production capacity, equipment, labor conditions, and quality management systems (ISO compliance).",
    },
    {
      id: "sample-development",
      icon: FileSearch,
      title: "Sample Development",
      desc: "Before mass production, we manage the prototype and sampling process. We consolidate samples from different suppliers, perform initial quality checks, and send them to you in one package to save on international shipping costs.",
    },
    {
      id: "quality-control",
      icon: ShieldCheck,
      title: "Quality Control (QC)",
      desc: "We perform During Production Inspections (DUPRO) and Pre-Shipment Inspections (PSI) following standard AQL limits. You receive detailed reports with photos and videos before the final balance payment is released.",
    },
    {
      id: "shipping",
      icon: Ship,
      title: "Shipping & Logistics",
      desc: "We offer end-to-end logistics solutions including EXW, FOB, CIF, and DDP terms. Whether by sea freight (FCL/LCL), air freight, or rail, we handle customs clearance and deliver directly to your warehouse or Amazon FBA center.",
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sourcing Services | SSourcing China</title>
        <meta name="description" content="Comprehensive China sourcing services: supplier search, price negotiation, factory audits, quality control, and shipping logistics." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Our Sourcing Services</h1>
          <p id="page-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">We provide end-to-end supply chain solutions tailored to your business needs, reducing risks and maximizing margins.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p id={`service-desc-${service.id}`} className="text-lg text-slate-600 leading-relaxed mb-8">{service.desc}</p>
              </div>
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                 <img
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`srv-img-${service.id}`}
                    data-strk-img={`[service-title-${service.id}] [service-desc-${service.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Need a Customized Solution?</h2>
          <p className="text-xl text-slate-400 mb-10">Whether you need a simple factory audit or full supply chain management, we adapt to your requirements.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 rounded-full px-8">
            <Link to="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}