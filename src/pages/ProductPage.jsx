import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';
import Button from '@/components/ui/Button';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-velmora-black mb-4">
            Product Not Found
          </h1>
          <p className="text-velmora-muted mb-8">The piece you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link to="/shop">
            <Button variant="accent">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-xs text-velmora-stone">
          <li><Link to="/" className="hover:text-velmora-gold-dark transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link to="/shop" className="hover:text-velmora-gold-dark transition-colors">Shop</Link></li>
          <li>/</li>
          <li><Link to={`/shop?category=${product.category}`} className="hover:text-velmora-gold-dark transition-colors capitalize">{product.category}</Link></li>
          <li>/</li>
          <li className="text-velmora-black truncate">{product.name}</li>
        </ol>
      </nav>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Info */}
          <ProductInfo product={product} />
        </div>

        {/* Accordions */}
        <ProductAccordions product={product} />

        {/* Related products */}
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </div>
  );
};

export default ProductPage;
