import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const product = products.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-accent inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-8 tracking-wider">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
              <img
                data-strk-img-id={product.images[selectedImage].id}
                data-strk-img={`[${product.images[selectedImage].desc}] [${product.images[selectedImage].title}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-secondary overflow-hidden transition-all duration-300 ${
                    selectedImage === i ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={img.id}
                    data-strk-img={`[${img.desc}] [${img.title}]`}
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

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {product.badge && (
              <span className="inline-block bg-accent/10 text-accent text-[10px] tracking-widest uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-3xl md:text-4xl text-foreground mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl text-foreground mb-6">${product.price.toFixed(2)}</p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs tracking-wider uppercase text-foreground mb-3 block">Finish</span>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs tracking-wider uppercase text-foreground mb-3 block">Quantity</span>
              <div className="flex items-center border border-border w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-accent w-full flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => toggleAccordion('description')}
              >
                <p>{product.description}</p>
                <p className="mt-3">Designed for everyday wear, this piece features a durable 18K gold plating over recycled brass base. Each piece is quality-checked before shipping.</p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => toggleAccordion('materials')}
              >
                <p className="mb-2"><strong className="text-foreground">Material:</strong> 18K gold plated over recycled brass</p>
                <p className="mb-2"><strong className="text-foreground">Stone:</strong> Crystal accents (where applicable)</p>
                <p className="mb-2"><strong className="text-foreground">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                <p><strong className="text-foreground">Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.</p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => toggleAccordion('shipping')}
              >
                <p className="mb-2"><strong className="text-foreground">Shipping:</strong> Free worldwide shipping on orders over $75. Standard shipping (5-7 business days) $4.95. Express shipping (2-3 business days) $9.95.</p>
                <p className="mb-2"><strong className="text-foreground">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong className="text-foreground">Gift wrapping:</strong> Complimentary gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="serif-heading text-3xl md:text-4xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
