import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordions from "@/components/product/ProductAccordions";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getProductById } from "@/data/products";

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [id]);

  if (!product) {
    return (
      <main className="pt-32 pb-24">
        <Container>
          <div className="text-center py-24">
            <h1 className="font-serif text-4xl text-ink mb-4">Piece not found</h1>
            <p className="text-taupe mb-8">
              The piece you're looking for has either sold out or moved.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink border-b border-ink/40 hover:border-ink pb-1"
            >
              Back to the collection
              <ChevronRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main ref={topRef} className="pt-20 md:pt-24 bg-ivory">
      <Container className="py-10 md:py-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-taupe mb-10"
        >
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <ProductGallery product={product} />
          <div>
            <ProductInfo product={product} />
            <div className="mt-12">
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </Container>

      <RelatedProducts currentId={product.id} />
    </main>
  );
};

export default ProductPage;
