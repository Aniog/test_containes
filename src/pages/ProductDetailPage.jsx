import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import products from '../data/products';
import { useCartDispatch } from '../context/CartContext';
import AccordionItem from '../components/product/AccordionItem';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem, toggleCart } = useCartDispatch();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    toggleCart();
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-cream pt-20">
      <div className="section-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="font-sans text-xs tracking-wider uppercase text-brand-smoke/60 mb-8">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-brand-sand/20 overflow-hidden">
              <div className="w-full h-full bg-brand-sand/40 flex items-center justify-center">
                <span className="text-brand-smoke/40 text-sm uppercase tracking-widest">{product.name}</span>
              </div>
            </div>
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 border-2 shrink-0 bg-brand-sand/30 flex items-center justify-center transition-colors ${activeImage === i ? 'border-brand-gold' : 'border-transparent'}`}
                >
                  <span className="text-[10px] text-brand-smoke/40">Img {i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl tracking-product uppercase text-brand-ink leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="font-sans text-2xl font-light text-brand-ink">${product.price}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`} />
                  ))}
                </div>
                <span className="font-sans text-sm text-brand-smoke">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="font-sans text-sm text-brand-smoke leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-smoke mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 border font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-brand-ink bg-brand-ink text-brand-cream'
                        : 'border-brand-sand text-brand-smoke hover:border-brand-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-smoke mb-3">Quantity</p>
              <div className="flex items-center border border-brand-sand w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-brand-smoke hover:text-brand-ink transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm font-medium text-brand-ink">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-brand-smoke hover:text-brand-ink transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-accent ${added ? '!bg-green-600' : ''}`}
              >
                {added ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
              <button className="btn-outline !p-3.5">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl tracking-hero text-center mb-10 text-brand-ink">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.slug}`} className="group block">
                <div className="aspect-[3/4] bg-brand-sand/30 mb-4 flex items-center justify-center">
                  <span className="text-brand-smoke/40 text-xs uppercase tracking-widest">{rp.category}</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.round(rp.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`} />
                  ))}
                </div>
                <h3 className="font-serif text-sm tracking-product uppercase text-brand-ink group-hover:text-brand-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="font-sans text-sm font-medium text-brand-ink mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}