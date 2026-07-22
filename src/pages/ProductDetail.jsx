import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample product data
  const product = {
    id: id,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    images: ["", ""],
    details: "Elevate your ear stack with this stunning gold ear cuff. Features a delicate crystal accent.",
    materials: "18K Gold Plated on Brass, Crystal Accent",
    rating: 4.8,
    reviews: 124
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button onClick={() => navigate(-1)} className="mb-8 text-sm hover:underline">
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div>
            <div className="bg-gray-100 aspect-square mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 aspect-square"></div>
              <div className="bg-gray-100 aspect-square"></div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="font-serif text-3xl uppercase tracking-wider mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>

            <div className="flex gap-1 mb-6">
              {"★".repeat(5)}
              <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-gray-600 mb-8">{product.details}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm mb-3">Material</p>
              <div className="flex gap-3">
                <button className="px-6 py-2 border-2 border-black">Gold</button>
                <button className="px-6 py-2 border border-gray-300 hover:border-black">Silver</button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 border">-</button>
                <span>1</span>
                <button className="w-10 h-10 border">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors mb-4">
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t">
              <details className="border-b py-4">
                <summary className="cursor-pointer font-medium">Description</summary>
                <p className="mt-4 text-gray-600">{product.details}</p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer font-medium">Materials & Care</summary>
                <p className="mt-4 text-gray-600">{product.materials}</p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer font-medium">Shipping & Returns</summary>
                <p className="mt-4 text-gray-600">Free shipping on all orders. 30-day return policy.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
