import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle2, ShieldCheck, Factory, BoxBox, FileSearch, Anchor } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const services = [
    {
      id: 'supplier-verification',
      title: 'Supplier Verification',
      description: 'We audit factory licenses, production capacity, and social compliance to ensure you work with legitimate manufacturers.',
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      description: 'Pre-production, in-line, and pre-shipment inspections tailored exactly to your AQL standards.',
      icon: <FileSearch className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      id: 'production-follow',
      title: 'Production Follow-up',
      description: 'On-site monitoring to avoid delays, manage raw material issues, and maintain a smooth production schedule.',
      icon: <Factory className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      id: 'shipping',
      title: 'Shipping Coordination',
      description: 'Cost-effective sea, air, and train freight solutions, complete with customs clearance assistance.',
      icon: <Anchor className="w-10 h-10 text-blue-600 mb-4" />
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="home-hero-bg-2f3b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            China Sourcing Agent <br/> for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with full transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-slate-900 bg-white hover:bg-slate-100">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700">10+</div>
              <div className="text-sm font-medium text-slate-600 uppercase mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">500+</div>
              <div className="text-sm font-medium text-slate-600 uppercase mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase mt-1">Transparency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p id="services-desc" className="text-lg text-slate-600">
              We handle the complexity on the ground so you can focus on scaling your business natively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="text-xl mb-2" id={`service-${service.id}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" id={`service-${service.id}-desc`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-blue-600">
              <Link to="/services">View all services &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image / Text Section: Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                alt="Quality Inspection in Factory"
                className="rounded-xl shadow-xl w-full h-[500px] object-cover"
                data-strk-img-id="home-qc-factory-1a2b"
                data-strk-img="[risk-2] [problems-desc] [problems-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 id="problems-title" className="text-3xl font-bold text-slate-900 mb-4">
                  Eliminate Risk from Your China Supply Chain
                </h2>
                <p id="problems-desc" className="text-lg text-slate-600">
                  Importing from overseas carries inherent risks—from miscommunication to outright scams. We act as your eyes and ears on the ground.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { id: 'risk-1', text: 'Avoid scammers and dishonest middle-men' },
                  { id: 'risk-2', text: 'Prevent defective products before they ship' },
                  { id: 'risk-3', text: 'Overcome language and cultural barriers' },
                  { id: 'risk-4', text: 'Reduce unexpected hidden costs and delays' }
                ].map((item) => (
                  <li key={item.id} className="flex items-start tracking-tight">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                    <span id={item.id} className="text-slate-800 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/how-it-works">See How We Protect You</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Import Process?</h2>
          <p id="cta-desc" className="text-xl text-blue-100 mb-10">
            Tell us what products you need, and we'll provide a transparent quote within 24 hours. No hidden fees.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg">
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;