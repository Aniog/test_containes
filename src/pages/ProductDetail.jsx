import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-base">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-taupe" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-taupe" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg text-velmora-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs text-velmora-taupe hover:text-velmora-gold transition-colors">
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      <div className="section-padding pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-beige overflow-hidden">
              <img
                src={product.images[activeImage].src}
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 flex-shrink-0 bg-velmora-beige overflow-hidden border-2 transition-colors ${
                    idx === activeImage ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase font-medium text-velmora-base leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-base mt-4 font-light">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-taupe leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-medium border transition-all ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border text-velmora-taupe hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button onClick={handleAdd} className="btn-primary flex-1">
                {added ? 'Added!' : 'Add to Bag'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
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
      <section className="section-padding py-16 border-t border-velmora-border">
        <h2 className="heading-md text-velmora-base text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((rp) => (
            <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
              <div className="aspect-[3/4] bg-velmora-beige overflow-hidden mb-3">
                <img
                  src={rp.images[0].src}
                  alt={rp.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-velmora-base group-hover:text-velmora-gold transition-colors">
                {rp.name}
              </h3>
              <p className="text-sm font-medium text-velmora-base mt-1">${rp.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}