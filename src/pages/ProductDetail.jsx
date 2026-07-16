import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ImageGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              i === activeIndex ? 'border-gold-500' : 'border-transparent hover:border-charcoal-200'
            }`}
          >
            <img src={img} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square bg-cream-100 overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-charcoal-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-charcoal-800 uppercase tracking-wide">{title}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-charcoal-400" />
        ) : (
          <ChevronDown size={16} className="text-charcoal-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-charcoal-500 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = products.find(p => p.slug === slug);
    setProduct(found);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-24 pb-20 text-center">
        <p className="text-charcoal-400">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-narrow py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="container-narrow py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <ImageGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] font-medium tracking-ultra-wide uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-charcoal-800">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-700 mt-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-charcoal-500 text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-medium text-charcoal-600 uppercase tracking-wide mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-wide uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'bg-charcoal-800 text-cream-50 border-charcoal-800'
                        : 'bg-transparent text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs font-medium text-charcoal-600 uppercase tracking-wide mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-11 flex items-center justify-center text-sm font-medium border-x border-charcoal-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-gold-500 hover:bg-gold-600 text-white flex items-center justify-center gap-3 text-xs font-medium tracking-ultra-wide uppercase transition-colors"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Wishlist & Share */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 py-3 border border-charcoal-200 text-charcoal-500 hover:text-charcoal-800 hover:border-charcoal-400 flex items-center justify-center gap-2 text-xs tracking-wide uppercase transition-colors">
                <Heart size={14} />
                Wishlist
              </button>
              <button className="flex-1 py-3 border border-charcoal-200 text-charcoal-500 hover:text-charcoal-800 hover:border-charcoal-400 flex items-center justify-center gap-2 text-xs tracking-wide uppercase transition-colors">
                <Share2 size={14} />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="py-20 bg-cream-warm-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="heading-section text-charcoal-800">You May Also Like</h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-cream-100 overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="product-name text-charcoal-800 mt-3 text-center group-hover:text-gold-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-charcoal-600 text-center mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
