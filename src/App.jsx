import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';

// Minimal test
function TestPage() {
  return <div style={{color: 'white', background: 'green', padding: '40px'}}>TEST - NO CART PROVIDER</div>;
}

function AppLayout() {
  return (
    <div>
      <TestPage />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
