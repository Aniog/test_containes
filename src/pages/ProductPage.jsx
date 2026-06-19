import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Footer from '@/components/layout/Footer';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-warmgray/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wider uppercase text-brand-charcoal">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-brand-mid-brown leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const imgs = product.thumbImages;
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="pt-20 lg:pt-24 pb-4 section-padding">
        <div className="flex items-center gap-2 text-xs text-brand-soft-brown">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <section className="section-padding pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[4/5] bg-brand-sand overflow-hidden mb-4">
              <img
                src={imgs[selectedImage] || product.hoverImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[4/3] overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent hover:border-brand-warmgray'
                  }`}
                >
                  <img
                    src={imgs[i]}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">
              {product.category}
            </p>
            <h1 className="text-product-name text-2xl lg:text-3xl text-brand-charcoal">
              {product.name}
            </h1>
            <p className="text-sm text-brand-soft-brown mt-2">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    strokeWidth={1}
                    className="text-brand-gold"
                  />
                ))}
              </div>
              <span className="text-sm text-brand-mid-brown">{product.rating}</span>
              <span className="text-sm text-brand-soft-brown">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-brand-charcoal mt-5">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-brand-mid-brown leading-relaxed mt-5 max-w-md">
              {product.description}
            </p>

            <div className="hairline-divider my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-xs tracking-wider uppercase text-brand-soft-brown mb-3">
                Tone: <span className="text-brand-charcoal font-medium">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      variant === v
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'border-brand-warmgray/50 text-brand-mid-brown hover:border-brand-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-brand-soft-brown mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-warmgray/50">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-brand-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 hover:bg-brand-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="btn-gold w-full mt-8 py-4 text-base"
            >
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <span className="text-[10px] tracking-wider uppercase text-brand-soft-brown">Free Shipping</span>
              <span className="text-brand-warmgray">·</span>
              <span className="text-[10px] tracking-wider uppercase text-brand-soft-brown">30-Day Returns</span>
              <span className="text-brand-warmgray">·</span>
              <span className="text-[10px] tracking-wider uppercase text-brand-soft-brown">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.description}</p>
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
      </section>

      {/* Related products */}
      <section className="py-16 lg:py-24 bg-brand-sand/30">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">Discover</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal">You May Also Like</h2>
            <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group text-center">
                <div className="aspect-[3/4] bg-brand-sand overflow-hidden mb-3">
                  <img
                    src={p.gridImage}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-product-name text-xs text-brand-charcoal group-hover:text-brand-gold transition-colors">{p.name}</h3>
                <p className="font-serif text-base text-brand-charcoal mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
