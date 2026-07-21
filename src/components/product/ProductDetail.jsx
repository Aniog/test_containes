import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Star, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { ProductGrid } from '@/components/shop/ProductGrid';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, toggleDrawer } = useCart();

  const related = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="section-padding container-editorial">
        <p className="text-muted">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4 inline-flex">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      image: product.images[0],
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    toggleDrawer();
  };

  return (
    <div className="section-padding bg-background">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-surface">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-xl border ${
                    selectedImage === index ? 'border-ink' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-ink">{product.rating}</span>
              </div>
              <span>·</span>
              <span>{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-2xl font-medium">${product.price}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      variant === v ? 'border-ink bg-ink text-surface' : 'border-border hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-muted hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-muted hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAdd} className="btn-primary mt-8 w-full">
              {added ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Added to Cart
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>

            <Accordion
              items={[
                { title: 'Description', body: product.details },
                { title: 'Materials & Care', body: product.care },
                { title: 'Shipping & Returns', body: product.shipping },
              ]}
            />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-ink">You may also like</h2>
            <div className="mt-8">
              <ProductGrid selectedCategory={product.category} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-10 divide-y divide-border border-t border-border">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-ink">{item.title}</span>
            <ChevronDown
              className={`h-4 w-4 text-muted transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <p className="pb-4 text-sm text-muted leading-relaxed">{item.body}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
