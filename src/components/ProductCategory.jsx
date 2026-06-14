import React from 'react';

const ProductCategory = ({ title, examples, industries }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="font-semibold text-lg text-slate-900 mb-3">{title}</h3>
      <div className="text-sm text-slate-600 mb-4">
        <span className="font-medium text-slate-700">Common examples: </span>
        {examples}
      </div>
      {industries && (
        <div className="flex flex-wrap gap-2">
          {industries.map((ind, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
              {ind}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
