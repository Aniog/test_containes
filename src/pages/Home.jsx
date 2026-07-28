import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Truck, ArrowRight, CheckCircle2, TrendingUp, Users, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const trustPoints = [
    { id: '10+', text: 'Years Experience' },
    { id: '500+', text: 'Verified Factories' },
    { id: '1000+', text: 'Successful Shipments' },
    { id: '99%', text: 'Quality Satisfaction' }
  ];

  const processSteps = [
    {
      title: 'Submit Requirements',
      desc: 'Tell us what you need, including specs, budget, and quantity.',
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Supplier Verification',
      desc: 'We audit and shortlist reliable factories that match your needs.',
      icon: <Factory className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Sample & Production',
      desc: 'We handle sampling, negotiate prices, and oversee full production.',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Quality & Shipping',
      desc: 'Strict QC before dispatch, then we manage logistics to your door.',
      icon: <Truck className="w-8 h-8 text-blue-600" />
    }
  ];

  const services = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      desc: 'Find the right manufacturer in China with our extensive network. We negotiate the best prices without compromising quality.',
      icon: <Search className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      id: 'verification',
      title: 'Factory Verification',
      desc: 'Avoid scams. We conduct on-site factory audits to verify capabilities, certifications, and working conditions.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      id: 'quality',
      title: 'Quality Control',
      desc: 'Pre-production to pre-shipment inspections. We ensure your products meet exact specifications before they leave China.',
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      id: 'shipping',
      title: 'Logistics & Shipping',
      desc: 'End-to-end supply chain management. We coordinate freight forwarding, customs clearance, and delivery to your warehouse.',
      icon: <Truck className="w-8 h-8 text-blue-600 mb-4" />
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Your Ground Team in China
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Maximize margins and minimize risks with our end-to-end sourcing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-slate-900 bg-white border-transparent hover:bg-slate-100 hover:text-slate-900">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          
          {/* Trust points simple */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-700/50 max-w-4xl">
            {trustPoints.map((point) => (
              <div key={point.id}>
                <div className="text-2xl font-bold text-white">{point.id}</div>
                <div className="text-sm text-slate-400">{point.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
               <img
                  alt="Quality Control Inspector in Factory"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="factory-inspector-1"
                  data-strk-img="[problem-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="space-y-8">
              <div>
                <h2 id="problem-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Sourcing from China Doesn't Have to Be Risky</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Language barriers, fake factories on B2B platforms, poor quality control, and shipping delays can cripple your business. We act as your dedicated office in China, handling every detail to protect your investment.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Avoid scammers and middlemen hiding as manufacturers',
                  'Ensure specifications are met before balance payment',
                  'Consolidate shipments to save on freight costs',
                  'Clear and transparent communication in English'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="link" className="text-blue-600 p-0 text-lg group">
                <Link to="/about">
                  Learn about our company <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600">From finding the right factory to delivering goods to your warehouse, we handle the entire supply chain footprint in China.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  {service.icon}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.desc}</p>
                  <Link to={`/services#${service.id}`} className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">A Proven Process for Success</h2>
            <p className="text-lg text-slate-600">We've streamlined the sourcing process to make importing from China predictable and safe.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line for desktop */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-[2.5rem] left-[60%] w-full h-[2px] bg-slate-200" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    <span className="text-blue-600 mr-2">{i + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Link to="/how-it-works">View Detailed Workflow</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Source Better from China?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
            Tell us about your project. We'll evaluate your requirements and provide a transparent quote within 24 hours.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
            <Link to="/contact">Get Your Free Sourcing Quote Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;