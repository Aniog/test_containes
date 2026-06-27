import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import Container from "@/components/layout/Container";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="bg-bone min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <p className="text-label text-muted">404</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-espresso">
              Piece not found
            </h1>
            <p className="mt-3 text-espresso-soft">
              The piece you're looking for has been moved or sold out.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
            >
              Browse the collection
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="bg-bone">
      {/* Breadcrumbs */}
      <div className="pt-24 md:pt-28 border-b border-line">
        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="py-4 text-xs text-muted flex items-center flex-wrap gap-x-2"
          >
            <Link to="/" className="hover:text-espresso transition-colors">
              Home
            </Link>
            <ChevronRight strokeWidth={1.25} className="w-3 h-3" />
            <Link to="/shop" className="hover:text-espresso transition-colors">
              Shop
            </Link>
            <ChevronRight strokeWidth={1.25} className="w-3 h-3" />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-espresso transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight strokeWidth={1.25} className="w-3 h-3" />
            <span className="text-espresso truncate">{product.name}</span>
          </nav>
        </Container>
      </div>

      <section className="py-10 md:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery images={product.images} name={product.name} />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <ProductInfo product={product} />
            </div>
          </div>
        </Container>
      </section>

      <RelatedProducts product={product} />
    </main>
  );
}