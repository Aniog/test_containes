import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/sonner';
import { products } from '@/data/products';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#1a1a1a] mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images[selectedVariant] || product.images.gold;
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    toast({
      title: 'Added to bag',
      description: `${product.name} has been added to your shopping bag`,
    });
    openCart();
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-[#5c5c5c]">
          <Link to="/" className="hover:text-[#b8860b] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#b8860b] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-[#f5f5f0] rounded-lg overflow-hidden">
              <img
                src={`https://placehold.co/800x1000/f5f5f0/b8860b?text=${encodeURIComponent(product.name + ' ' + (selectedImageIndex + 1))}`}
                alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1a1a1a] shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1a1a1a] shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index ? 'border-[#b8860b]' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://placehold.co/200x250/f5f5f0/b8860b?text=${index + 1}`}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] uppercase tracking-wider mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-[#b8860b] fill-[#b8860b]' : 'text-[#e5e5e5]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#5c5c5c]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-6">${product.price}</p>
            <p className="text-[#5c5c5c] leading-relaxed mb-6">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a1a1a] mb-3">Tone</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                    selectedVariant === 'gold'
                      ? 'border-[#b8860b] bg-[#b8860b] text-white'
                      : 'border-[#e5e5e5] text-[#5c5c5c] hover:border-[#b8860b]'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                    selectedVariant === 'silver'
                      ? 'border-[#b8860b] bg-[#b8860b] text-white'
                      : 'border-[#e5e5e5] text-[#5c5c5c] hover:border-[#b8860b]'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a1a1a] mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 rounded-full border border-[#e5e5e5] hover:border-[#b8860b] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 rounded-full border border-[#e5e5e5] hover:border-[#b8860b] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full mb-8"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="border-t border-[#e5e5e5]">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p>{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">{product.shipping}</p>
                  <p>{product.returns}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center tracking-wide">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-[#f5f5f0] rounded-lg overflow-hidden mb-3">
                    <img
                      src={`https://placehold.co/600x800/f5f5f0/b8860b?text=${encodeURIComponent(relatedProduct.name)}`}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-sm text-[#1a1a1a] uppercase tracking-wider mb-1 group-hover:text-[#b8860b] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-[#5c5c5c]">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
