import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ShieldCheck, ClipboardCheck, Ship, Factory, Truck, FileCheck2, PackageCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify manufacturers that match your product requirements, budget, and quality standards. Our network covers multiple industries and production scales.',
      details: ['Supplier matching by product category', 'Price benchmarking and negotiation support', 'Minimum order quantity and lead-time review', 'Sample coordination and feedback loops'],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and business registration before you commit to a partnership.',
      details: ['Business license and registration checks', 'Production line and capacity assessment', 'Quality management system review', 'Social compliance and safety checks'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to catch defects early and reduce returns and delays.',
      details: ['Pre-production material and first-article checks', 'During-production inspections at key milestones', 'Pre-shipment random sampling and testing', 'Detailed reports with photos and measurements'],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding so your cargo moves predictably.',
      details: ['Incoterms guidance and freight quoting', 'Cargo consolidation and warehousing', 'Customs documentation and clearance support', 'Shipment tracking and issue resolution'],
    },
  ];

  const extras = [
    { icon: Factory, title: 'Production Follow-up', description: 'We monitor production schedules, flag delays, and keep you updated without chasing suppliers yourself.' },
    { icon: Truck, title: 'Logistics Support', description: 'We coordinate inland transport, port handling, and carrier selection to reduce shipping surprises.' },
    { icon: FileCheck2, title: 'Compliance Checks', description: 'We review product standards, labeling requirements, and documentation needs for your target market.' },
    { icon: PackageCheck, title: 'Packaging Review', description: 'We check packaging durability, labeling accuracy, and palletization before goods leave the factory.' },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Services</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Sourcing services built for international buyers</h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical support for supplier discovery, verification, quality control, and shipping. We work as an extension of your team in China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">Additional support</h2>
            <p className="mt-3 text-slate-600">We also help with production follow-up, logistics, compliance, and packaging review.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900">Ready to start a sourcing project?</h2>
              <p className="mt-3 text-slate-600">Share your product requirements and we will reply with a practical next step.</p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
