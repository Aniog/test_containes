import { Globe2 } from "lucide-react";

const REGIONS = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Australia",
  "Canada",
  "UAE",
  "Mexico",
  "Brazil",
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-x flex flex-col items-center gap-6 py-10 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <Globe2 className="h-4 w-4 text-primary" />
          Trusted by buyers in 40+ countries
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-muted-foreground/80">
          {REGIONS.map((region) => (
            <li key={region} className="whitespace-nowrap">
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustStrip;
