import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e8e2db]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#8a8279]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#8a8279]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[#8a8279] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-[#8a8279] tracking-wider">
          <Link to="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#c9a96e] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#c9a96e]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-[#f5f0eb] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-[#c9a96e]/10 text-[#c9a96e] text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="velmora-product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#c9a96e] text-[#c9a96e]'
                        : 'text-[#e8e2db]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8a8279]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="velmora-heading text-2xl mb-6">${product.price.toFixed(2)}</p>

            <div className="velmora-divider mb-6" />

            {/* Description */}
            <p className="text-sm text-[#8a8279] leading-relaxed mb-6">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wider uppercase mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#c9a96e] bg-[#c9a96e] text-white'
                        : 'border-[#e8e2db] text-[#8a8279] hover:border-[#c9a96e]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wider uppercase mb-3 block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#e8e2db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#e8e2db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-[#c9a96e] text-white hover:bg-[#a8894d] hover:shadow-lg'
              }`}
            >
              {addedToCart ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Wishlist & Share */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8a8279] hover:text-[#c9a96e] transition-colors">
                <Heart className="w-4 h-4" /> Wishlist
              </button>
              <button className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8a8279] hover:text-[#c9a96e] transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="velmora-divider my-8" />

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece comes in our signature gift box, ready for gifting or treating yourself.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
                <p className="mt-3">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#f5f0eb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="velmora-heading text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3/4] bg-[#faf8f5] overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="velmora-product-name text-xs group-hover:text-[#c9a96e] transition-colors">{p.name}</h3>
                  <p className="text-xs text-[#8a8279] mt-1">${p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
