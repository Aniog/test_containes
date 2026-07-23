import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import RelatedProducts from '@/components/product/RelatedProducts';
import { toast } from 'sonner';

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-xs uppercase tracking-[0.15em] font-medium text-velvet">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-taupe leading-relaxed font-light">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet">Product Not Found</h1>
          <button
            onClick={() => navigate('/shop')}
            className="mt-4 px-6 py-3 bg-gold text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="md:pt-6">
            {product.tag && (
              <span className="inline-block px-2.5 py-1 bg-blush text-[10px] uppercase tracking-[0.15em] text-velvet font-medium mb-4">
                {product.tag}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velvet font-medium tracking-[0.1em] uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-taupe">({product.reviews} reviews)</span>
            </div>

            <p className="mt-5 font-serif text-xl md:text-2xl text-velvet font-medium">
              ${product.price}
            </p>

            <p className="mt-5 text-sm text-taupe leading-relaxed font-light">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-[0.15em] text-velvet font-medium">
                Tone
              </span>
              <div className="flex items-center gap-3 mt-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-colors ${
                      variant === v
                        ? 'border-gold bg-gold/10 text-velvet'
                        : 'border-linen text-taupe hover:border-taupe'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-[0.15em] text-velvet font-medium">
                Quantity
              </span>
              <div className="flex items-center border border-linen mt-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-linen transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-linen transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-gold text-velvet text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-hover transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Trust microcopy */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.1em] text-taupe">
              <span>Free shipping over $50</span>
              <span className="hidden sm:inline">|</span>
              <span>30-day returns</span>
              <span className="hidden sm:inline">|</span>
              <span>Secure checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description">
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.materialsCare}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shippingReturns}
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts excludeId={product.id} />
    </div>
  );
}
