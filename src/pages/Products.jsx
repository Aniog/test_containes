import PageHeader from "@/components/sections/PageHeader";
import Products from "@/components/sections/Products";
import CTABanner from "@/components/sections/CTABanner";

const clusters = [
  {
    region: "Guangdong (Shenzhen, Dongguan, Foshan, Guangzhou)",
    items: "Consumer electronics, hardware, furniture, lighting, plastics",
  },
  {
    region: "Zhejiang (Yiwu, Ningbo, Hangzhou)",
    items: "Small commodities, promotional gifts, apparel, home goods, packaging",
  },
  {
    region: "Jiangsu & Shanghai",
    items: "Industrial equipment, machinery, OEM metal parts, textiles",
  },
  {
    region: "Fujian (Quanzhou, Xiamen)",
    items: "Footwear, sportswear, outdoor gear, stone and ceramic products",
  },
  {
    region: "Shandong",
    items: "Auto parts, agricultural products, industrial chemicals, hardware",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products we source"
        title="Categories and supplier clusters we know best"
        description="A non-exhaustive list of categories we have sourced for clients. We focus on consumer and light-industrial goods where supplier risk and quality control matter."
      />
      <Products />

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Supplier clusters
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            Where we source from in China
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            China's manufacturing is highly regional. We work directly with
            factories in the main industrial clusters relevant to each product.
          </p>

          <div className="mt-10 space-y-4">
            {clusters.map((c) => (
              <div
                key={c.region}
                className="rounded-2xl border border-brand-line bg-white p-6"
              >
                <h3 className="text-base font-semibold text-brand-ink md:text-lg">
                  {c.region}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {c.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see your category? Ask us."
        description="We've sourced niche products across many industries. If we can't help, we'll tell you honestly."
      />
    </>
  );
}
