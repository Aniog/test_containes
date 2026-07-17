import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="section-heading text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-12">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                  <img
                    src={p.images[0].src}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="product-name">{p.name}</p>
                  <p className="product-price mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
