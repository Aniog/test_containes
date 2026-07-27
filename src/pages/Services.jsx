import React, { useEffect, useRef } from 'react';
import { SearchCheck, Factory, ShieldCheck, Ship, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: "verification",
      title: "Supplier Verification & Factory Audits",
      desc: "Don't fall for flashy Alibaba profiles. We verify the actual capabilities and legal status of suppliers.",
      icon: <SearchCheck className="w-10 h-10 text-primary" />,
      features: [
        "Business license and legal status check",
        "On-site factory physical audits",
        "Production capacity assessment",
        "Social compliance & ISO certification review",
        "Checking past export records"
      ]
    },
    {
      id: "development",
      title: "Product Development (OEM/ODM)",
      desc: "Turn your ideas into tangible products with reliable manufacturing partners who respect your IP.",
      icon: <Factory className="w-10 h-10 text-primary" />,
      features: [
        "Sourcing the right factory for custom molding",
        "Sample making and iteration management",
        "Packaging design and customization",
        "Intellectual property protection (NNN agreements)",
        "Bill of Materials (BOM) verification"
      ]
    },
    {
      id: "qc",
      title: "Quality Control & Inspections",
      desc: "Ensure your goods meet your standards before you pay the final balance.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      features: [
        "Pre-Shipment Inspection (PSI)",
        "During Production Check (DUPRO)",
        "First Article Inspection (FAI)",
        "Container Loading Supervision (CLS)",
        "Detailed photo & video reports within 24 hours"
      ]
    },
    {
      id: "shipping",
      title: "Logistics & Fulfillment",
      desc: "Seamlessly move your goods from the factory floor to your warehouse.",
      icon: <Ship className="w-10 h-10 text-primary" />,
      features: [
        "Inland transportation coordination",
        "Ocean freight (FCL & LCL) and Air freight",
        "Customs clearance preparation",
        "Warehousing and consolidation in China",
        "Amazon FBA prep and direct shipping"
      ]
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed">
            From finding the first factory to tracking the final container, we provide comprehensive solutions for importing from China securely and profitably.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-slate-100">
                   <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[service-title-${service.id}] [service-desc-${service.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">{service.icon}</div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold mb-4 text-slate-900">{service.title}</h2>
                  <p id={`service-desc-${service.id}`} className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                  
                  <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">What's Included:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0 flex-none" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-slate-300 mb-10">We adapt to your specific business needs. Tell us about your project and we'll see how we can help.</p>
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;