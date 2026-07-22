import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-taupe hover:text-espresso underline">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-espresso capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <ProductDetail product={product} />

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductPage;
