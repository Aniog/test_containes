import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and evaluate reliable manufacturers matching your product requirements, budget, and quality standards.',
    link: '/services',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality systems, and social compliance.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.',
    link: '/services',
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'Regular progress updates and timeline monitoring to keep your orders on schedule.',
    link: '/services',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs clearance, freight forwarding, and delivery tracking.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle">
            Comprehensive sourcing solutions to help you buy from China with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
