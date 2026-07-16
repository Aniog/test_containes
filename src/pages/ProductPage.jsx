import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const related = useMemo(
    () => products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4),
    [product]
  );

  if (!product) {
    return (
      <main className="pt-24 pb-20 text-center">
        <p className="text-velvet-taupe">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4 inline-block text-xs">
          Back to Shop
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
  };

  const accordionItems = [
    {
      id: 'description',
      label: 'Description',
      content:
        product.description ||
        'Handcrafted from premium materials, this piece exemplifies the Velmora commitment to quality and timeless design.',
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content:
        'Crafted with 18K gold plating over high-quality brass. Hypoallergenic and nickel-free. To maintain brilliance, avoid contact with perfumes, lotions, and water. Store in a cool, dry place. Gently polish with a soft cloth.',
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Your piece will arrive in 5–10 business days in our signature gift packaging. 30-day return policy for unworn items in original packaging. Full refund issued within 5 business days of receipt.',
    },
  ];

  return (
    <main className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velvet-muted uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-velvet-cream transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet-cream transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-taupe">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-velvet-surface rounded overflow-hidden mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-velvet-gold' : 'border-transparent hover:border-velvet-border-light'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-extrawide uppercase text-velvet-cream">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velvet-gold text-velvet-gold' : 'text-velvet-border'}`}
                  />
                ))}
              </div>
              <span className="text-velvet-muted text-xs">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-velvet-gold font-serif text-2xl mt-4">${product.price}</p>

            <p className="text-velvet-taupe text-sm leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-velvet-cream mb-3">Finish</p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase rounded-full border transition-all ${
                      variant === v
                        ? 'bg-velvet-gold text-velvet-deep border-velvet-gold'
                        : 'border-velvet-border text-velvet-taupe hover:border-velvet-gold hover:text-velvet-cream'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-velvet-border rounded-full">
                <button
                  className="px-4 py-3 text-velvet-taupe hover:text-velvet-cream transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-velvet-cream text-sm min-w-[2rem] text-center">{quantity}</span>
                <button
                  className="px-4 py-3 text-velvet-taupe hover:text-velvet-cream transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Trust micro copy */}
            <div className="mt-6 flex flex-wrap gap-4 text-velvet-muted text-xs">
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free Shipping</span>
              <span className="flex items-center gap-1"><RotateCcw className="w-3 h-3" /> 30-Day Returns</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 1-Year Warranty</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-px">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-t border-velvet-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase text-velvet-cream">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-velvet-muted transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-velvet-taupe text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="section-heading">You May Also Like</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}