import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Factory, ClipboardCheck, Package, Ship, Globe, ArrowRight } from 'lucide-react';

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and vet manufacturers that match your product specs, volume needs, and budget. Our network covers electronics, home goods, auto parts, textiles, and more.', features: ['Product requirement analysis', 'Supplier database search', 'Factory shortlisting', 'Sample coordination'] },
  { icon: Factory, title: 'Factory Verification', desc: 'Before you place an order, we verify that the factory is legitimate, capable, and compliant. We check licenses, capacity, quality systems, and financial stability.', features: ['Business license verification', 'On-site factory audit', 'Production capacity assessment', 'Reference checks'] },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Our QC team inspects at key production stages and before shipment. We follow internationally recognized standards and provide detailed English reports.', features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'] },
  { icon: Package, title: 'Order Follow-Up', desc: 'We act as your local representative, tracking production schedules, managing changes, and keeping you informed with regular updates.', features: ['Production monitoring', 'Schedule management', 'Change order handling', 'Regular progress reports'] },
  { icon: Ship, title: 'Shipping Coordination', desc: 'From factory to your warehouse, we manage freight forwarding, prepare shipping documents, and coordinate customs clearance.', features: ['Freight forwarding', 'Document preparation', 'Customs clearance support', 'Insurance coordination'] },
  { icon: Globe, title: 'Sourcing Consulting', desc: 'We provide market insights, cost optimization strategies, and negotiation support to help you build long-term supplier relationships.', features: ['Market research', 'Cost analysis', 'Negotiation support', 'Contract review'] },
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive sourcing solutions designed for overseas buyers who want reliability, transparency, and results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-slate-200 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a custom sourcing solution?</h2>
              <p className="text-slate-600 mb-6">Every buyer has unique needs. Tell us about your project and we will design a tailored sourcing plan that fits your timeline and budget.</p>
              <Link to="/contact">
                <Button size="lg">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '500+', label: 'Suppliers verified' },
                { stat: '50+', label: 'Product categories' },
                { stat: '30+', label: 'Countries served' },
                { stat: '98%', label: 'Client satisfaction' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                  <p className="text-2xl font-bold text-slate-900">{item.stat}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
