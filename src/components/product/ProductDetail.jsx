import { useParams, Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import Accordion from '../ui/Accordion';
import RelatedProducts from './RelatedProducts';
import { getProductBySlug } from '../../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-500 hover:text-gold-600 font-sans">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <p>Each piece is crafted with attention to detail and designed to become a treasured part of your jewelry collection.</p>
        </div>
      )
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p><strong>Material:</strong> {product.details.material}</p>
          <p><strong>Care Instructions:</strong> {product.details.care}</p>
          <ul className="list-disc list-inside space-y-1 text-softGray">
            <li>Apply perfume and lotions before wearing</li>
            <li>Remove before swimming or showering</li>
            <li>Store in a cool, dry place</li>
            <li>Clean gently with a soft cloth</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>{product.details.shipping}</p>
          <p><strong>Returns:</strong> We offer a 30-day return policy for unworn items in original packaging.</p>
        </div>
      )
    }
  ];

  return (
    <main className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm font-sans">
            <Link to="/" className="text-softGray hover:text-charcoal transition-colors">
              Home
            </Link>
            <span className="text-softGray">/</span>
            <Link to="/shop" className="text-softGray hover:text-charcoal transition-colors">
              Shop
            </Link>
            <span className="text-softGray">/</span>
            <span className="text-charcoal capitalize">{product.category}</span>
            <span className="text-softGray">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Details */}
      <section className="py-12 sm:py-16 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 sm:py-20">
        <RelatedProducts currentProductId={product.id} />
      </section>
    </main>
  );
};

export default ProductDetail;
