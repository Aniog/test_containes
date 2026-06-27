import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, Shield, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { toast } from 'sonner';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] rounded-sm overflow-hidden bg-velmora-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-8">
            <p className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wide-premium uppercase mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-velmora-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl mb-6">${product.price}</p>

            <p className="text-velmora-700 leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-wide-premium uppercase rounded-sm border transition-colors ${
                      variant === v
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-charcoal border-velmora-300 hover:border-charcoal'
                    }`}
                  >
                    {v} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-200 rounded-sm hover:bg-velmora-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-200 rounded-sm hover:bg-velmora-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-gold w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-xs text-velmora-500 mb-8">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                30-day returns
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-200">
              {[
                {
                  name: 'description',
                  title: 'Description',
                  content: `The ${product.name} is a stunning piece from our demi-fine collection. Crafted with 18K gold plating over sterling silver, this piece offers the luxurious look of solid gold at an accessible price point. Each piece is carefully designed to be worn daily, with hypoallergenic materials that are gentle on sensitive skin.`,
                },
                {
                  name: 'materials',
                  title: 'Materials & Care',
                  content: 'Base: Sterling silver (925)\nPlating: 18K gold\nFinish: High polish\n\nCare: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft jewelry cloth.',
                },
                {
                  name: 'shipping',
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express delivery: 2-3 business days ($12).\n\n30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.',
                },
              ].map((accordion) => (
                <div key={accordion.name} className="border-b border-velmora-200">
                  <button
                    onClick={() => toggleAccordion(accordion.name)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wide-premium uppercase">{accordion.title}</span>
                    {openAccordion === accordion.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === accordion.name && (
                    <div className="pb-4 text-sm text-velmora-700 leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h2 className="section-title text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-velmora-100 mb-3">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs sm:text-sm">{related.name}</h3>
                  <p className="text-sm font-medium mt-1">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
