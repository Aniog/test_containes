// Simple test to check if React renders
const fs = require('fs');
const path = require('path');

// Read the built JS file
const jsPath = path.join(__dirname, 'dist', 'assets', 'index-O2mAJ8os.js');
const js = fs.readFileSync(jsPath, 'utf-8');

// Check if it contains key components
console.log('Contains HomePage:', js.includes('HomePage') || js.includes('fh'));
console.log('Contains ReactDOM:', js.includes('createRoot'));
console.log('Contains CartProvider:', js.includes('Ol()'));
console.log('Contains CartContext:', js.includes('createContext'));

// Count occurrences of key strings
const patterns = ['VELMORA', 'Bestsellers', 'HeroSection', 'TrustBar'];
patterns.forEach(p => {
  console.log(`${p}:`, js.includes(p));
});
