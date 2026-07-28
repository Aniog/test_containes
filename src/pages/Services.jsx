import React from 'react';
import { Search, Factory, CheckCircle, Truck, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing',
      icon: Search,
      desc: 'Finding the right partner is the most critical step. We identify suppliers that match your quality requirements and budget.',
      details: [
        'Multi-channel search (Alibaba, Global Sources, Trade Fairs, Local networks)',
        'Initial supplier background checks',
        'Price negotiation and benchmarking',
        'Sample collection and evaluation'
      ]
    },
    {
      id: 'factory-audit',
      title: 'Factory Verification & Audit',
      icon: Factory,
      desc: 'Verify if the factory actually exists and has the capacity to produce your order according to standards.',
      details: [
        'On-site facility inspections',
        'Verification of licenses and certifications',
        'Assessment of production lines and equipment',
        'Review of quality management systems (ISO 9001)'
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control & Inspection',
      icon: CheckCircle,
      desc: 'Ensure your products are manufactured exactly as specified before they are packed and shipped.',
      details: [
        'Initial Production Check (IPC)',
        'During Production Inspection (DUPRO)',
        'Final Pre-shipment Inspection (PSI)',
        'Detailed inspection reports within 24 hours'
      ]
    },
    {
      id: 'order-management',
      title: 'Order Management & Tracking',
      icon: TrendingUp,
      desc: 'We bridge the communication gap, ensuring the factory stays on schedule and understands your requirements.',
      details: [
        'Production schedule monitoring',
        'Critical milestone reporting',
        'Proactive bottleneck identification',
        'Direct communication with factory managers'
      ]
    },
    {
      id: 'shipping-logistics',
      title: 'Logistics & Shipping Support',
      icon: Truck,
      desc: 'Consolidate orders and manage complex international shipping to minimize costs and delays.',
      details: [
        'Freight forwarding coordination',
        'Container loading supervision',
        'Customs documentation preparation',
        'Door-to-door delivery options'
      ]
    },
    {
      id: 'private-label',
      title: 'Private Labeling & OEM/ODM',
      icon: ShieldCheck,
      desc: 'Build your own brand with custom products and packaging designed for your target market.',
      details: [
        'Packaging design coordination',
        'Logo application and branding',
        'New product development support',
        'Intellectual property protection guidance'
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 id="services-header-title" className="mb-6 text-4xl font-bold md:text-5xl">Professional Sourcing Services</h1>
            <p id="services-header-desc" className="text-xl text-blue-100">
              End-to-end supply chain management tailored to your business needs. We minimize risks and maximize value across the entire procurement process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {servicesList.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl border bg-card hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 id={`${service.id}-title`} className="mb-4 text-2xl font-bold text-foreground">{service.title}</h2>
                  <p id={`${service.id}-desc`} className="mb-6 text-muted-foreground leading-relaxed">{service.desc}</p>
                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-secondary">
                    <img
                      data-strk-img-id={`img-${service.id}`}
                      data-strk-img={`[${service.id}-desc] [${service.id}-title] [services-header-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 id="why-choose-us-title" className="mb-16 text-3xl font-bold md:text-4xl">Why Partner With SSourcing China?</h2>
          <div className="grid gap-8 md:grid-cols-3">
             <div className="p-8">
               <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm text-primary font-bold text-2xl">01</div>
               <h3 id="prop1-title" className="mb-3 text-xl font-bold">Local Presence</h3>
               <p id="prop1-desc" className="text-muted-foreground">Based in Shenzhen and Yiwu, we have immediate access to the largest manufacturing hubs in China.</p>
             </div>
             <div className="p-8">
               <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm text-primary font-bold text-2xl">02</div>
               <h3 id="prop2-title" className="mb-3 text-xl font-bold">Unbiased Advocacy</h3>
               <p id="prop2-desc" className="text-muted-foreground">We work for YOU, not the factories. We provide honest reports and protect your interests at every step.</p>
             </div>
             <div className="p-8">
               <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm text-primary font-bold text-2xl">03</div>
               <h3 id="prop3-title" className="mb-3 text-xl font-bold">English Fluency</h3>
               <p id="prop3-desc" className="text-muted-foreground">Clear, professional communication in English. No misunderstandings or technical terms lost in translation.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 id="service-cta-title" className="mb-6 text-3xl font-bold">Need a Customized Solution?</h2>
          <p id="service-cta-desc" className="mb-10 text-lg text-muted-foreground">
            Whether you need a single inspection or a complete sourcing partnership, we can tailor our services to fit your specific procurement needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 px-10 text-lg">Discuss Your Project</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
