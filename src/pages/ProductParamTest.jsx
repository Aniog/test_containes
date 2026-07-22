import React from 'react';
import { useParams } from 'react-router-dom';

const ProductParamTest = () => {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p className="font-serif text-2xl text-brand-ink">Product Param Test</p>
      <p className="mt-2 text-sm text-brand-muted">ID from URL: {id || 'undefined'}</p>
    </div>
  );
};

export default ProductParamTest;
