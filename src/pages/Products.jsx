import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "@/api/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import { Settings, Info, Loader2 } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  return (
    <div ref={containerRef} className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 id="page-title" className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Industrial <span className="text-primary">Machines</span>
          </h1>
          <p id="page-subtitle" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of high-performance double folding machines, sheet metal folders, and CNC solutions designed for precision and throughput.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const titleId = `product-title-${product.id}`;
                const descId = `product-desc-${product.id}`;
                const categoryId = `product-cat-${product.id}`;

                return (
                  <div key={product.id} className="group border bg-white flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        alt={product.data.name}
                        data-strk-img-id={`prod-img-${product.id}`}
                        data-strk-img={`[${categoryId}] [${titleId}] [page-subtitle]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span 
                          id={categoryId}
                          className="px-3 py-1 bg-primary text-white text-[10px] uppercase font-bold tracking-widest"
                        >
                          {product.data.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                      <h3 
                        id={titleId}
                        className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors"
                      >
                        {product.data.name}
                      </h3>
                      <p 
                        id={descId}
                        className="text-muted-foreground text-sm mb-6 line-clamp-3"
                      >
                        {product.data.description}
                      </p>
                      
                      {product.data.features && (
                        <div className="space-y-2 mb-8">
                          {product.data.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center text-xs font-medium text-foreground">
                              <Settings className="h-3 w-3 mr-2 text-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-auto flex gap-4">
                        <Link
                          to={`/contact?machine=${encodeURIComponent(product.data.name)}`}
                          className="flex-1 inline-flex items-center justify-center py-3 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all"
                        >
                          Inquire
                        </Link>
                        <button className="p-3 border hover:border-primary hover:text-primary transition-all">
                          <Info className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-none">
              <p className="text-muted-foreground italic">No machines currently listed. Please contact us for custom orders.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-primary p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Precision Intelligence</h2>
            <p className="text-slate-200">Get the latest technical specifications and industry insights delivered to your inbox.</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex">
              <input 
                type="email" 
                placeholder="Engineering Email" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20"
              />
              <button className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
