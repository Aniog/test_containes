import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-body-sm uppercase tracking-wider text-velmora-charcoal font-medium">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={16} className="text-velmora-muted" />
        ) : (
          <ChevronDown size={16} className="text-velmora-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-body-sm text-velmora-slate leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProduct({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="product-name text-[12px] text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
        {product.name}
      </h3>
      <p className="text-body-sm text-velmora-muted">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    setProduct(found);
    setSelectedVariant('Gold');
    setQuantity(1);
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-body text-velmora-muted">Product not found</p>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-[11px] text-velmora-muted">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden">
              <img
                src={product.images ? product.images[activeImageIndex] || product.image : product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {(product.images || [product.image, product.image, product.image]).slice(0, 3).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 bg-velmora-cream overflow-hidden transition-all duration-300 ${
                    activeImageIndex === index
                      ? 'ring-1 ring-velmora-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
              {product.category}
            </p>

            <h1 className="product-name text-2xl md:text-3xl text-velmora-charcoal mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-heading-md text-velmora-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-light'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-body-sm text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-body text-velmora-slate leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="divider-solid mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-caption uppercase tracking-wider text-velmora-charcoal font-medium mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-caption uppercase tracking-wider transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-velmora-white'
                        : 'border border-velmora-light text-velmora-graphite hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-caption uppercase tracking-wider text-velmora-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-light">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-body text-velmora-charcoal font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full py-4 flex items-center justify-center gap-2">
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p>{product.shipping}</p>
                  <p>{product.returns}</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-velmora-ivory py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-heading-lg text-velmora-charcoal">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {related.map(p => (
              <RelatedProduct key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
