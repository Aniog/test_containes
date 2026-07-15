function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white px-6">
          <h1 className="font-serif text-6xl mb-6">VELMORA</h1>
          <p className="text-xl mb-10">Fine Jewelry for Every Occasion</p>
          <button className="px-10 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase font-medium hover:bg-gray-200 transition-colors">
            Shop Collection
          </button>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="font-serif text-2xl mb-4">Earrings</h3>
            <p className="text-gray-600">Elegant designs for every style</p>
          </div>
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="font-serif text-2xl mb-4">Necklaces</h3>
            <p className="text-gray-600">Timeless pieces to treasure</p>
          </div>
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="font-serif text-2xl mb-4">Huggies</h3>
            <p className="text-gray-600">Everyday luxury redefined</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
