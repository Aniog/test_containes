import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CtaButton from "@/components/shared/CtaButton";
import InquiryForm from "@/components/shared/InquiryForm";

const categories = [
  {
    title: "Industrial & Hardware",
    items: ["Machinery parts", "Metal components", "Tools and fasteners", "OEM industrial products", "Casting and forging parts"],
  },
  {
    title: "Electronics & Accessories",
    items: ["Consumer electronics", "Cables and chargers", "Smart devices", "Audio products", "Electronic components"],
  },
  {
    title: "Home, Garden & Furniture",
    items: ["Furniture", "Lighting fixtures", "Kitchenware", "Bathroom accessories", "Outdoor and garden products"],
  },
  {
    title: "Apparel, Bags & Textiles",
    items: ["Clothing and uniforms", "Bags and luggage", "Fabrics and textiles", "Fashion accessories", "Workwear"],
  },
  {
    title: "Packaging & Printing",
    items: ["Retail packaging boxes", "Paper and plastic bags", "Labels and stickers", "Printed materials", "Custom gift boxes"],
  },
  {
    title: "Promotional & Consumer Goods",
    items: ["Branded merchandise", "Corporate gifts", "Pet products", "Toys and games", "Sports and fitness accessories"],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">Products We Source</span>
            <h1 id="products-title" className="text-4xl md:text-5xl font-bold mb-6">Products We Can Help You Source</h1>
            <p id="products-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed">
              We work across a wide range of categories. If your product is made in China, we can likely support your sourcing process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Sourcing Categories"
            description="Below are the product categories we most commonly support. Contact us if your product is not listed."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => {
              const titleId = `cat-title-${index}`;
              const descId = `cat-desc-${index}`;
              const imgId = `cat-img-${index}`;

              return (
                <div key={category.title} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all">
                  <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}] [products-title] [products-subtitle]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 id={titleId} className="text-lg font-semibold text-slate-900 mb-3">{category.title}</h3>
                    <p id={descId} className="sr-only">{category.title} sourcing from China including {category.items.join(", ")}</p>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader align="left" title="Custom or Complex Products?" description="We also support custom manufacturing, private labeling, and assembly projects." />
              <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  If your product requires molds, custom packaging, multiple components, or assembly, we can coordinate the full supply chain and manage supplier communication on your behalf.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">·</span> Custom OEM and ODM projects</li>
                  <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">·</span> Private label and packaging design</li>
                  <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">·</span> Multi-component assembly coordination</li>
                </ul>
                <CtaButton to="/contact" className="mt-4">Discuss Your Product</CtaButton>
              </div>
            </div>
            <InquiryForm title="Request a Product Sourcing Quote" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
