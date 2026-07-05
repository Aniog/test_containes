import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#1a1a1a] mb-4">Product not found</h1>
          <Link to="/shop" className="text-[#d4af37] underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-[#1a1a1a] mb-1">Materials</h4>
          <p className="text-[#1a1a1a]/70">{product.materials}</p>
        </div>
        <div>
          <h4 className="font-medium text-[#1a1a1a] mb-1">Care Instructions</h4>
          <p className="text-[#1a1a1a]/70">{product.care}</p>
        </div>
      </div>
    )},
    { id: 'shipping', title: 'Shipping & Returns', content: (
      <div className="space-y-3 text-[#1a1a1a]/70">
        <p>Free worldwide shipping on all orders over $50.</p>
        <p>Standard delivery: 5-7 business days. Express delivery: 2-3 business days.</p>
        <p>30-day returns for unworn items in original packaging.</p>
      </div>
    )}
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a]">Home</Link>
          <span className="mx-2 text-[#1a1a1a]/30">/</span>
          <Link to="/shop" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a]">Shop</Link>
          <span className="mx-2 text-[#1a1a1a]/30">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#f5f5f5] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-[#f5f5f5] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#d4af37]' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#1a1a1a]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[#d4af37] text-[#d4af37]' : 'text-[#e5e5e5]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#1a1a1a]/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-[#1a1a1a] mt-4">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-[#1a1a1a]/70 mt-4">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-sm text-[#1a1a1a]/60 mb-3">Finish: {selectedVariant}</p>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm border transition-colors ${
                        selectedVariant === variant
                          ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                          : 'border-[#e5e5e5] text-[#1a1a1a] hover:border-[#1a1a1a]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm text-[#1a1a1a]/60 mb-3">Quantity</p>
              <div className="flex items-center border border-[#e5e5e5] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#f5f5f5] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-center min-w-[60px]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#f5f5f5] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-[#1a1a1a] text-white text-sm tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#e5e5e5]">
              {accordions.map(accordion => (
                <div key={accordion.id} className="border-b border-[#e5e5e5]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-sm tracking-wide text-[#1a1a1a]">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={16} className="text-[#1a1a1a]/50" />
                    ) : (
                      <ChevronDown size={16} className="text-[#1a1a1a]/50" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-[#1a1a1a]/70 leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-[#e5e5e5]">
            <h2 className="font-serif text-2xl text-[#1a1a1a] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
