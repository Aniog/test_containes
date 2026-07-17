import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-deepbrown mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (name) => {
    setOpenAccordion((prev) => (prev === name ? null : name));
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

const relatedImageMap = {
  'vivid-aura-jewels': 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=530&fit=crop',
  'majestic-flora-nectar': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&h=530&fit=crop',
  'golden-sphere-huggies': 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=530&fit=crop',
  'amber-lace-earrings': 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&h=530&fit=crop',
  'royal-heirloom-set': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&h=530&fit=crop',
};

const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
        <Link to="/shop" className="inline-flex items-center gap-1.5 font-sans text-xs text-mocha/60 hover:text-gold transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} />

          {/* Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-3">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-deepbrown leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand/40'}`} />
                ))}
              </div>
              <span className="font-sans text-xs text-mocha/60">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-deepbrown mb-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-mocha/70 leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-deepbrown mb-3">Finish</p>
              <div className="flex items-center gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === v
                        ? 'border-deepbrown bg-deepbrown text-cream'
                        : 'border-sand text-mocha hover:border-deepbrown'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-deepbrown mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-mocha hover:text-deepbrown transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-deepbrown">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-mocha hover:text-deepbrown transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full text-xs py-3.5 transition-all ${
                addedToCart ? 'bg-sage hover:bg-sage' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {addedToCart ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand/40">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.materialsCare },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((acc) => (
                <div key={acc.key} className="border-b border-sand/40">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-[0.1em] uppercase text-deepbrown hover:text-gold transition-colors"
                  >
                    {acc.label}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    {acc.key === 'description' ? (
                      <ul className="space-y-1.5">
                        {product.details.map((d, i) => (
                          <li key={i} className="font-sans text-xs text-mocha/60 flex items-start gap-2">
                            <span className="text-gold mt-0.5">•</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-sans text-xs text-mocha/60 leading-relaxed">{acc.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 pt-12 border-t border-sand/30">
          <h2 className="font-serif text-2xl md:text-3xl text-deepbrown text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] bg-sand/20 rounded-sm overflow-hidden mb-3">
                  <img
                    src={relatedImageMap[p.id]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-serif text-xs md:text-sm tracking-[0.06em] uppercase text-deepbrown">{p.name}</p>
                <p className="font-sans text-sm text-deepbrown mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
