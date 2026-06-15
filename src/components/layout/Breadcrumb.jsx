import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="container-custom py-4">
      <ol className="flex items-center gap-2 list-none p-0 m-0 text-[#636972] text-[12px]">
        <li className="flex items-center gap-2">
          <a href="/" className="hover:text-[#8159BB] transition-colors">Strikingly</a>
          <span className="text-[#8159BB]" aria-hidden="true">&gt;</span>
        </li>
        <li className="text-[#4B5056]" aria-current="page">AI Generators</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
