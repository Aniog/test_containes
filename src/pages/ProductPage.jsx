import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';
import { useCartActions } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartActions();
  const toast = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    toast(`Added "${product.name}" to your bag`);
    setQuantity(1);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-site py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Details */}
          <div className="animate-slide-up space-y-6">
            {/* Category breadcrumb */}
            <Link to={`/shop?category=${product.category}`} className="text-[11px] tracking-widest uppercase text-velmora-warmgray hover:text-velmora-gold transition-colors">
              {product.category}
            </Link>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide text-velmora-charcoal leading-tight">
              {product.name.toUpperCase()}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-velmora-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-velmora-stone text-velmora-stone'}`} />
                ))}
                <span className="text-xs text-velmora-warmgray ml-1">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-velmora-warmgray leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-200 ${
                      selectedVariant === i
                        ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                        : 'border-velmora-stone/60 text-velmora-warmgray hover:border-velmora-warmgray'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-stone/60 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAdd} className="btn-primary w-full">
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-6 pt-2">
              <button className="flex items-center gap-2 text-xs text-velmora-warmgray hover:text-velmora-charcoal transition-colors">
                <Heart className="w-4 h-4" /> Wishlist
              </button>
              <button className="flex items-center gap-2 text-xs text-velmora-warmgray hover:text-velmora-charcoal transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-velmora-stone/40">
              <div className="flex items-center gap-2 text-[10px] text-velmora-warmgray">
                <Truck className="w-3.5 h-3.5 text-velmora-gold/70" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-[10px] text-velmora-warmgray">
                <RotateCcw className="w-3.5 h-3.5 text-velmora-gold/70" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-[10px] text-velmora-warmgray">
                <ShieldCheck className="w-3.5 h-3.5 text-velmora-gold/70" />
                1-Year Warranty
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <ProductAccordion title="Description">
                <p>{product.description}</p>
              </ProductAccordion>
              <ProductAccordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-charcoal">Care:</strong> {product.care}</p>
              </ProductAccordion>
              <ProductAccordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </ProductAccordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24 pt-16 border-t border-velmora-stone/40">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
