import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import Accordion from "@/components/product/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-clay-900 mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-outline text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-clay-400 hover:text-clay-700 transition-colors font-sans uppercase tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Shop
          </Link>
        </div>

        {/* Product layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <div className="md:sticky md:top-28 md:self-start">
            <ProductInfo product={product} />
            <Accordion />
          </div>
        </div>

        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}