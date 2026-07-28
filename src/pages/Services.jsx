import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Factory, ClipboardCheck, ShieldCheck, Package, Truck, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right factory for your product',
    items: [
      'Market research and supplier shortlisting',
      'RFQ management and price negotiation',
      'Capability assessment against your requirements',
      'Background checks on business registration and history',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you are working with',
    items: [
      'On-site factory visit with photo/video evidence',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and certification verification',
      'Detailed audit report with recommendations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    subtitle: 'Catch defects before shipment',
    items: [
      'Pre-production inspection (raw materials check)',
      'During-production inspection (in-line QC)',
      'Pre-shipment inspection (final random inspection)',
      'Container loading supervision',
      'AQL standard-based sampling and reporting',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-Up',
    subtitle: 'Keep your production on track',
    items: [
      'Weekly production progress reports',
      'Real-time issue escalation and resolution',
      'Raw material and component verification',
      'Packaging and labeling confirmation',
      'Production timeline monitoring',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    subtitle: 'Get the samples right before mass production',
    items: [
      'Coordinate sample requests with suppliers',
      'Track sample delivery and collect feedback',
      'Manage revision cycles until approval',
      'Pre-production sample approval support',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'From factory to your door',
    items: [
      'Air freight, sea freight, rail, and express',
      'Customs clearance and documentation',
      'Consolidation and warehousing',
      'Door-to-door delivery options',
      'Real-time shipment tracking',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Comprehensive, end-to-end sourcing services designed to reduce risk, improve quality, 
              and streamline your supply chain from China.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold px-8 py-6 text-base">
                Get a Free Sourcing Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Service Package?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every client is different. We tailor our services to your specific product, budget, and timeline.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold px-8 py-6 text-base">
              Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}