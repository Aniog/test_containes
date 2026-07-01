import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [imageIndex, setImageIndex] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="text-gold-antique hover:underline mt-4 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const selectedVariantValue = selectedVariant || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, selectedVariantValue, quantity);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' }
  ];

  return (
    <main className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-stone-warm">
            <li><Link to="/" className="hover:text-gold-antique">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold-antique">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-gold-antique capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-stone-light overflow-hidden">
              <img
                src={product.images[imageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    imageIndex === idx ? 'border-gold-antique' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xl text-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold-antique fill-gold-antique" />
                <span className="text-sm text-stone-warm">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="mt-4 text-stone-warm leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <span className="text-sm text-stone-warm">Finish: {selectedVariantValue}</span>
              <div className="flex gap-2 mt-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedVariantValue === variant
                        ? 'border-gold-antique bg-gold-antique text-white'
                        : 'border-stone-light text-charcoal hover:border-gold-antique'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-sm text-stone-warm">Quantity</span>
              <div className="flex items-center border border-stone-light mt-2 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold-antique transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold-antique transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold-antique text-white py-4 px-8 font-sans text-sm uppercase tracking-widest hover:bg-gold-antique/90 transition-colors"
            >
              Add to Cart
            </button>

            {/* Material Tag */}
            <p className="mt-4 text-xs text-stone-warm text-center">
              {product.material} · Hypoallergenic · Nickel-free
            </p>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-light">
              {accordions.map(accordion => (
                <div key={accordion.id} className="border-b border-stone-light">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm uppercase tracking-wider text-charcoal">
                      {accordion.title}
                    </span>
                    {activeAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4 text-stone-warm" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-warm" />
                    )}
                  </button>
                  {activeAccordion === accordion.id && (
                    <p className="pb-4 text-sm text-stone-warm leading-relaxed">
                      {accordion.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}