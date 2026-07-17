import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/home/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const related = getRelatedProducts(product.id, 4);

  const accordionItems = [
    { title: "Description", content: <p>{product.description}</p> },
    { title: "Materials & Care", content: <p>{product.materials}<br /><br />{product.care}</p> },
    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
  ];

  return (
    <main className="bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb / back link — mobile only sticky back at top */}
      <div className="container-wide pt-4 md:pt-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-2 text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <section className="container-wide py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
        <div>
          <ImageGallery product={product} />
        </div>
        <div className="md:sticky md:top-28 md:self-start">
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Accordions */}
      <section className="container-narrow pb-20 md:pb-28">
        <Accordion items={accordionItems} defaultOpen={0} />
      </section>

      {/* Related */}
      <section className="border-t border-hairline bg-ivory-soft/50">
        <div className="container-wide py-20 md:py-28">
          <div className="text-center mb-10 md:mb-14">
            <p className="kicker mb-3">You may also love</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink text-balance">
              Pieces that pair beautifully.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
