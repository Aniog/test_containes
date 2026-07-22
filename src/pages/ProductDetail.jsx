import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart, useCartDrawer } from '@/context/CartContext';
import products from '@/data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velvet-200">
      <button
        className="w-full flex items-center justify-between py-5 font-sans text-xs tracking-widest uppercase text-velvet-900 hover:text-warm-600 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-velvet-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-velvet-500">Product not found</p>
        <Link to="/shop" className="text-warm-600 text-sm tracking-widest uppercase mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="font-sans text-xs tracking-widest uppercase text-velvet-500 mb-8">
          <Link to="/shop" className="hover:text-warm-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-warm-600 transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-velvet-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-velvet-100 mb-4 flex items-center justify-center">
              <div className={`w-2/3 h-2/3 bg-velvet-${200 + selectedImage * 100} rounded-full transition-all duration-500`} />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-velvet-100 flex items-center justify-center border-2 transition-colors ${
                    selectedImage === i ? 'border-velvet-900' : 'border-transparent'
                  }`}
                >
                  <div className={`w-12 h-12 bg-velvet-${200 + i * 100} rounded-full`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-velvet-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-warm-600 fill-warm-600' : 'text-velvet-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-velvet-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-sans text-2xl text-velvet-900 mt-5">${product.price}</p>

            <p className="font-sans text-sm text-velvet-600 leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet-600 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 font-sans text-sm border transition-all duration-200 ${
                      selectedVariant === i
                        ? 'border-velvet-900 bg-velvet-900 text-white'
                        : 'border-velvet-300 text-velvet-700 hover:border-velvet-900'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet-600 mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-300 w-fit">
                <button
                  className="px-4 py-2.5 hover:text-warm-600 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 py-2.5 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  className="px-4 py-2.5 hover:text-warm-600 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full mt-8 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-200 ${
                added
                  ? 'bg-velvet-900 text-white'
                  : 'bg-warm-600 hover:bg-warm-700 text-white'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            <div className="text-center mt-3">
              <span className="font-sans text-xs text-velvet-500">
                Free Shipping · 30-Day Returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.materials}<br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                <strong>Shipping:</strong> {product.shipping}<br /><br />
                <strong>Returns:</strong> {product.returns}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-velvet-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-900">You May Also Like</h2>
            <hr className="hairline w-16 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-velvet-50 mb-4 flex items-center justify-center overflow-hidden">
                  <div className="w-2/3 h-2/3 bg-velvet-200 rounded-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-sm tracking-widest uppercase text-velvet-900">{p.name}</h3>
                <p className="font-sans text-sm text-velvet-900 mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
