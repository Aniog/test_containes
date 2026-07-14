import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, toggleDrawer } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-widest text-brand-accent">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
      });
    }
    toggleDrawer();
  };

  const sections = [
    {
      key: 'description',
      title: 'Description',
      body: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      body: (
        <>
          <p>{product.details}</p>
          <p className="mt-2">{product.care}</p>
        </>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      body: <p>{product.shipping}</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-accent">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 overflow-hidden rounded-xl border ${
                    selectedImage === idx ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl font-medium tracking-wide text-brand-ink sm:text-4xl">
              {product.name.toUpperCase()}
            </h1>
            <p className="mt-2 text-lg text-brand-ink">${product.price}</p>
            <div className="mt-2 flex items-center gap-2 text-brand-accent">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${
                      variant === v
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-divider text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-divider text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                >
                  -
                </button>
                <span className="text-sm font-medium text-brand-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-divider text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full rounded-full bg-brand-accent py-3.5 text-sm font-semibold uppercase tracking-widest text-white hover:bg-brand-accentHover"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-6 divide-y divide-brand-divider border-t border-brand-divider">
              {sections.map((section) => (
                <div key={section.key}>
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === section.key ? '' : section.key)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-ink">
                      {section.title}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-brand-muted transition-transform ${
                        openSection === section.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openSection === section.key && (
                    <div className="pb-4 text-sm leading-relaxed text-brand-muted">{section.body}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl font-medium text-brand-ink">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;
