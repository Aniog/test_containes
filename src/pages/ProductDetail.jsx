import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductById, getRelatedProducts } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-cream pt-20">
        <p className="font-cormorant text-2xl font-light text-charcoal">Product not found</p>
        <Link
          to="/shop"
          className="font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-inter text-xs text-taupe">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <ImageGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}
