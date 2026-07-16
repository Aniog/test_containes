import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { StockImage } from '@/components/ui/StockImage';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        // Images handled by StockImage
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="serif-heading text-2xl mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div className="pt-20 md:pt-24" ref={containerRef}>
      <div className="container-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 py-4">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-secondary relative">
              <StockImage
                imgId={`product-${product.images[selectedImage].id}`}
                query={product.images[selectedImage].query}
                ratio="3x4"
                width="800"
                alt={product.name}
              />
              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev < product.images.length - 1 ? prev + 1 : 0)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 bg-secondary flex-shrink-0 transition-all duration-300 ${
                      selectedImage === idx ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <StockImage
                      imgId={`product-thumb-${img.id}`}
                      query={img.query}
                      ratio="4x5"
                      width="120"
                      alt={`${product.name} view ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-accent/10 text-accent text-[10px] uppercase tracking-widest px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-2xl md:text-3xl mb-6">${product.price.toFixed(2)}</p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-muted-foreground hover:border-accent/50'
                    }`}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
                      style={{ backgroundColor: variant.color }}
                    />
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              <AccordionItem title="Description">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description} Crafted with care from responsibly sourced materials, this piece is designed to be worn and loved every day. Each Velmora piece undergoes rigorous quality testing to ensure lasting beauty.
                </p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p><strong className="text-foreground">Material:</strong> {product.material} over brass base</p>
                  <p><strong className="text-foreground">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                </div>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p><strong className="text-foreground">Shipping:</strong> Free worldwide shipping. Orders ship within 1-2 business days.</p>
                  <p><strong className="text-foreground">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="serif-heading text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} to={`/product/${relProduct.id}`} className="group">
                  <div className="aspect-[3/4] bg-secondary mb-3 overflow-hidden">
                    <StockImage
                      imgId={`related-${relProduct.images[0].id}`}
                      query={relProduct.images[0].query}
                      ratio="3x4"
                      width="400"
                      alt={relProduct.name}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs mb-1 group-hover:text-accent transition-colors">{relProduct.name}</h3>
                  <p className="text-sm font-medium">${relProduct.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest">{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
}
