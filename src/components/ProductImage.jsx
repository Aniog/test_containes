import React from 'react';

// Main Image
export function ProductMainImage({ productId, index = 0, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '3x4',
    'data-strk-img-width': '1200',
  };

  const id = `${productId}-${index}`;
  switch (id) {
    case 'p-1-0': return <img data-strk-img-id="main-img-p1-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-1': return <img data-strk-img-id="main-img-p1-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-2': return <img data-strk-img-id="main-img-p1-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-3': return <img data-strk-img-id="main-img-p1-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    
    case 'p-2-0': return <img data-strk-img-id="main-img-p2-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-1': return <img data-strk-img-id="main-img-p2-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-2': return <img data-strk-img-id="main-img-p2-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-3': return <img data-strk-img-id="main-img-p2-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-3-0': return <img data-strk-img-id="main-img-p3-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-1': return <img data-strk-img-id="main-img-p3-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-2': return <img data-strk-img-id="main-img-p3-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-3': return <img data-strk-img-id="main-img-p3-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-4-0': return <img data-strk-img-id="main-img-p4-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-1': return <img data-strk-img-id="main-img-p4-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-2': return <img data-strk-img-id="main-img-p4-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-3': return <img data-strk-img-id="main-img-p4-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-5-0': return <img data-strk-img-id="main-img-p5-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-1': return <img data-strk-img-id="main-img-p5-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-2': return <img data-strk-img-id="main-img-p5-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-3': return <img data-strk-img-id="main-img-p5-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}

// Thumb Image
export function ProductThumbImage({ productId, index, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '3x4',
    'data-strk-img-width': '200',
  };

  const id = `${productId}-${index}`;
  switch (id) {
    case 'p-1-0': return <img data-strk-img-id="thumb-p1-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-1': return <img data-strk-img-id="thumb-p1-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-2': return <img data-strk-img-id="thumb-p1-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-1-3': return <img data-strk-img-id="thumb-p1-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    
    case 'p-2-0': return <img data-strk-img-id="thumb-p2-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-1': return <img data-strk-img-id="thumb-p2-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-2': return <img data-strk-img-id="thumb-p2-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2-3': return <img data-strk-img-id="thumb-p2-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-3-0': return <img data-strk-img-id="thumb-p3-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-1': return <img data-strk-img-id="thumb-p3-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-2': return <img data-strk-img-id="thumb-p3-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3-3': return <img data-strk-img-id="thumb-p3-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-4-0': return <img data-strk-img-id="thumb-p4-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-1': return <img data-strk-img-id="thumb-p4-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-2': return <img data-strk-img-id="thumb-p4-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4-3': return <img data-strk-img-id="thumb-p4-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;

    case 'p-5-0': return <img data-strk-img-id="thumb-p5-0" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-1': return <img data-strk-img-id="thumb-p5-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-2': return <img data-strk-img-id="thumb-p5-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5-3': return <img data-strk-img-id="thumb-p5-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}

// Cart Image
export function CartThumbImage({ productId, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '3x4',
    'data-strk-img-width': '200',
  };

  switch (productId) {
    case 'p-1': return <img data-strk-img-id="product-card-p1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2': return <img data-strk-img-id="product-card-p2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3': return <img data-strk-img-id="product-card-p3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4': return <img data-strk-img-id="product-card-p4" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5': return <img data-strk-img-id="product-card-p5" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}

// Card Image
export function ProductCardImage({ productId, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '3x4',
    'data-strk-img-width': '600',
  };

  switch (productId) {
    case 'p-1': return <img data-strk-img-id="product-card-p1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-2': return <img data-strk-img-id="product-card-p2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-3': return <img data-strk-img-id="product-card-p3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-4': return <img data-strk-img-id="product-card-p4" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'p-5': return <img data-strk-img-id="product-card-p5" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}
// Category Image
export function CategoryImage({ id, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '4x5',
    'data-strk-img-width': '600',
  };

  switch (id) {
    case 'cat-earrings': return <img data-strk-img-id="cat-earrings" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'cat-necklaces': return <img data-strk-img-id="cat-necklaces" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 'cat-huggies': return <img data-strk-img-id="cat-huggies" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}

// UGC Image
export function UgcImage({ id, className, alt, idQuery }) {
  const common = {
    className,
    alt,
    'data-strk-img': idQuery,
    'data-strk-img-ratio': '9x16',
    'data-strk-img-width': '600',
  };

  switch (id) {
    case 1: return <img data-strk-img-id="ugc-1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 2: return <img data-strk-img-id="ugc-2" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 3: return <img data-strk-img-id="ugc-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 4: return <img data-strk-img-id="ugc-4" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 5: return <img data-strk-img-id="ugc-5" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    case 6: return <img data-strk-img-id="ugc-6" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" {...common} />;
    default: return null;
  }
}
