import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-brand-muted font-sans leading-relaxed">
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
  const containerRef = useRef(null);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedTone('gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-xs font-sans tracking-super-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-square overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]${selectedImage > 0 ? ' worn' : ''}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-brand-warm border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]${i > 0 ? ' worn' : ''}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.round(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-brand-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-xl font-serif text-brand-charcoal">
              ${product.price}
            </p>

            <p
              id={product.descId}
              className="mt-4 text-sm text-brand-muted font-sans leading-relaxed"
            >
              {product.description}. Crafted with premium {product.material} materials for lasting shine and comfort. Each piece is nickel-free and hypoallergenic.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal">
                Tone
              </span>
              <div className="flex gap-3 mt-2">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTone(t)}
                    className={`px-5 py-2 text-xs font-sans font-medium tracking-wide uppercase border transition-all duration-200 ${
                      selectedTone === t
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal">
                Quantity
              </span>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-sans text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="mt-8 w-full bg-brand-gold text-white py-4 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold-dark transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning addition to any jewelry collection.
                  {product.description}. Designed with both style and comfort in mind,
                  this piece transitions effortlessly from day to night.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over stainless steel</li>
                  <li>Nickel-free and hypoallergenic</li>
                  <li>Tarnish-resistant coating</li>
                  <li>Store in a cool, dry place when not wearing</li>
                  <li>Avoid contact with perfume, lotions, and water</li>
                  <li>Clean gently with a soft cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5-10 business days</li>
                  <li>Express delivery: 2-4 business days (additional fee)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-brand-warm mb-3">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal">
                  {rp.name}
                </h3>
                <p className="text-sm font-sans font-medium text-brand-charcoal mt-0.5">
                  ${rp.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
