import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumbs */}
      <div className="section-padding py-4">
        <nav className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-charcoal/50">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Info */}
            <div className="lg:py-4">
              <ProductInfo product={product} />
              <div className="mt-8">
                <ProductAccordions product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-padding">
        <div className="hairline max-w-7xl mx-auto" />
      </div>

      {/* Related products */}
      <RelatedProducts currentProductId={product.id} />
    </main>
  );
}
