import React from 'react';

const ProductCategory = ({ title, items, icon: Icon }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="w-4.5 h-4.5 text-slate-700" />
          </div>
        )}
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="grid grid-cols-1 gap-y-1.5 text-sm text-slate-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1.5 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
