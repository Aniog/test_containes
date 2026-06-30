import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-wider text-text-primary hover:text-gold-accent transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all ${open ? 'max-h-48 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  const [variant, setVariant] = useState('18K Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-warm-gray">Product not found</p>
          <Link to="/shop" className="mt-4 text-sm uppercase tracking-wider text-gold-accent hover:underline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-warm-gray mb-6">
          <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-ivory rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-text-primary leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-star-gold text-star-gold'
                        : 'text-warm-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-medium text-text-primary">${product.price}</p>

            <p className="mt-6 text-sm md:text-base text-warm-gray leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-text-primary mb-3">Finish</p>
              <div className="flex gap-3">
                {['18K Gold', 'Silver Tone'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-sm transition-all duration-200 ${
                      variant === v
                        ? 'bg-text-primary text-white'
                        : 'bg-transparent border border-warm-border text-text-primary hover:border-text-primary'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-warm-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-sm hover:text-gold-accent transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2.5 text-sm min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-sm hover:text-gold-accent transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                  added
                    ? 'bg-text-primary text-white'
                    : 'bg-gold-accent text-white hover:bg-gold-accent/90'
                }`}
              >
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-text-primary">Material:</strong> {product.material}</p>
                <p><strong className="text-text-primary">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery 5–8 business days.
                30-day return window for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 hairline">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-6 md:mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden rounded-sm">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-xs uppercase tracking-wider text-text-primary font-medium">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}