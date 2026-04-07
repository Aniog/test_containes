import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Gallery />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            Made with ❤️ for my amazing cat
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Click on any photo to view it in full size
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
