import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import ProductCard from '@/components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900 mb-4">
            Product not found
          </h1>
          <Link to="/shop" className="btn-outline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Info */}
          <div>
            <ProductInfo product={product} />
            <ProductAccordions description={product.description} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="text-center mb-12">
              <span className="section-subtitle block mb-3">DISCOVER MORE</span>
              <h2 className="section-title text-2xl md:text-3xl">You May Also Like</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;
