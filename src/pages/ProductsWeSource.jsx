import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";
import QuoteForm from "@/components/shared/QuoteForm";

const categories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    description:
      "Consumer electronics, mobile accessories, cables, chargers, batteries, PCBs, semiconductors, and IoT devices.",
    imgId: "cat-electronics-4a1b9c",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial Parts",
    description:
      "OEM components, tools, hardware, pumps, valves, fasteners, molds, and industrial equipment.",
    imgId: "cat-machinery-7d2e5f",
  },
  {
    id: "home",
    title: "Home, Furniture & Lighting",
    description:
      "Furniture, lighting fixtures, home decor, kitchenware, bathroom accessories, and storage products.",
    imgId: "cat-home-9c3a7d",
  },
  {
    id: "apparel",
    title: "Apparel, Bags & Accessories",
    description:
      "Garments, bags, footwear, jewelry, watches, belts, hats, and promotional merchandise.",
    imgId: "cat-apparel-1e8b2a",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    description:
      "Custom boxes, bags, labels, retail packaging, gift boxes, and printed marketing materials.",
    imgId: "cat-packaging-5f6c1d",
  },
  {
    id: "new-energy",
    title: "New Energy & Solar Products",
    description:
      "Solar panels, inverters, energy storage batteries, EV chargers, and related accessories.",
    imgId: "cat-energy-2b4e8a",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    description:
      "Skincare packaging, cosmetics, hair care tools, personal care appliances, and grooming products.",
    imgId: "cat-beauty-3d7a9e",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    description:
      "Fitness equipment, outdoor gear, camping products, bicycles, and sporting accessories.",
    imgId: "cat-sports-6e2b4c",
  },
  {
    id: "automotive",
    title: "Automotive & Motorcycle Parts",
    description:
      "Replacement parts, accessories, electronics, tools, and maintenance products for vehicles.",
    imgId: "cat-automotive-8f1d3a",
  },
];

export default function ProductsWeSource() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we can help you source"
        description="From industrial components to consumer goods, we connect you with the right manufacturers for your product category."
        queryId="products"
        query="[products-header-desc] [products-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Browse by product category"
            description="If you do not see your category, contact us. Our network covers many specialized industries."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <article
                key={category.id}
                className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <StockImage
                    id={category.imgId}
                    query={`[cat-desc-${category.id}] [cat-title-${category.id}] [products-section-title]`}
                    ratio="4x3"
                    width="600"
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`cat-title-${category.id}`} className="text-xl font-semibold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p id={`cat-desc-${category.id}`} className="text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Custom Projects"
                title="Do you have a custom product idea?"
                description="We help develop new products from concept to mass production. Our team can assist with design for manufacturing, prototyping, tooling, and supplier selection."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Design for manufacturing review",
                  "Prototype and sample development",
                  "Tooling and mold sourcing",
                  "Pilot run and mass production support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <StockImage
                id="custom-product-img-5a9c2d"
                query="[custom-section-desc] [custom-section-title]"
                ratio="4x3"
                width="800"
                alt="Custom product development"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
