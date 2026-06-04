import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import GlobalStories from "./pages/GlobalStories";
import TheLab from "./pages/TheLab";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<GlobalStories />} />
          <Route path="/lab" element={<TheLab />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

