import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, Heart } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import Accordion from '@/components/product/Accordion';
import RelatedProducts from '@/components/product/RelatedProducts';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setQuantity(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => {
      openCart();
      setAdded(false);
    }, 600);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <div className="flex items-center gap-2 text-xs text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery product={product} />
          </div>

          {/* Product Info */}
          <div className="flex flex-col animate-slide-up">
            <div className="flex-1">
              <p className="text-[11px] tracking-[0.15em] uppercase text-taupe mb-3">
                {product.category}
              </p>

              <h1 className="product-name text-2xl md:text-3xl lg:text-4xl mb-4 text-espresso">
                {product.name}
              </h1>

              <p className="text-xl md:text-2xl font-light text-espresso mb-4">
                ${product.price}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-sm text-taupe leading-relaxed mb-8">
                {product.description}
              </p>

              {product.variants.length > 1 && (
                <div className="mb-6">
                  <p className="text-[11px] tracking-[0.1em] uppercase text-espresso mb-3">
                    Finish
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant, i) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(i)}
                        className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                          selectedVariant === i
                            ? 'border-espresso bg-espresso text-cream'
                            : 'border-border text-espresso hover:border-taupe'
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <p className="text-[11px] tracking-[0.1em] uppercase text-espresso mb-3">
                  Quantity
                </p>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-taupe hover:text-espresso transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-taupe hover:text-espresso transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 text-sm tracking-[0.15em] uppercase transition-all duration-500 flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-gold text-white hover:bg-gold-dark hover:shadow-lg'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Bag
                  </>
                ) : (
                  `Add to Bag — $${(product.price * quantity).toFixed(2)}`
                )}
              </button>

              <p className="text-center text-[11px] text-taupe mt-3">
                Free worldwide shipping · 30-day returns
              </p>
            </div>

            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-espresso">Materials:</strong> {product.materials}</p>
                <p><strong className="text-espresso">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <ScrollReveal>
        <RelatedProducts currentId={product.id} category={product.category} />
      </ScrollReveal>
    </div>
  );
}