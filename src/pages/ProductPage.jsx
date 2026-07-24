import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';
import { products } from '@/data/products';

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="pt-24 pb-20 bg-cream-100 min-h-screen">
        <div className="container-narrow text-center">
          <h1 className="heading-section text-charcoal-800 mb-4">Product Not Found</h1>
          <p className="text-sm text-charcoal-400 mb-8">The piece you&apos;re looking for doesn&apos;t exist.</p>
          <button onClick={() => navigate('/shop')} className="btn-outline">
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  return (
    <main ref={containerRef}>
      {/* Product detail */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 bg-cream-100">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8">
            <ol className="flex items-center gap-2 text-xs text-charcoal-400">
              <li><a href="/" className="hover:text-charcoal-700 transition-colors">Home</a></li>
              <li>/</li>
              <li><a href="/shop" className="hover:text-charcoal-700 transition-colors">Shop</a></li>
              <li>/</li>
              <li className="text-charcoal-600 capitalize">{product.category}</li>
            </ol>
          </nav>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Left: Images */}
            <ImageGallery images={product.images} productName={product.name} />

            {/* Right: Product info */}
            <div>
              <ProductInfo product={product} />
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <RelatedProducts products={products} currentProductId={product.id} />
    </main>
  );
}
