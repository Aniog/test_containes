import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, ClipboardCheck, Factory, ShieldCheck, Package, Truck } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find reliable suppliers matched to your product requirements, pricing, and quality standards.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify capabilities, certifications, production capacity, and compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-Up',
    description: 'Daily progress tracking, issue resolution, and ensuring your production timeline stays on schedule.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'Coordinate samples, collect feedback, and manage revisions until the product meets your specifications.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Air, sea, or express shipping. Customs clearance, documentation, and door-to-door delivery.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From finding the right supplier to delivering products to your door, we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <service.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-semibold">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}