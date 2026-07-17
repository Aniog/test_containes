import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductDetail({ productId }) {
  const product = products.find((p) => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="section-padding container-padding text-center">
        <h2 className="serif-heading text-2xl mb-4">Product Not Found</h2>
        <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted with 18K gold plating over sterling silver base. Hypoallergenic and nickel-free. To maintain the luster, avoid contact with water, perfume, and lotions. Store in the provided jewelry pouch when not in use. Gently polish with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Product section */}
      <section className="container-padding py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div className="flex flex-row-reverse md:flex-col gap-3">
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 md:w-20 aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent hover:border-muted-foreground'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl mb-6">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground hover:border-primary'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border hover:border-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border hover:border-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-accent w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Free shipping on all orders · 30-day returns
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl mx-auto">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="serif-heading text-lg tracking-wider">{accordion.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion === accordion.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === accordion.id && (
                <div className="pb-6 text-muted-foreground leading-relaxed">
                  {accordion.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related products */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <h2 className="serif-heading text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
