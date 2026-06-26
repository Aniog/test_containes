import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Building, CheckCircle, PackageOpen, Truck, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Supplier Sourcing",
      description: "We find and evaluate multiple manufacturers to get you the best price, quality, and lead time.",
      icon: <Search className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Factory Verification",
      description: "We conduct on-site audits to verify factory legitimacy, production capacity, and working conditions.",
      icon: <Building className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Sample Development",
      description: "We help you communicate your product requirements clearly, consolidate samples, and forward them to you.",
      icon: <PackageOpen className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Quality Control (QC)",
      description: "During and post-production inspections to ensure products meet your exact specifications before shipping.",
      icon: <CheckCircle className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Production Follow-up",
      description: "We monitor the manufacturing schedule daily to prevent delays and keep you updated on progress.",
      icon: <Briefcase className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Shipping & Logistics",
      description: "We coordinate with freight forwarders for air, sea, or express shipping, handling customs clearance documentation.",
      icon: <Truck className="h-10 w-10 text-primary mb-4" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Sourcing Services</h2>
          <p id="services-desc" className="text-lg text-muted-foreground">
            From finding the right factory to delivering goods to your warehouse, we handle the entire supply chain process in China.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                {service.icon}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
