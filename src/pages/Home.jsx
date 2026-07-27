import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import InquiryForm from '@/components/forms/InquiryForm';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers that match your product specifications, volume, and quality requirements.',
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, production capacity, and compliance with international standards.',
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-process inspections to ensure products meet agreed specifications before delivery.',
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and milestone reporting throughout the manufacturing cycle.',
    },
    {
      title: 'Shipping Coordination',
      desc: 'Logistics management including freight booking, documentation, and customs clearance support.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Requirement Analysis', desc: 'We review your product specifications, target price, and volume requirements.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on capability, quality, and compliance.' },
    { step: '03', title: 'Verification & Sampling', desc: 'We conduct factory audits and coordinate samples for your approval.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, conduct inspections, and manage quality control.' },
    { step: '05', title: 'Logistics & Delivery', desc: 'We coordinate shipping, documentation, and final delivery to your destination.' },
  ];

  const productCategories = [
    'Electronics & Components',
    'Home & Kitchen Appliances',
    'Apparel & Textiles',
    'Industrial Machinery',
    'Consumer Goods',
    'Automotive Parts',
    'Packaging Materials',
    'Hardware & Tools',
  ];

  const problems = [
    'Difficulty finding reliable manufacturers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Inconsistent product quality across batches',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
    'Risk of payment issues or non-delivery',
  ];

  const trustPoints = [
    { number: '850+', label: 'Sourcing Projects Completed' },
    { number: '320', label: 'Verified Supplier Partners' },
    { number: '42', label: 'Countries Served' },
    { number: '11', label: 'Years in Operation' },
  ];

  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      result: 'Reduced sourcing lead time by 40% and achieved 18% cost savings on kitchenware line.',
      category: 'Home & Kitchen',
    },
    {
      client: 'North American Electronics Distributor',
      result: 'Established reliable supply chain for 12 product SKUs with consistent 98% quality pass rate.',
      category: 'Electronics',
    },
    {
      client: 'Australian Industrial Equipment Importer',
      result: 'Successfully sourced specialized components from 3 new factories with full compliance documentation.',
      category: 'Industrial',
    },
  ];

  const faqs = [
    {
      q: 'How do you verify suppliers?',
      a: 'We conduct on-site factory audits covering business registration, production capacity, quality systems, and working conditions. We also verify export licenses and past client references.',
    },
    {
      q: 'What is included in quality inspection?',
      a: 'Our inspections cover product specifications, workmanship, functionality, packaging, labeling, and quantity verification. We provide detailed reports with photos and measurements.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier shortlisting typically takes 2-3 weeks. Full verification and sampling adds 3-5 weeks. Production timelines vary by product complexity.',
    },
    {
      q: 'Do you charge upfront fees?',
      a: 'We charge a project-based sourcing fee. No success fees or hidden commissions from suppliers. All costs are transparent and agreed before engagement.',
    },
    {
      q: 'Can you handle small order quantities?',
      a: 'We work with buyers across a range of volumes. Minimum order quantities depend on the product category and supplier capabilities. We will advise you during the requirement analysis.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto mb-10">
            Professional supplier sourcing, factory verification, quality control, and shipping coordination for international businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-[#64748b]">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#e2e8f0] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((point, idx) => (
              <div key={idx}>
                <div className="text-3xl font-semibold text-[#0A2540]">{point.number}</div>
                <div className="text-sm text-[#475569] mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              End-to-end support for sourcing from China, from supplier identification to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="pt-6">
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-[#475569]">A structured approach to reduce risk and ensure quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-[#C5A46E] text-sm font-semibold mb-2">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="ghost">
              <Link to="/how-it-works">Learn More About the Process →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Products We Source</h2>
              <p className="text-lg text-[#475569] mb-8">
                We work across a wide range of product categories. Our team has experience sourcing both standard and specialized items.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {productCategories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-[#C5A46E]">•</span> {cat}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant="secondary">
                  <Link to="/products">See Detailed Categories</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[380px] rounded-lg overflow-hidden bg-[#f1f5f9]">
              <img
                data-strk-img-id="home-products-factory"
                data-strk-img="[products] [section-title] factory production line manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory production line"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Problems We Solve</h2>
            <p className="text-lg text-[#475569]">Common challenges international buyers face when sourcing from China.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-6 rounded-lg border border-[#e2e8f0]">
                <div className="text-[#C5A46E] mt-1">→</div>
                <p className="text-[#0A2540]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Experience */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Buyers Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
            <div>
              <h3 className="font-semibold mb-2">Local Presence</h3>
              <p className="text-sm text-[#475569]">Our team is based in China with direct access to factories across major manufacturing regions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Transparent Process</h3>
              <p className="text-sm text-[#475569]">Clear reporting at every stage. No hidden fees or supplier kickbacks.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practical Experience</h3>
              <p className="text-sm text-[#475569]">Over a decade working with buyers from North America, Europe, Australia, and the Middle East.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Case Studies</h2>
              <p className="text-[#475569] mt-2">Real results for international buyers.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:block">
              <Link to="/case-studies">View All →</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="text-xs uppercase tracking-widest text-[#C5A46E] mb-3">{cs.category}</div>
                  <CardTitle className="text-lg mb-3">{cs.client}</CardTitle>
                  <p className="text-sm text-[#475569] leading-relaxed">{cs.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="ghost">
              <Link to="/case-studies">View All Case Studies →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#e2e8f0] pb-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="secondary">
              <Link to="/contact">Still have questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Form CTA */}
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight mb-3">Ready to Start Sourcing?</h2>
            <p className="text-[#94a3b8]">Tell us about your requirements and receive a sourcing quote within 24 hours.</p>
          </div>
          <div className="bg-white rounded-lg p-8 text-[#0A2540]">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
