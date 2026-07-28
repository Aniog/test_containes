import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

export default function Products() {
  return (
    <>
      <PageHeader
        title="Products We Source"
        subtitle="From electronics to home goods, we help you find the right manufacturer in China."
        breadcrumbs={[{ label: "Products We Source" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => {
              const Icon = iconMap[category.id];
              return (
                <Card key={category.id} className="transition hover:shadow-md">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {category.examples}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-navy-800 p-8 text-center md:p-12">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              Don't see your product category?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">
              We source many more product types. Send us your specs and we will let you know if we can help.
            </p>
            <a
              href="/contact?quote=true"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Request a Free Sourcing Quote
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
