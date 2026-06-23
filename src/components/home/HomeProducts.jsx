import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';

const categories = [
  {
    id: "cat-electronics",
    title: "Consumer Electronics",
    desc: "Smart home devices, wearables, audio equipment, and PC accessories.",
    imgUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600",
    imgId: "prod-img-1"
  },
  {
    id: "cat-home",
    title: "Home & Garden",
    desc: "Furniture, kitchenware, decor, and outdoor living products.",
    imgUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
    imgId: "prod-img-2"
  },
  {
    id: "cat-apparel",
    title: "Apparel & Accessories",
    desc: "Clothing, sportswear, bags, shoes, and fashion accessories.",
    imgUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    imgId: "prod-img-3"
  },
  {
    id: "cat-toys",
    title: "Toys & Hobbies",
    desc: "Educational toys, plush items, games, and outdoor play equipment.",
    imgUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600",
    imgId: "prod-img-4"
  }
];

const mockStrkImgConfig = {};

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        try {
            window.ImageHelper.loadImages(mockStrkImgConfig, containerRef.current);
        } catch (e) {
            console.log("Image load deferred");
        }
    }
  }, []);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 id="products-title" className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-slate-600">
              We have extensive experience across multiple industries, working with specialized manufacturing clusters throughout China.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-100 px-6 font-medium text-slate-900 transition-colors hover:bg-slate-200 shrink-0"
          >
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to="/products" 
              className="group block overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-200">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${category.imgUrl}')` }}
                    data-strk-bg-id={`bg-${category.imgId}`}
                    data-strk-bg={`[${category.id}-title] [products-subtitle]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                  ></div>
              </div>
              <div className="p-6">
                <h3 id={`${category.id}-title`} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p id={`${category.id}-desc`} className="text-sm text-slate-600">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
