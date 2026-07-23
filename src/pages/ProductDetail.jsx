import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-taupe font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-gold text-[10px] uppercase tracking-[0.25em] font-sans mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-espresso">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl font-sans text-espresso font-medium">${product.price}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm text-taupe font-sans">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-taupe leading-relaxed mt-6 font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-espresso font-sans mb-3">
                Finish: <span className="text-gold">{variant === 'gold' ? '18K Gold' : 'Silver Tone'}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-sans border transition-all ${
                    variant === 'gold'
                      ? 'bg-gold text-white border-gold'
                      : 'border-warm-border text-espresso hover:border-gold'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-sans border transition-all ${
                    variant === 'silver'
                      ? 'bg-gold text-white border-gold'
                      : 'border-warm-border text-espresso hover:border-gold'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-espresso font-sans mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-warm-border flex items-center justify-center hover:border-gold transition-colors text-sm"
                >
                  &minus;
                </button>
                <span className="w-8 text-center text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-warm-border flex items-center justify-center hover:border-gold transition-colors text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 flex items-center justify-center gap-2 text-sm ${
                added ? 'bg-green-600 hover:bg-green-600' : ''
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>

            {/* Accordions */}
            <ProductAccordion
              description={product.description}
              material={product.material}
              care={product.care}
            />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentId={product.id} category={product.category} />
    </main>
  );
}