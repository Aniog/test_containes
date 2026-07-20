import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-text-primary tracking-nav uppercase">{title}</span>
        {open ? <ChevronUp size={16} className="text-text-secondary" /> : <ChevronDown size={16} className="text-text-secondary" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text-primary mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary text-sm">Back to Collection</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container-wide mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-text-secondary">
          <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-text-primary transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container-wide mx-auto px-4 md:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 flex-shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-surface-alt">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center py-4">
            <h1 className="font-serif uppercase tracking-product text-2xl md:text-3xl font-medium text-text-primary mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-text-primary mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-nav uppercase text-text-secondary mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-accent text-base'
                        : 'bg-transparent border border-border text-text-primary hover:border-accent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-nav uppercase text-text-secondary mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-highlight transition-colors text-text-primary"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-sm font-medium text-text-primary min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-highlight transition-colors text-text-primary"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-sm mb-8">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen>
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide mx-auto">
          <h2 className="heading-display text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
