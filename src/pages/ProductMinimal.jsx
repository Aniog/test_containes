import React from 'react';
import { useParams } from 'react-router-dom';

const ProductMinimal = () => {
  const { id } = useParams();
  console.log('ProductMinimal rendered with id:', id);
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-serif text-4xl text-brand-ink">Product Minimal</h1>
      <p className="mt-4 text-lg text-brand-muted">Product ID: {id}</p>
      <p className="mt-2 text-sm text-brand-muted">If you see this, the component is working</p>
    </div>
  );
};

export default ProductMinimal;
