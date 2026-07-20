import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-xl text-warmgray">Product not found</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. Standard delivery: 5-10 business days. Express delivery: 2-4 business days.\n\nWe accept returns within 30 days of delivery. Items must be unworn and in original packaging.' },
  ];

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-warmgray">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-sand overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-sand overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-charcoal' : 'border-transparent hover:border-sand'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl font-medium text-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-gold text-gold" />
                <span className="text-sm text-warmgray">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-sm text-warmgray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-warmgray font-medium block mb-3">
                Finish: {selectedVariant}
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-medium border transition-all ${selectedVariant === variant ? 'bg-charcoal text-cream border-charcoal' : 'border-sand text-charcoal hover:border-umber'}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-warmgray font-medium block mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-sand flex items-center justify-center hover:border-umber transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-sand flex items-center justify-center hover:border-umber transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${added ? 'bg-gold text-white' : 'bg-charcoal text-cream hover:bg-espresso'}`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Bag
                </>
              ) : (
                'Add to Bag'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      size={16}
                      className={`text-warmgray transition-transform duration-300 ${openAccordion === acc.key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-warmgray leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}