import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-serif mb-4">VELMORA</h1>
          <p className="text-xl mb-8">Fine Jewelry</p>
          <button className="bg-yellow-600 text-white px-8 py-3 hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif mb-4">Our Collection</h2>
          <p className="text-gray-600">Discover our beautifully crafted jewelry pieces</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
