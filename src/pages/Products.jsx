import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";

const categories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    description:
      "Consumer electronics, PCBA, cables, chargers, power banks, Bluetooth devices, smart home products, and IoT modules.",
    regions: "Shenzhen, Dongguan, Guangzhou",
    imgId: "products-electronics-1a2b3c",
    titleId: "products-electronics-title",
    descId: "products-electronics-desc",
  },
  {
    id: "machinery",
    title: "Machinery & Tools",
    description:
      "Industrial equipment, power tools, CNC machined parts, metal hardware, fasteners, valves, pumps, and mechanical components.",
    regions: "Ningbo, Wenzhou, Shanghai",
    imgId: "products-machinery-4d5e6f",
    titleId: "products-machinery-title",
    descId: "products-machinery-desc",
  },
  {
    id: "textiles",
    title: "Textiles & Apparel",
    description:
      "Fabrics, garments, bags, backpacks, footwear, hats, scarves, gloves, and fashion accessories.",
    regions: "Guangzhou, Hangzhou, Suzhou",
    imgId: "products-textiles-7g8h9i",
    titleId: "products-textiles-title",
    descId: "products-textiles-desc",
  },
  {
    id: "home-goods",
    title: "Home & Kitchen",
    description:
      "Furniture, kitchenware, cookware, home decor, lighting fixtures, bathroom accessories, and storage solutions.",
    regions: "Foshan, Zhongshan, Ningbo",
    imgId: "products-home-0j1k2l",
    titleId: "products-home-title",
    descId: "products-home-desc",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    description:
      "Custom boxes, corrugated cartons, labels, stickers, retail packaging, gift bags, and promotional printed materials.",
    regions: "Shenzhen, Dongguan, Yiwu",
    imgId: "products-packaging-3m4n5o",
    titleId: "products-packaging-title",
    descId: "products-packaging-desc",
  },
  {
    id: "automotive",
    title: "Automotive & Parts",
    description:
      "Auto parts, EV charging components, car accessories, diagnostic tools, lighting, and interior accessories.",
    regions: "Wenzhou, Taizhou, Ningbo",
    imgId: "products-automotive-6p7q8r",
    titleId: "products-automotive-title",
    descId: "products-automotive-desc",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    description:
      "Camping gear, fitness equipment, bicycles, water sports accessories, tents, backpacks, and outdoor clothing.",
    regions: "Yiwu, Taizhou, Xiamen",
    imgId: "products-sports-9s8d7f",
    titleId: "products-sports-title",
    descId: "products-sports-desc",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    description:
      "Cosmetics packaging, skincare tools, hair accessories, manicure sets, bathroom accessories, and personal hygiene products.",
    regions: "Guangzhou, Yiwu, Ningbo",
    imgId: "products-beauty-1g2h3i",
    titleId: "products-beauty-title",
    descId: "products-beauty-desc",
  },
  {
    id: "toys",
    title: "Toys & Baby Products",
    description:
      "Plastic toys, educational toys, plush toys, baby gear, strollers, feeding accessories, and children's furniture.",
    regions: "Chenghai, Yiwu, Dongguan",
    imgId: "products-toys-4j5k6l",
    titleId: "products-toys-title",
    descId: "products-toys-desc",
  },
];

export default function Products() {
  return (
    <PageLayout title="Products We Source">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Products We Source
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                We source across China's major manufacturing hubs. If your product
                category is not listed, reach out anyway - we likely have relevant
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="group rounded-xl bg-white border border-border-light overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                    <img
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-5 lg:p-6">
                    <h3
                      id={cat.titleId}
                      className="text-base font-semibold text-text-primary mb-2"
                    >
                      {cat.title}
                    </h3>
                    <p
                      id={cat.descId}
                      className="text-sm text-text-secondary leading-relaxed mb-3"
                    >
                      {cat.description}
                    </p>
                    <p className="text-xs text-text-muted">
                      Key regions: {cat.regions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
