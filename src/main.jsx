import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Simple test with standard Tailwind classes
function App() {
  return React.createElement('div', { className: 'min-h-screen bg-white' },
    React.createElement('section', { 
      className: 'h-screen flex items-center justify-center bg-gray-900'
    },
      React.createElement('div', { className: 'text-center text-white px-4' },
        React.createElement('h1', { 
          className: 'text-5xl font-light italic mb-6'
        }, 'Velmora Fine Jewelry'),
        React.createElement('p', { 
          className: 'text-lg mb-8'
        }, 'Crafted to be treasured'),
        React.createElement('button', { 
          className: 'border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900'
        }, 'Shop Collection')
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
