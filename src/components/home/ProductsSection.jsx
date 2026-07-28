import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/siteData";
import { Cpu, Cog, Home, Shirt, Package, Baby, Sparkles, Tent } from "lucide-react";

const iconMap = {
  electronics: Cpu,
  machinery: Cog,
  "home-garden": Home,
  apparel: Shirt,
  packaging: Package,
  toys: Baby,
  beauty: Sparkles,
  sports: Tent,
};

export default function ProductsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Products We Source
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Broad category coverage
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We source across major manufacturing categories in China. If we are not the right fit, we will tell you upfront.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => {
            const Icon = iconMap[category.id];
            return (
              <Card key={category.id} className="transition hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3 text-base">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{category.examples}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">See All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
