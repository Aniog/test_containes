import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-flex text-brand-accent underline">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
  };

  const sections = [
    { key: 'description', title: 'Description', body: product.description },
    { key: 'materials', title: 'Materials & Care', body: product.care },
    { key: 'shipping', title: 'Shipping & Returns', body: 'Free worldwide shipping on orders over $75. 30-day returns for unworn items in original packaging.' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-sm bg-brand-warm">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`aspect-square overflow-hidden rounded-sm bg-brand-warm ${selectedImage === idx ? 'ring-2 ring-brand-accent' : ''}`}>
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            {product.badge && <Badge className="mb-4">{product.badge}</Badge>}
            <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-brand-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-brand-ink">
              <div className="flex text-brand-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className={`h-4 w-4 ${idx < Math.round(product.rating) ? 'fill-current' : 'text-brand-line'}`} />
                ))}
              </div>
              <span className="text-sm text-brand-muted">{product.rating} ({product.reviewCount})</span>
            </div>
            <p className="mt-4 text-2xl font-serif text-brand-ink">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-sans font-medium tracking-wide uppercase text-brand-ink mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`h-10 px-4 rounded-full border text-sm capitalize transition-colors ${variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'}`}
                  >
                    {v === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-brand-line">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-10 w-10 flex items-center justify-center text-brand-ink hover:bg-brand-warm">−</button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="h-10 w-10 flex items-center justify-center text-brand-ink hover:bg-brand-warm">+</button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAdd}>Add to Cart</Button>
            </div>

            <div className="mt-8 border-t border-brand-line">
              {sections.map((section) => (
                <div key={section.key} className="border-b border-brand-line last:border-b-0">
                  <button onClick={() => setOpenSection(openSection === section.key ? '' : section.key)} className="flex w-full items-center justify-between py-4 text-left">
                    <span className="text-sm font-medium tracking-wide text-brand-ink">{section.title}</span>
                    <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${openSection === section.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === section.key && <p className="pb-4 text-sm text-brand-muted leading-relaxed">{section.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-2xl text-brand-ink mb-6">You may also like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <p className="font-serif text-sm uppercase tracking-widest text-brand-ink">{item.name}</p>
                    <p className="text-sm text-brand-muted">${item.price.toFixed(2)}</p>
                  </div>
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
