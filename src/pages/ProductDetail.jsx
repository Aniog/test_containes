import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-beige">
      <button
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest text-ink font-medium transition-colors hover:text-gold"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-80 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-taupe font-light leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink">Product not found</h1>
          <Link to="/shop" className="text-gold text-sm uppercase tracking-widest mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product.id, product.name, product.price, product.images[0], variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/shop" className="text-xs uppercase tracking-widest text-taupe hover:text-ink transition-colors">
            Shop
          </Link>
          <span className="text-taupe mx-2">/</span>
          <span className="text-xs uppercase tracking-widest text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-beige-light overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 overflow-hidden border transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-beige hover:border-taupe'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-widest font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-beige'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">{product.reviews} reviews</span>
            </div>

            <p className="font-serif text-2xl text-ink mt-4">${product.price}</p>

            <p className="text-sm text-taupe font-light leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-ink mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
                      variant === v
                        ? 'border-ink bg-ink text-white'
                        : 'border-beige text-taupe hover:border-taupe'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Rhodium Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-beige w-fit">
                <button
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink hover:bg-beige-light transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  &minus;
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink hover:bg-beige-light transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              size="lg"
              className="w-full mt-8 text-sm"
              onClick={handleAddToCart}
            >
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </Button>

            {/* Accordions */}
            <div className="mt-10 border-t border-beige">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong className="text-ink">Materials:</strong> {product.details.materials}</p>
                <p className="mt-2"><strong className="text-ink">Care:</strong> {product.details.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p><strong className="text-ink">Shipping:</strong> {product.details.shipping}</p>
                <p className="mt-2"><strong className="text-ink">Returns:</strong> {product.details.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-beige">
          <h2 className="font-serif text-2xl md:text-3xl text-ink font-light uppercase tracking-wider mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] bg-beige-light overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-xs uppercase tracking-widest text-ink">{p.name}</h3>
                  <p className="text-sm text-taupe font-medium mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}