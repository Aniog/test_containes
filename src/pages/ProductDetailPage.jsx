import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold');
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-espresso mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-taupe hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ImageGallery product={product} />

          {/* Details */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase text-espresso leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-sand/50 text-sand/50'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-espresso mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="w-full hairline mb-7" />

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-wider uppercase text-espresso font-medium mb-3">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-sans text-sm tracking-wide rounded-full border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-white'
                          : 'border-sand/60 text-espresso hover:border-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-espresso font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand/50 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-espresso hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm text-espresso min-w-[40px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-espresso hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full text-base py-4 ${
                added ? 'bg-green-600 hover:bg-green-600' : ''
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {added && (
              <p className="text-center text-xs text-green-600 mt-3 animate-fade-in">
                Added to your bag!{' '}
                <button onClick={openCart} className="underline hover:text-green-700">
                  View Bag
                </button>
              </p>
            )}

            {/* Accordions */}
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding mt-24">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-espresso">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
