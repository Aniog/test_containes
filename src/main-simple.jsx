import React from "react";
import ReactDOM from "react-dom/client";

// Ultra simple React app with inline styles
function App() {
  return React.createElement('div', { style: { padding: '40px', backgroundColor: '#F5F0EB', minHeight: '100vh' } },
    React.createElement('h1', { style: { color: '#C9A96E', fontSize: '48px', fontFamily: 'serif' } }, 'Velmora Fine Jewelry'),
    React.createElement('p', { style: { fontSize: '18px', marginTop: '20px' } }, 'Demi-fine gold jewelry for the modern woman'),
    React.createElement('button', { 
      style: { 
        marginTop: '30px', 
        padding: '12px 30px', 
        backgroundColor: 'transparent', 
        border: '2px solid #C9A96E', 
        color: '#C9A96E',
        fontSize: '14px',
        cursor: 'pointer'
      } 
    }, 'Shop Collection')
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
