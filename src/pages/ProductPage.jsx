import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import { Star } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-sand-500 hover:text-velvet-700 transition-colors mb-8">
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="text-center mb-10">
              <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-velvet-800 font-light tracking-wide">
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-sand-100 rounded-sm overflow-hidden mb-3">
                    <div
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #d4b98e 0%, #8a5c3c 100%)',
                      }}
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-wider uppercase text-velvet-800 mb-1">
                    {rp.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-velvet-700">
                    ${rp.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
