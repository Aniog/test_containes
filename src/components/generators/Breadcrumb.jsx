import React from 'react';

const Breadcrumb = ({ home, current }) => (
  <nav aria-label="Breadcrumb" className="w-full bg-white">
    <div className="max-w-[1200px] mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-[13px] text-[#636972] list-none p-0 m-0">
        <li>
          <a href="/" className="hover:text-[#8159BB] transition-colors">{home}</a>
        </li>
        <li aria-hidden="true" className="text-[#8159BB]">&gt;</li>
        <li>
          <span aria-current="page" className="text-[#636972]">{current}</span>
        </li>
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;
