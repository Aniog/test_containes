import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, ShieldCheck, CheckCircle, Package, Truck, ArrowRight, Check, Star, Users, Building, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'product-sourcing',
      title: 'Product Sourcing',
      desc: 'We find reliable manufacturers in China that match your exact specifications, quality requirements, and target price.',
      icon: Search,
    },
    {
      id: 'supplier-verification',
      title: 'Supplier Verification',
      desc: 'We conduct on-site factory audits to verify licenses, production capacity, and working conditions before you place an order.',
      icon: ShieldCheck,
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      desc: 'Our inspectors check your goods during and after production to ensure they meet your quality standards before shipping.',
      icon: CheckCircle,
    },
    {
      id: 'sample-consolidation',
      title: 'Sample Consolidation',
      desc: 'We collect samples from multiple suppliers, bundle them into one package, and ship them to you to save on courier costs.',
      icon: Package,
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      desc: 'We arrange the most cost-effective sea, air, or rail freight, handle customs clearance, and deliver to your door or FBA warehouse.',
      icon: Truck,
    },
  ];

  const processSteps = [
    { step: 1, title: 'Submit Inquiry', desc: 'Tell us what products you need, target price, and quantities.' },
    { step: 2, title: 'Get Quotes', desc: 'We source from 3-5 verified factories and send you a detailed quote.' },
    { step: 3, title: 'Sample Approval', desc: 'We arrange samples for your approval before bulk production.' },
    { step: 4, title: 'Order & Production', desc: 'You place the order. We follow up closely to ensure timely production.' },
    { step: 5, title: 'Quality Inspection', desc: 'We inspect the goods before the final balance payment.' },
    { step: 6, title: 'Shipping', desc: 'We handle logistics to deliver the goods directly to your warehouse.' },
  ];

  const trustPoints = [
    { icon: Globe, value: '10+', label: 'Years Experience' },
    { icon: Building, value: '500+', label: 'Verified Factories' },
    { icon: Users, value: '200+', label: 'Active Clients' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
  ];

  const faqs = [
    {
      question: "How do you charge for your sourcing services?",
      answer: "We typically charge a transparent service fee ranging from 5% to 10% of the total order value, depending on the order volume and product complexity. For initial sourcing and price quoting, we offer a free consultation."
    },
    {
      question: "Can you help with Amazon FBA prep?",
      answer: "Yes, we are highly experienced with Amazon FBA requirements. We handle FNSKU labeling, polybagging, bundling, carton labeling, and direct shipping to Amazon fulfillment centers globally."
    },
    {
      question: "What if the products have quality issues?",
      answer: "We conduct strict quality control (pre-production, during production, and pre-shipment inspections) to catch issues before shipping. If an issue is found, we negotiate with the factory to rework or replace the defective items before the final payment is made."
    },
    {
      question: "Do you handle custom packaging and private labeling (OEM/ODM)?",
      answer: "Absolutely. We can help you find suppliers for custom packaging, print your logo on products, and manage the entire OEM/ODM process from concept to final product."
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-1a2b3c"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subheadline" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and manage global shipping. Your dedicated team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-8 text-lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold h-14 px-8 text-lg">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-6 text-sm font-medium text-slate-300">
              <div className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> No Hidden Fees</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> Verified Suppliers</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> Strict Quality Control</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{point.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{point.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p id="services-desc" className="text-lg text-slate-600">From finding the right factory to delivering goods to your warehouse, we handle every step of the importing process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle id={`service-title-${service.id}`} className="text-xl text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p id={`service-desc-${service.id}`} className="text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
            <Card className="border-slate-100 shadow-sm bg-blue-600 text-white flex flex-col justify-center items-center text-center p-8">
              <CardTitle className="text-2xl mb-4 text-white">Need a custom solution?</CardTitle>
              <CardDescription className="text-blue-100 mb-8 text-base">We can tailor our services to meet your specific business requirements.</CardDescription>
              <Link to="/contact">
                <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-50 font-semibold">
                  Talk to an Expert
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="process-title" className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Proven Sourcing Process</h2>
              <p id="process-desc" className="text-lg text-slate-600 mb-10">We've streamlined the importing process to make it as simple, safe, and efficient as possible for overseas buyers.</p>
              
              <div className="space-y-8">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex relative">
                    {step.step !== processSteps.length && (
                      <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-slate-100"></div>
                    )}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg relative z-10 border-4 border-white shadow-sm">
                      {step.step}
                    </div>
                    <div className="ml-6 pt-2">
                      <h3 id={`process-step-title-${step.step}`} className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p id={`process-step-desc-${step.step}`} className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                data-strk-img-id="process-img-xyz789"
                data-strk-img="[process-desc] [process-title] manufacturing logistics"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing process in China"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-white transform -skew-x-12"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your business with reliable suppliers?</h2>
          <p className="text-xl text-blue-100 mb-10">Send us your product requirements today and our sourcing experts will get back to you within 24 hours with a free quote.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 font-bold h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all">
              Start Sourcing Now
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about working with us.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border border-slate-100 px-6 py-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 py-4 hover:no-underline hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-10">
            <p className="text-slate-600">
              Still have questions? <Link to="/contact" className="text-blue-600 font-medium hover:underline">Contact our support team.</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
