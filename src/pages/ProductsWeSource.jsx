import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ProductsWeSource() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      desc: "Smartphones, wearables, audio devices, smart home gadgets, and tech accessories.",
    },
    {
      id: "home-garden",
      title: "Home & Garden",
      desc: "Furniture, home decor, kitchenware, gardening tools, and outdoor equipment.",
    },
    {
      id: "apparel",
      title: "Apparel & Accessories",
      desc: "Clothing, footwear, bags, jewelry, and fashion accessories for all seasons.",
    },
    {
      id: "toys-hobbies",
      title: "Toys & Hobbies",
      desc: "Educational toys, remote control vehicles, action figures, and sports equipment.",
    },
    {
      id: "health-beauty",
      title: "Health & Beauty",
      desc: "Skincare, cosmetics, personal care electronics, and wellness products.",
    },
    {
      id: "industrial",
      title: "Industrial & Machinery",
      desc: "Manufacturing equipment, tools, hardware, raw materials, and packaging supplies.",
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Helmet>
        <title>Products We Source | SSourcing China</title>
        <meta name="description" content="Explore the categories of products we reliably source from China, including electronics, home goods, apparel, toys, and industrial machinery." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Products We Source</h1>
          <p id="page-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">We have deep connections across multiple manufacturing clusters in China, allowing us to source a vast array of high-quality products.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all hover:border-blue-200">
                <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`prod-cat-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}] manufacturing supply`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 id={`cat-title-${cat.id}`} className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p id={`cat-desc-${cat.id}`} className="text-slate-600 mb-6 flex-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your product category?</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">This is just a fraction of what we handle. Let us know what you're looking for, and our sourcing experts will locate the right factory.</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link to="/contact">Ask About Your Product</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}