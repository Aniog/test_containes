import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="section-container py-32 text-center">
        <p className="font-serif text-2xl text-[#1c1917]">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-[#5c5650] underline">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
    openCart();
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const sections = [
    { key: 'description', title: 'Description', body: product.description },
    { key: 'materials', title: 'Materials & Care', body: product.care },
    { key: 'shipping', title: 'Shipping & Returns', body: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4f0]">
      <Nav />
      <CartDrawer />
      <main className="section-container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-[#f1efe9]">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border ${
                    selectedImage === idx ? 'border-[#1c1917]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl uppercase tracking-wide-custom text-[#1c1917] md:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#b8860b]">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-[#1c1917]">{product.rating}</span>
              </div>
              <span className="text-xs text-[#8a827a]">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-serif text-2xl text-[#1c1917]">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#5c5650]">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Tone</p>
              <div className="mt-2 flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wide-custom transition-colors ${
                      variant === v ? 'border-[#1c1917] bg-[#1c1917] text-white' : 'border-[#e7e3dc] text-[#5c5650] hover:border-[#1c1917]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Quantity</p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-[#e7e3dc]">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 text-[#5c5650] hover:text-[#1c1917]">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-[#1c1917]">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 text-[#5c5650] hover:text-[#1c1917]">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="mt-8 w-full" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <div className="mt-10 space-y-3">
              {sections.map((section) => (
                <div key={section.key} className="hairline">
                  <button
                    onClick={() => setOpenSection(openSection === section.key ? '' : section.key)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-wide-custom text-[#1c1917]">{section.title}</span>
                    <ChevronDown className={`h-4 w-4 text-[#5c5650] transition-transform ${openSection === section.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === section.key && (
                    <p className="pb-4 text-sm leading-relaxed text-[#5c5650]">{section.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl text-[#1c1917] md:text-3xl">You May Also Like</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="aspect-[3x4] overflow-hidden rounded-lg bg-[#f1efe9]">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 font-serif text-sm uppercase tracking-wide-custom text-[#1c1917]">{item.name}</p>
                  <p className="text-sm text-[#5c5650]">${item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Product;
