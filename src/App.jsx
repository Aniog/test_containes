import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import { ContactPage } from "./pages/Contact";
import { GenericPage } from "./pages/GenericPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<GenericPage title="Our Sourcing Services" />} />
          <Route path="how-it-works" element={<GenericPage title="How It Works" />} />
          <Route path="products" element={<GenericPage title="Products We Source" />} />
          <Route path="case-studies" element={<GenericPage title="Case Studies" />} />
          <Route path="blog" element={<GenericPage title="Blog & Resources" />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<GenericPage title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
