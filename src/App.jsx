import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/museum/Navbar";
import Footer from "@/components/museum/Footer";
import HomePage from "@/pages/HomePage";
import MuseumPage from "@/pages/MuseumPage";
import InventionDetailPage from "@/pages/InventionDetailPage";
import AboutPage from "@/pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080c18] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/museum" element={<MuseumPage />} />
            <Route path="/museum/:id" element={<InventionDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
