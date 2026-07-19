import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Star, ChevronRight, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-velmora-charcoal/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="serif-heading text-xs tracking-widestest transition-colors group-hover:text-velmora-gold">
          {title}
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 pb-6' : 'max-h-0')}>
        <div className="text-sm text-velmora-taupe leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="serif-heading text-3xl mb-8">Product Not Found</h1>
        <Link to="/shop">
          <Button variant="outline">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-velmora-taupe mb-12">
          <Link to="/" className="hover:text-velmora-charcoal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-charcoal truncate max-w-[150px]">{product.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-[60%] flex flex-col-reverse lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 lg:w-24">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    'w-20 aspect-[3/4] overflow-hidden bg-velmora-cream transition-opacity border',
                    activeImageIndex === idx ? 'border-velmora-gold' : 'border-transparent opacity-60'
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[prod-title-detail] view ${idx + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.title} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-velmora-cream overflow-hidden relative">
              <img
                data-strk-img-id={`main-img-${product.images[activeImageIndex].id}`}
                data-strk-img={`[prod-title-detail] product shot professional`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-velmora-gold scale-75 origin-left">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn('w-4 h-4', i < 4 ? 'fill-current' : 'text-gray-300')} />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-velmora-taupe">4.8 (24 Reviews)</span>
              </div>
              <h1 id="prod-title-detail" className="font-serif text-3xl lg:text-4xl uppercase tracking-widest leading-tight">
                {product.title}
              </h1>
              <p className="text-2xl text-velmora-charcoal">${product.price}</p>
            </div>

            <p className="text-velmora-taupe font-serif italic text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="hairline-divide" />

            {/* Variants */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal font-bold">Select Tone</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedVariant(tone)}
                    className={cn(
                      'px-8 py-3 text-xs uppercase tracking-widest border transition-all duration-300',
                      selectedVariant === tone
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-charcoal/10 hover:border-velmora-charcoal'
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center space-x-4 border border-velmora-charcoal w-fit px-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button 
                   onClick={() => setQuantity(quantity + 1)}
                   className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={() => addToCart({ ...product, variant: selectedVariant, quantity })}
                className="w-full py-5 text-base"
                variant="primary"
              >
                Add to Bag — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-4 py-8 border-t border-velmora-charcoal/5">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-taupe">
                 <div className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
                 <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-taupe">
                 <div className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
                 <span>18K Gold Plated</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p>Designed for daily wear, each piece is finished with a high-polish coat to ensure lasting brilliance and tarnish resistance.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Avoid direct contact with perfumes and lotions</li>
                  <li>Remove before swimming or exercising</li>
                  <li>Clean gently with a soft, lint-free cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Complimentary standard shipping on all orders. Express options available at checkout.</p>
                <p>We accept returns of unworn jewelry in original packaging within 30 days of purchase.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h2 className="serif-heading text-2xl mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
