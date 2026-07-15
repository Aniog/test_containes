import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-text-primary mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <div className="py-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-text-muted 
                       hover:text-accent-gold transition-colors no-underline"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>
        </div>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-16">
          <ProductGallery images={product.images} name={product.name} />
          <div className="md:pt-4">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl pb-16">
          <ProductAccordion product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </main>
  );
}