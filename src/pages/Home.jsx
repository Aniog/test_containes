import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, TrendingUp, Users, ArrowRight, Factory, SearchCheck, Ship } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: "Supplier Verification",
      description: "We physically audit factories, verify business licenses, and assess production capabilities to ensure you work with legitimate, capable manufacturers.",
      icon: <SearchCheck className="w-8 h-8 text-primary" />,
      link: "/services#verification"
    },
    {
      title: "Product Development",
      description: "From concept to prototype. We help you find the right manufacturers to bring your custom designs (OEM/ODM) to life while protecting your IP.",
      icon: <Factory className="w-8 h-8 text-primary" />,
      link: "/services#development"
    },
    {
      title: "Quality Control",
      description: "Our inspectors perform rigorous pre-shipment inspections (PSI) and during-production checks (DUPRO) based on your exact specifications and AQL standards.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      link: "/services#qc"
    },
    {
      title: "Shipping & Fulfillment",
      description: "We coordinate inland transport, arrange ocean/air freight, handle customs clearance, and ensure your goods arrive safely and on time.",
      icon: <Ship className="w-8 h-8 text-primary" />,
      link: "/services#shipping"
    }
  ];

  const processSteps = [
    { step: "01", title: "Submit Inquiry", desc: "Tell us exactly what you need, including specs, target price, and quantities." },
    { step: "02", title: "We Source & Quote", desc: "We leverage our network to find the best factories and provide transparent quotes." },
    { step: "03", title: "Sample Approval", desc: "We arrange samples for your review and make necessary adjustments." },
    { step: "04", title: "Mass Production", desc: "Place the order. We track production progress and keep you updated." },
    { step: "05", title: "Quality Inspection", desc: "We inspect the goods before they leave the factory to guarantee quality." },
    { step: "06", title: "Shipping", desc: "We handle logistics to deliver the goods directly to your door or warehouse." }
  ];

  const valueProps = [
    { title: "Local Expertise", desc: "We are physically on the ground in China, speaking the language and understanding the business culture.", icon: <Users className="w-6 h-6 text-primary" /> },
    { title: "Risk Mitigation", desc: "Avoid scams, poor quality, and delays. We act as your eyes and ears to protect your investment.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
    { title: "Cost Savings", desc: "We negotiate directly with factories, cutting out middlemen to get you the best possible factory-direct pricing.", icon: <TrendingUp className="w-6 h-6 text-primary" /> },
    { title: "Time Efficiency", desc: "You focus on growing your business while we handle the complex, time-consuming sourcing process.", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Your trusted partner on the ground. We find reliable suppliers, verify factories, inspect quality, and manage shipping so you can scale your business without the headaches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {prop.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{prop.title}</h3>
                <p className="text-slate-600 text-sm">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold mb-4 text-slate-900">End-to-End Sourcing Services</h2>
            <p id="services-subtitle" className="text-slate-600 text-lg">We handle every step of the supply chain, ensuring you get exactly what you ordered, on time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, idx) => (
              <Card key={idx} className="border-slate-200">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Link to={service.link} className="text-primary font-medium flex items-center hover:underline">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
             <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section with Visual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="process-title" className="text-3xl font-bold mb-6 text-slate-900">Our Proven Sourcing Process</h2>
              <p id="process-subtitle" className="text-slate-600 text-lg mb-10">A systematic approach to minimize risk and guarantee results.</p>
              
              <div className="space-y-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img
                data-strk-img-id="home-process-img"
                data-strk-img="[process-subtitle] [process-title] supply chain management"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to source securely from China?</h2>
          <p className="text-lg text-blue-100 mb-10">Stop worrying about factory scams and quality issues. Let us be your dedicated team on the ground.</p>
          <Button asChild size="lg" variant="secondary" className="text-primary hover:bg-slate-100 h-12 px-8 text-lg font-semibold">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;