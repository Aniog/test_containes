import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Star, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';
import { Button } from '@/components/ui/button';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <p className="font-display text-2xl font-semibold">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block">
          <Button>Back to shop</Button>
        </Link>
      </div>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materials,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setQuantity(1);
  };

  return (
    <div className="pt-24 md:pt-28">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-surface-alt">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-2 font-display text-3xl font-semibold uppercase tracking-display md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-ui text-sm font-semibold">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-display text-2xl font-semibold">${product.price}</p>
            <p className="mt-4 font-body text-sm text-ink-secondary leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="eyebrow">Finish</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-4 py-2 font-ui text-xs font-semibold uppercase tracking-display transition-colors ${
                      selectedVariant === variant
                        ? 'border-ink bg-ink text-white'
                        : 'border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow">Quantity</p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-border px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded-full p-2 text-ink-secondary transition-colors hover:bg-surface-alt hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-ui text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded-full p-2 text-ink-secondary transition-colors hover:bg-surface-alt hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button onClick={handleAddToCart} className="mt-8 w-full" size="lg">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <div className="mt-6 space-y-2">
              {accordions.map((item) => (
                <div key={item.id} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion((prev) => (prev === item.id ? '' : item.id))
                    }
                    className="flex w-full items-center justify-between py-3 font-ui text-sm font-semibold text-ink"
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 font-body text-sm text-ink-secondary leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 md:mt-24">
          <div className="section-container">
            <p className="eyebrow">Complete the look</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
              You may also like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
