import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
        <h2 className="font-serif text-2xl text-velmora-espresso">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="mt-4 btn-outline">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Details */}
          <div className="flex flex-col">
            {/* Breadcrumb */}
            <button
              onClick={() => navigate('/shop')}
              className="text-xs text-velmora-stone tracking-wide hover:text-velmora-gold transition-colors mb-4"
            >
              &larr; Back to Shop
            </button>

            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-espresso font-medium">
              {product.name}
            </h1>

            <p className="mt-2 font-sans text-xl text-velmora-gold-dark">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-stone-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 text-sm md:text-base text-velmora-stone leading-relaxed">
              {product.description}
            </p>

            <hr className="hairline-divider my-6" />

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase font-medium text-velmora-espresso mb-3">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2.5 text-xs tracking-wide uppercase border transition-all ${
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-gold'
                      }`}
                    >
                      {v} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase font-medium text-velmora-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center border-t border-b border-velmora-sand text-sm tabular-nums text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full transition-all duration-300 ${
                added ? 'bg-green-600 hover:bg-green-600' : ''
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'} — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="mt-3 text-xs text-center text-velmora-stone">
              Free shipping on all orders
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </>
  );
}
