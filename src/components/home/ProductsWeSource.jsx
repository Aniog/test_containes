import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const products = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, small appliances, accessories, lighting, and OEM electronics with CE/FCC/RoHS.",
    imgId: "products-home-electronics-3a91cf",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Kitchenware, storage, small appliances, decor and seasonal home goods at scale.",
    imgId: "products-home-kitchen-7d22ae",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "Knitwear, woven garments, accessories and home textiles with private label packaging.",
    imgId: "products-home-apparel-49f1ba",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Indoor and outdoor furniture, flat-pack and assembled, for retail and contract projects.",
    imgId: "products-home-furniture-8c40d3",
  },
  {
    id: "industrial-machinery",
    title: "Industrial & Machinery",
    desc: "Components, hardware, packaging machinery, and B2B equipment from verified manufacturers.",
    imgId: "products-home-industrial-1e6d77",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Tools, accessories, packaging and OEM formulations with compliant documentation.",
    imgId: "products-home-beauty-5b9342",
  },
];

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p id="products-home-eyebrow" className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
              Products We Source
            </p>
            <h2 id="products-home-title" className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
              Categories we work with every day
            </h2>
            <p className="mt-4 text-[#475569] text-base md:text-lg">
              We focus on consumer and light industrial categories where China
              still offers the strongest combination of price, capacity and
              speed.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F4E79] hover:text-[#C8102E] self-start md:self-auto"
          >
            See all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group rounded-xl overflow-hidden border border-[#D9E2EC] bg-white hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-[#EEF2F7] overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-home-${product.id}-desc] [product-home-${product.id}-title] [products-home-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-home-${product.id}-title`} className="text-lg font-semibold text-[#0B2545]">
                  {product.title}
                </h3>
                <p id={`product-home-${product.id}-desc`} className="mt-1.5 text-sm text-[#475569] leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsWeSource;
