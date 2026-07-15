import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-3">
        <img
          alt={product.name}
          data-strk-img-id={`related-${product.id}`}
          data-strk-img={`[${product.id}-desc] [${product.id}-name] [related-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute bottom-0 left-0 right-0 p-2 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
              toast.success(`${product.name} added to cart`);
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-foreground text-[10px] tracking-widest uppercase py-2.5 flex items-center justify-center gap-1.5 hover:bg-foreground hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>
      <h4 className="product-name text-xs mb-1 truncate">{product.name}</h4>
      <p className="text-sm text-muted-foreground">${product.price}</p>
    </Link>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="section-padding py-32 text-center">
        <h2 className="serif-heading text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hidden text elements for stock image queries */}
      <div className="sr-only">
        <p id={`${product.id}-name`}>gold {product.category} jewelry</p>
        <p id={`${product.id}-desc`}>18K gold plated {product.category} for women</p>
        <p id="product-gallery-title">Bestsellers</p>
        <p id="related-title">Bestsellers</p>
      </div>

      {/* Product Section */}
      <section className="section-padding pb-16">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 transition-colors ${
                      selectedImage === index ? 'border-foreground' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img
                      alt={`${product.name} view ${index + 1}`}
                      data-strk-img-id={`product-${product.id}-thumb-${index}`}
                      data-strk-img={`[${product.id}-desc] [${product.id}-name] [product-gallery-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 aspect-[3/4] bg-secondary">
                <img
                  alt={product.name}
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-name] [product-gallery-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              {product.badge && (
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-primary mb-3">
                  {product.badge}
                </span>
              )}

              <h1 className="product-name text-2xl sm:text-3xl lg:text-4xl mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-primary text-primary'
                          : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="serif-heading text-2xl mb-6">${product.price}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase mb-3">Color</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border text-muted-foreground hover:border-foreground/50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-widest uppercase mb-3">Quantity</p>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-primary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-primary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-accent w-full mb-4"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Free shipping on orders over $75
              </p>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                  <p className="mt-3">
                    Each piece is carefully crafted and quality-checked before shipping. 
                    Our demi-fine jewelry is designed to be worn daily and treasured for years.
                  </p>
                </Accordion>

                <Accordion title="Materials & Care">
                  <p>
                    <strong>Material:</strong> 18K gold plated over sterling silver base
                  </p>
                  <p className="mt-2">
                    <strong>Care:</strong> Store in the provided pouch when not wearing. 
                    Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
                  </p>
                  <p className="mt-2">
                    <strong>Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.
                  </p>
                </Accordion>

                <Accordion title="Shipping & Returns">
                  <p>
                    <strong>Shipping:</strong> Free worldwide shipping on orders over $75. 
                    Standard delivery: 5-10 business days. Express: 2-4 business days.
                  </p>
                  <p className="mt-2">
                    <strong>Returns:</strong> 30-day hassle-free returns. Items must be 
                    unworn and in original packaging.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding py-16 bg-secondary/30">
          <div className="container-max">
            <h2 className="serif-heading text-3xl sm:text-4xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
