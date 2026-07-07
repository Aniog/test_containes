import { useParams, Link } from 'react-router-dom';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl text-espresso-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-taupe mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-taupe">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-gold transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to={`/shop?category=${product.category.toLowerCase()}`}
                className="hover:text-gold transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-espresso-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso-900 text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                showQuickAdd={false}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
