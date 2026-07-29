import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShieldCheck, Factory, ClipboardCheck, Truck, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Product Sourcing',
    desc: 'We find the best-matched suppliers for your products based on price, quality, and capacity.',
    icon: Search,
  },
  {
    title: 'Supplier Verification',
    desc: 'Don’t take risks. We verify factory licenses, certifications, and production capabilities on-site.',
    icon: ShieldCheck,
  },
  {
    title: 'Production Following',
    desc: 'Regular updates and monitoring of your orders to ensure lead times are met and issues caught early.',
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections following AQL 2.5/4.0 standards to ensure every unit meets your specs.',
    icon: ClipboardCheck,
  },
  {
    title: 'Logistics & Shipping',
    desc: 'End-to-end shipping solutions including sea freight, air freight, and FBA warehouse delivery.',
    icon: Truck,
  },
  {
    title: 'Custom Branding',
    desc: 'Help with private labeling, custom packaging, and product modifications to differentiate your brand.',
    icon: BarChart3,
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
            Comprehensive Sourcing Solutions
          </h3>
          <p className="text-lg text-slate-600">
            We bridge the gap between you and Chinese manufacturers, handling every step of the supply chain with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <s.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
