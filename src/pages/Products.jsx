import PageHeader from "@/components/sections/PageHeader";
import ProductsGrid from "@/components/sections/ProductsGrid";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle2, XCircle } from "lucide-react";

const WE_DO = [
  "Custom OEM products with your branding and packaging",
  "Standard catalog products with light customization",
  "Mid-volume orders, typically USD 5,000–500,000 per shipment",
  "Categories requiring certifications: CE, FCC, RoHS, REACH, EN71, CPSIA, BSCI",
  "Mixed-container orders combining 2–5 suppliers in one shipment",
];

const WE_DONT = [
  "Single-unit dropshipping or personal-use orders",
  "Counterfeit, trademark-infringing, or restricted goods",
  "Categories requiring food, pharmaceutical, or medical regulatory approval",
  "Heavy machinery requiring on-site installation services",
];

export default function Products() {
  return (
    <div>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories where we have the deepest factory network"
        description="Most B2B buyers we work with order across several categories. Here's where we have the strongest supplier base and inspection experience."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Products We Source" }]}
      />

      <ProductsGrid />

      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-surface border border-line p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">What we do</h3>
              <p className="mt-2 text-sm text-muted">
                We work best with B2B buyers and DTC brands sourcing products at commercial volume.
              </p>
              <ul className="mt-6 space-y-3">
                {WE_DO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-verified shrink-0 mt-0.5" />
                    <span className="text-ink leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface border border-line p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">What we don't do</h3>
              <p className="mt-2 text-sm text-muted">
                We turn down projects we can't deliver well. It saves everyone time.
              </p>
              <ul className="mt-6 space-y-3">
                {WE_DONT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <XCircle className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                    <span className="text-ink leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for a category not listed here?"
        description="If your product is borderline or unusual, just ask. We'll tell you honestly whether we can help — or recommend someone who can."
        buttonLabel="Ask About My Product"
      />
    </div>
  );
}
