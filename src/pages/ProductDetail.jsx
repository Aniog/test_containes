import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCartDispatch } from '../context/CartContext';
import ProductCard from '../components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useCartDispatch();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: selectedVariant,
        quantity,
        category: product.category,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-taupe mb-8">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0 transition-all duration-300 ${
                    activeImage === i
                      ? 'border-2 border-espresso'
                      : 'border border-stone-warm hover:border-taupe'
                  }`}
                >
                  <div className="w-full h-full bg-stone-lighter flex items-center justify-center">
                    <span className="text-[8px] text-taupe/50 tracking-wider">VIEW</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-stone-lighter flex items-center justify-center">
              <span className="product-name text-sm text-taupe/40 tracking-[0.3em]">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-[10px] tracking-[0.22em] uppercase text-taupe mb-3 font-medium">
              {product.subcategory}
            </p>
            <h1 className="product-name text-2xl lg:text-3xl mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl lg:text-3xl font-light mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#C7A55B' : 'none'}
                    stroke={i < Math.floor(product.rating) ? '#C7A55B' : '#D5CDC1'}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe tracking-wider">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-espresso/70 leading-relaxed text-sm mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.18em] uppercase text-taupe mb-3 font-medium">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 text-xs tracking-[0.1em] uppercase transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-espresso text-cream border border-espresso'
                        : 'bg-transparent text-espresso border border-stone-warm hover:border-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-stone-warm h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full text-taupe hover:text-espresso transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full text-taupe hover:text-espresso transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 h-12 text-xs tracking-[0.14em] uppercase font-medium transition-all duration-400 ${
                  added
                    ? 'bg-gold text-espresso border border-gold'
                    : 'bg-espresso text-cream border border-espresso hover:bg-gold hover:border-gold'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Bag — $' + (product.price * quantity)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-stone-warm">
              {[
                { key: 'description', label: 'Description', content: product.details?.join('\n') || product.description },
                { key: 'materials', label: 'Materials & Care', content: product.materials },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-stone-warm">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex items-center justify-between py-4 text-[11px] tracking-[0.14em] uppercase font-medium"
                  >
                    {section.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1}
                      className={`transition-transform duration-300 ${
                        openAccordion === section.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openAccordion === section.key ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
