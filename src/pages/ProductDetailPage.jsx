import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-sand/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider text-velmora-dark hover:text-gold transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-velmora-stone leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center section-padding">
        <h1 className="font-serif text-heading-xl text-velmora-dark mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-gold-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);
  const images = [product.image, product.imageHover];

  return (
    <div className="pt-20 md:pt-24">
      <div className="section-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs text-velmora-stone mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-dark">{product.name}</span>
        </nav>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-gold' : 'border-velmora-sand/30 hover:border-velmora-sand'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-cream overflow-hidden">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold/10 text-gold font-sans text-[10px] uppercase tracking-wider px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="text-product-name text-heading-lg md:text-heading-xl text-velmora-dark mb-3">
              {product.name}
            </h1>

            <p className="font-serif text-heading-md text-gold mb-4">
              ${product.price}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-velmora-sand'}`} />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-body text-velmora-stone mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-caption uppercase tracking-wider text-velmora-stone mb-3">
                Tone: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`font-sans text-sm px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-gold bg-gold/10 text-velmora-dark'
                        : 'border-velmora-sand/40 text-velmora-stone hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-caption uppercase tracking-wider text-velmora-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand/40">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-velmora-stone hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-12 text-center text-velmora-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-velmora-stone hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="btn-gold w-full flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Shipping highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-velmora-sand/30">
              <div className="text-center">
                <Truck className="w-4 h-4 text-gold mx-auto mb-2" />
                <p className="font-sans text-[10px] text-velmora-stone uppercase tracking-wider">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-4 h-4 text-gold mx-auto mb-2" />
                <p className="font-sans text-[10px] text-velmora-stone uppercase tracking-wider">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-4 h-4 text-gold mx-auto mb-2" />
                <p className="font-sans text-[10px] text-velmora-stone uppercase tracking-wider">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="section-padding py-16 md:py-24 border-t border-velmora-sand/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-heading-lg text-velmora-dark text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-product-name text-sm text-velmora-dark mb-1">
                  {p.name}
                </h3>
                <p className="font-sans text-sm font-medium text-velmora-dark">
                  ${p.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
