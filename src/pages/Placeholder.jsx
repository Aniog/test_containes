import React from 'react';
import { Link } from 'react-router-dom';

const Placeholder = ({ title }) => {
  return (
    <div className="pt-48 pb-24 px-6 text-center min-h-screen">
      <h1 className="text-4xl md:text-6xl font-serif mb-8">{title}</h1>
      <p className="text-gray-500 font-sans mb-12 uppercase tracking-widest">This page is coming soon.</p>
      <Link to="/" className="inline-block bg-black text-white px-10 py-5 font-sans uppercase tracking-widest text-xs">
        Return Home
      </Link>
    </div>
  );
};

export default Placeholder;
