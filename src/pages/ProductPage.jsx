import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductAccordion from '../components/product/ProductAccordion';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-8 pb-16">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-[#9A9590] mb-8">
          <Link to="/" className="hover:text-[#C9A962] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-[#C9A962] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link 
            to={`/shop?category=${product.category}`} 
            className="hover:text-[#C9A962] transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#6B6560]">{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />
            
            {/* Accordions */}
            <div className="mt-12">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </main>
  );
}
