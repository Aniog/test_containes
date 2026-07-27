import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, ShieldCheck, Factory, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Product Sourcing",
    description: "Finding the right suppliers for your specific products at the best prices.",
    icon: Search,
    link: "/services#sourcing"
  },
  {
    title: "Supplier Verification",
    description: "Comprehensive factory audits and background checks to minimize risks.",
    icon: ShieldCheck,
    link: "/services#verification"
  },
  {
    title: "Quality Control",
    description: "Independent inspections at every stage of production to ensure standards.",
    icon: Factory,
    link: "/services#qc"
  },
  {
    title: "Logistics & Shipping",
    description: "Coordinating sea, air, and rail freight to deliver to your doorstep.",
    icon: Truck,
    link: "/services#logistics"
  }
];

const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-slate-600 text-lg">
            We simplify your procurement process in China, handling everything from the initial search to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-6 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
