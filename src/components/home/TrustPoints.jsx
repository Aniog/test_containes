import { Globe2, Factory, Users2, BadgeCheck } from "lucide-react";

export function TrustPoints() {
  const metrics = [
    {
      title: "Active Buyers",
      value: "500+",
      icon: <Users2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Verified Factories",
      value: "2,000+",
      icon: <Factory className="h-6 w-6 text-primary" />
    },
    {
      title: "Countries Served",
      value: "50+",
      icon: <Globe2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Quality Inspections",
      value: "10,000+",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="py-12 border-y bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center space-y-3">
              <div className="p-3 bg-primary/5 rounded-full">
                {metric.icon}
              </div>
              <h4 className="text-3xl font-bold tracking-tight">{metric.value}</h4>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
